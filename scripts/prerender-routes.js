// Runs after `react-scripts build`. GitHub Pages has no SPA fallback, so deep links
// like /hmrc return HTTP 404 and rely on public/404.html redirecting in JavaScript.
// Crawlers and link-preview bots don't follow that, so they see an empty 404.
//
// This writes build/<route>.html for every route: a copy of the built index.html with
// that page's title, description, canonical URL and social tags. GitHub Pages serves
// /hmrc from hmrc.html with status 200, and the React app boots from it as normal.
// (A file, not a hmrc/index.html folder: a folder makes Pages redirect to /hmrc/, which
// breaks the site's relative ./img and ./pdf paths.) public/404.html stays as the
// fallback for unknown URLs. Also writes sitemap.xml.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUILD = process.env.BUILD_PATH ? path.resolve(process.env.BUILD_PATH) : path.join(ROOT, 'build');
const ORIGIN = 'https://juliencresus.com';
const DEFAULT_IMAGE = '/img/hmrc.webp';

// src/data files are ES modules; read them as plain data without a bundler.
function readExports(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/export const /g, 'const ');
  return new Function(`${src}; return { ${names.join(', ')} };`)();
}

const { PAGE_TITLES, PAGE_META } = readExports('src/data/pageMeta.js', ['PAGE_TITLES', 'PAGE_META']);
const { projects } = readExports('src/data/projects.js', ['projects']);

const imageByRoute = Object.fromEntries(
  projects.map(p => [p.route, p.image.replace(/^\./, '')])
);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

function render(route) {
  const title = PAGE_TITLES[route];
  const description = (PAGE_META[route] || PAGE_META['/']).description;
  const url = ORIGIN + route;
  const image = ORIGIN + (imageByRoute[route] || DEFAULT_IMAGE);

  const stripped = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="(?:og|twitter):(?:title|description|url|image|type)"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/, '');

  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="twitter:url" content="${url}">`,
    `<meta property="twitter:title" content="${esc(title)}">`,
    `<meta property="twitter:description" content="${esc(description)}">`,
    `<meta property="twitter:image" content="${image}">`,
  ].join('');

  if (!stripped.includes('</head>')) throw new Error('build/index.html has no </head>');
  return stripped.replace('</head>', head + '</head>');
}

const routes = Object.keys(PAGE_TITLES).filter(r => r !== '/');
routes.forEach(route => {
  fs.writeFileSync(path.join(BUILD, route.slice(1) + '.html'), render(route));
});

const urls = ['/', ...routes].map(r => `  <url><loc>${ORIGIN}${r === '/' ? '/' : r}</loc></url>`).join('\n');
fs.writeFileSync(
  path.join(BUILD, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`Prerendered ${routes.length} route pages and sitemap.xml`);
