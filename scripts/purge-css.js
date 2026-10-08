// Runs after the build. Bootstrap's full stylesheet (about 160 KB) is imported for the grid
// and a few utilities, and it blocks first paint. This strips every rule the built site
// never uses, which cuts the main stylesheet by roughly 85%.
//
// Class names built at runtime (react-bootstrap composes "col-lg-4" from props, the theme
// toggle adds "dark-mode") never appear as literals in the bundle, so they are safelisted.

const fs = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');

const BUILD = process.env.BUILD_PATH ? path.resolve(process.env.BUILD_PATH) : path.join(__dirname, '..', 'build');
const cssDir = path.join(BUILD, 'static', 'css');

(async () => {
  const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
  for (const file of files) {
    const full = path.join(cssDir, file);
    const before = fs.statSync(full).size;
    const [result] = await new PurgeCSS().purge({
      content: [path.join(BUILD, '*.html'), path.join(BUILD, 'static', 'js', '*.js')],
      css: [full],
      safelist: {
        standard: [/^dark-mode/, /^col(-|$)/, /^row/, /^g[xy]?-/, /^container/],
      },
      keyframes: false,
      fontFace: false,
    });
    fs.writeFileSync(full, result.css);
    console.log(`Purged ${file}: ${Math.round(before / 1024)} KB to ${Math.round(result.css.length / 1024)} KB`);
  }
})().catch(e => { console.error(e); process.exit(1); });
