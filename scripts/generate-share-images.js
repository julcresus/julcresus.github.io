// Generates 1200x630 social share cards into public/img/share/ using headless Chrome.
// Run manually when a project's name, hook or hero screen changes:
//   node scripts/generate-share-images.js
// The output is committed, and scripts/prerender-routes.js points each page at its card.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'public', 'img');
const OUT = path.join(IMG, 'share');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function readExports(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/export const /g, 'const ');
  return new Function(`${src}; return { ${names.join(', ')} };`)();
}
const { projects } = readExports('src/data/projects.js', ['projects']);

// The screen shown on each card (relative to public/img) and where to anchor the crop.
const HERO = {
  hmrc: { src: 'hmrc/picture1.png', pos: '0% 0%' },
  naturalengland: { src: 'naturalengland/picture1.png', pos: '0% 0%' },
  defra: { src: 'defra/picture1.jpg', pos: '0% 0%' },
  shyl: { src: 'shyl/shyl_2.webp', pos: '40% 30%' },
  rethink: { src: 'rethink/picture1.png', pos: '50% 0%' },
  shya: { src: 'shya/picture5.png', pos: '50% 20%' },
  mag: { src: 'mag/picture1.png', pos: '50% 50%' },
  mod: { src: 'mod/mod-1.webp', pos: '50% 20%' },
  emm: { src: 'emm/picture1.webp', pos: '50% 30%' },
  sg: { src: 'sgdesign/picture1.webp', pos: '50% 40%' },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function html({ eyebrow, title, hook, hero }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#f4f4f1;font-family:Inter,-apple-system,Helvetica,Arial,sans-serif;color:#111;position:relative}
.text{position:absolute;left:72px;top:64px;bottom:64px;width:470px;display:flex;flex-direction:column;justify-content:space-between}
.eyebrow{font-size:22px;color:#444;letter-spacing:.2px}
h1{font-size:${title.length > 16 ? 60 : 72}px;line-height:1.05;font-weight:600;letter-spacing:-1.5px;margin:20px 0 22px}
.hook{font-size:28px;line-height:1.35;color:#222}
.by{font-size:22px;line-height:1.4;color:#444}.by strong{color:#111;font-weight:600}
.shot{position:absolute;left:600px;top:72px;right:-40px;bottom:-40px;border-radius:18px 0 0 0;overflow:hidden;background:#fff;
 box-shadow:0 24px 60px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.08)}
.shot img{width:100%;height:100%;object-fit:cover;object-position:${hero ? hero.pos : '0 0'}}
${hero ? '' : '.shot{display:none}.text{width:900px}h1{font-size:84px}.hook{font-size:34px;max-width:760px}'}
</style></head><body>
<div class="text"><div><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1><p class="hook">${esc(hook)}</p></div>
<div class="by"><strong>Julien Crésus-Ashton</strong><br>Senior Interaction Designer</div></div>
${hero ? `<div class="shot"><img src="file://${path.join(IMG, hero.src)}"></div>` : ''}
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
  { id: 'home', eyebrow: 'Portfolio', title: 'Julien Crésus-Ashton', hook: 'Senior Interaction Designer. I make complex services easier to use.' },
  { id: 'about', eyebrow: 'About', title: 'Julien Crésus-Ashton', hook: 'Eight years designing government services and consumer apps in London.' },
  { id: 'cv', eyebrow: 'Curriculum vitae', title: 'Julien Crésus-Ashton', hook: 'Senior Interaction Designer. SC cleared. HMRC, DEFRA, Natural England.' },
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
