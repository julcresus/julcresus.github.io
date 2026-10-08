// Generates 1200x630 social share cards into public/img/share/ using headless Chrome.
// Run manually when a project's name, hook or hero screen changes:
//   node scripts/generate-share-images.js
// The output is committed, and scripts/prerender-routes.js points each page at its card.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'public', 'img');
const OUT = path.join(IMG, 'share');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function readExports(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/export const /g, 'const ');
  return new Function(`${src}; return { ${names.join(', ')} };`)();
}
const { projects } = readExports('src/data/projects.js', ['projects']);

// The screen shown on each card (relative to public/img). x and w are the left edge and
// width of the crop as fractions of the image, y is the top edge; the frame cuts the
// bottom. Choose crops that start and end on whitespace or a whole component.
const HERO = {
  hmrc: { src: 'hmrc/picture1.png', x: 0.03, w: 0.57, y: 0 },
  naturalengland: { src: 'naturalengland/picture2.png', x: 0.15, w: 0.5, y: 0 },
  defra: { src: 'defra/picture1.jpg', x: 0.12, w: 0.4, y: 0.05 },
  shyl: { src: 'shyl/shyl_1.webp', x: 0.27, w: 0.44, y: 0.1, bg: '#f7f7f7' },
  rethink: { src: 'rethink/picture1.png', x: 0.1, w: 0.8, y: 0, bg: '#fff' },
  shya: { src: 'shya/picture5.png', x: 0.13, w: 0.74, y: 0, bg: '#10162b' },
  mag: { src: 'mag/picture3.png', x: 0.01, w: 0.98, y: 0.02, bg: '#000' },
  mod: { src: 'mod/mod-4.webp', x: 0.08, w: 0.354, y: 0.2, bg: '#f7f7f7' },
  emm: { src: 'emm/picture1.webp', x: 0.275, w: 0.45, y: 0.05, bg: '#fff' },
  sg: { src: 'sgdesign/picture1.webp', x: 0.21, w: 0.58, y: 0.1, bg: '#fff' },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Frame geometry (px). Must match the CSS below.
const PANEL = { left: 600, top: 56, right: 56, bottom: 56 };
const PANEL_W = 1200 - PANEL.left - PANEL.right;

function imageSize(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file]).toString();
  return { w: +out.match(/pixelWidth: (\d+)/)[1], h: +out.match(/pixelHeight: (\d+)/)[1] };
}

function heroStyle(hero) {
  const file = path.join(IMG, hero.src);
  const { w, h } = imageSize(file);
  const bgW = PANEL_W / hero.w;           // rendered width of the whole image
  const bgH = bgW * (h / w);
  return `background:${hero.bg || '#fff'} url('file://${file}') no-repeat;` +
    `background-size:${bgW}px ${bgH}px;background-position:${-hero.x * bgW}px ${-hero.y * bgH}px`;
}

function html({ eyebrow, title, hook, hero, photo }) {
  const big = !hero && !photo;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#f4f4f1;font-family:Inter,-apple-system,Helvetica,Arial,sans-serif;color:#111;position:relative}
.text{position:absolute;left:72px;top:60px;bottom:60px;width:${big ? 1000 : 470}px;display:flex;flex-direction:column;justify-content:space-between}
.eyebrow{font-size:22px;color:#444}
h1{font-size:${big || Math.max(...title.split(' ').map(w => w.length)) > 9 ? 64 : 84}px;line-height:1.04;font-weight:600;letter-spacing:-2px;margin-bottom:24px}
.hook{font-size:30px;line-height:1.35;color:#222}
.by{font-size:22px;line-height:1.4;color:#444}.by strong{color:#111;font-weight:600}
.panel{position:absolute;left:${PANEL.left}px;top:${PANEL.top}px;right:${PANEL.right}px;bottom:${PANEL.bottom}px;border-radius:16px;overflow:hidden;
 box-shadow:0 20px 50px rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}
.photo{position:absolute;right:72px;top:96px;width:340px;height:438px;border-radius:20px;background:url('file://${path.join(IMG, 'me.webp')}') center 12%/cover;
 box-shadow:0 20px 50px rgba(0,0,0,.16)}
${photo ? '.text{width:640px}' : ''}
</style></head><body>
<div class="text"><div class="eyebrow">${esc(eyebrow)}</div>
<div><h1>${esc(title)}</h1><p class="hook">${esc(hook)}</p></div>
<div class="by"><strong>Julien Crésus-Ashton</strong><br>Senior Interaction Designer</div></div>
${hero ? `<div class="panel" style="${heroStyle(hero)}"></div>` : ''}${photo ? '<div class="photo"></div>' : ''}
</body></html>`;
}

const cards = projects.map(p => {
  const company = p.title.split(' — ')[0].replace(/^Dam Digital$/, 'DAM Digital');
  return {
    id: p.id,
    eyebrow: `Case study · ${company} · ${p.year}`,
    title: p.shortTitle,
    hook: p.teaser.split(' · ').map(t => t.charAt(0).toUpperCase() + t.slice(1)).join('. ').replace(/\.?$/, '.'),
    hero: HERO[p.id],
  };
});

cards.push(
  { id: 'home', photo: true, eyebrow: 'Portfolio', title: 'Julien Crésus-Ashton', hook: 'Senior Interaction Designer. I make complex services easier to use.' },
  { id: 'about', photo: true, eyebrow: 'About', title: 'Julien Crésus-Ashton', hook: 'Eight years designing government services and consumer apps in London.' },
  { id: 'cv', photo: true, eyebrow: 'Curriculum vitae', title: 'Julien Crésus-Ashton', hook: 'Senior Interaction Designer. SC cleared. HMRC, DEFRA, Natural England.' },
  { id: 'accessibility', eyebrow: 'Accessibility statement', title: 'Accessibility', hook: 'WCAG 2.2 AA target, what is in place, known issues and how to report a problem.' },
);

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'share-'));
const profile = path.join(tmp, 'profile');

// Headless Chrome writes the screenshot but can then hang, so stop it once the file settles.
function shoot(card) {
  const file = path.join(tmp, `${card.id}.html`);
  const out = path.join(OUT, `${card.id}.png`);
  fs.writeFileSync(file, html(card));
  fs.rmSync(out, { force: true });
  return new Promise((resolve, reject) => {
    const chrome = spawn(CHROME, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${profile}`,
      '--window-size=1200,630', '--virtual-time-budget=6000', '--force-device-scale-factor=1',
      `--screenshot=${out}`, `file://${file}`,
    ], { stdio: 'ignore' });
    let last = -1;
    let waited = 0;
    const timer = setInterval(() => {
      waited += 500;
      const size = fs.existsSync(out) ? fs.statSync(out).size : 0;
      if (size > 0 && size === last) { clearInterval(timer); chrome.kill('SIGKILL'); resolve(); }
      else if (waited > 60000) { clearInterval(timer); chrome.kill('SIGKILL'); reject(new Error(`timed out: ${card.id}`)); }
      last = size;
    }, 500);
  }).then(() => console.log('wrote', `public/img/share/${card.id}.png`));
}

(async () => {
  for (const card of cards) await shoot(card);
  fs.rmSync(tmp, { recursive: true, force: true });
})().catch(e => { console.error(e.message); process.exit(1); });
