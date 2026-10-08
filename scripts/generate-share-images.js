// Generates the project imagery with headless Chrome:
//   public/img/share/<id>.png   1200x630 social share cards (title, hook and a screen)
//   public/img/thumbs/<id>.webp 960x540 screen-only thumbnails for the home-page grid
// Run manually when a project's name, hook or hero screen changes:
//   node scripts/generate-share-images.js
// The output is committed. scripts/prerender-routes.js points each page at its share card.
//
// Government projects deliberately show only their client logo (kind: 'logo') rather than
// product screens; they get the same framed-card thumbnail as everything else.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'public', 'img');
const SHARE = path.join(IMG, 'share');
const THUMBS = path.join(IMG, 'thumbs');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function readExports(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/export const /g, 'const ');
  return new Function(`${src}; return { ${names.join(', ')} };`)();
}
const { projects } = readExports('src/data/projects.js', ['projects']);

// kind 'logo':    the client logo lockup (restricted projects)
// kind 'macbook': desktop screen inside a MacBook frame
// kind 'panel':   a crop of the image (x, w = left edge and width as fractions, y = top edge);
//                 an optional `thumb` object overrides the crop for the 16:9 grid thumbnail
const HERO = {
  hmrc: { kind: 'logo', src: 'hmrc.webp' },
  naturalengland: { kind: 'logo', src: 'naturalengland.webp' },
  defra: { kind: 'logo', src: 'defra.webp' },
  mod: { kind: 'logo', src: 'mod.webp' },
  emm: { kind: 'logo', src: 'emm.webp' },
  shyl: { kind: 'panel', src: 'shyl/shyl_1.webp', x: 0.27, w: 0.44, y: 0.1, bg: '#f7f7f7', thumb: { x: 0.05, w: 0.9, y: 0.12 } },
  rethink: { kind: 'macbook', src: 'rethink/picture2.png', pos: '50% 50%', zoom: 1.1 },
  shya: { kind: 'macbook', src: 'shya/picture5.png', pos: '50% 0%' },
  mag: { kind: 'panel', src: 'mag/picture3.png', x: 0.01, w: 0.98, y: 0.02, bg: '#000' },
  sg: { kind: 'panel', src: 'sgdesign/picture1.webp', x: 0.228, w: 0.29, y: 0.243, bg: '#fff' },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const url = f => `file://${path.join(IMG, f)}`;

function imageSize(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file]).toString();
  return { w: +out.match(/pixelWidth: (\d+)/)[1], h: +out.match(/pixelHeight: (\d+)/)[1] };
}

// Inner markup + CSS for a hero, sized to a box of boxW x boxH pixels.
function heroMarkup(hero, boxW, boxH) {
  if (hero.kind === 'logo') {
    return { css: '', inner: `<div style="width:100%;height:100%;background:#f8f8f8 url('${url(hero.src)}') center/105% auto no-repeat"></div>` };
  }
  if (hero.kind === 'macbook') {
    const w = Math.min(boxW * 0.98, boxH * 1.35);   // lid width
    const bez = Math.round(w * 0.022);
    const screenW = Math.round(w - bez * 2);
    const screenH = Math.round(screenW * 0.625);   // 16:10
    const lidH = screenH + bez * 2;
    return {
      css: `.mac{position:absolute;left:50%;top:50%;transform:translate(-50%,-52%);width:${Math.round(w)}px}
.lid{background:#1d1d1f;border-radius:${bez * 1.4}px ${bez * 1.4}px ${bez * .6}px ${bez * .6}px;padding:${bez}px;height:${lidH}px;position:relative;box-shadow:0 0 0 1px #3a3a3c inset}
.lid:before{content:'';position:absolute;top:${bez * .38}px;left:50%;width:${bez * .3}px;height:${bez * .3}px;margin-left:-${bez * .15}px;border-radius:50%;background:#3a3a3c}
.scr{width:${screenW}px;height:${screenH}px;background:#fff url('${url(hero.src)}') ${hero.pos || '50% 0%'}/${hero.zoom ? `${hero.zoom * 100}% auto` : 'cover'} no-repeat;border-radius:${bez * .3}px}
.base{width:${Math.round(w * 1.08)}px;margin-left:-${Math.round(w * 0.04)}px;height:${Math.round(w * 0.022)}px;background:linear-gradient(#e3e4e6,#b9bbc0);border-radius:0 0 ${w * .02}px ${w * .02}px;position:relative;box-shadow:0 14px 28px rgba(0,0,0,.2)}
.base:after{content:'';position:absolute;left:50%;top:0;width:${Math.round(w * .16)}px;height:${Math.round(w * .008)}px;margin-left:-${Math.round(w * .08)}px;background:#9a9ca1;border-radius:0 0 ${w * .01}px ${w * .01}px}`,
      inner: '<div class="mac"><div class="lid"><div class="scr"></div></div><div class="base"></div></div>',
      bare: true,
    };
  }
  const file = path.join(IMG, hero.src);
  const { w, h } = imageSize(file);
  const bgW = boxW / hero.w;
  const bgH = bgW * (h / w);
  return {
    css: '',
    inner: `<div style="width:100%;height:100%;background:${hero.bg || '#fff'} url('${url(hero.src)}') no-repeat;background-size:${bgW}px ${bgH}px;background-position:${-hero.x * bgW}px ${-hero.y * bgH}px"></div>`,
  };
}

const PANEL = { left: 600, top: 56, right: 56, bottom: 56 };
const PANEL_W = 1200 - PANEL.left - PANEL.right;
const PANEL_H = 630 - PANEL.top - PANEL.bottom;

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');`;

function shareHtml({ eyebrow, title, hook, hero, photo }) {
  const big = !hero && !photo;
  const m = hero ? heroMarkup(hero, PANEL_W, PANEL_H) : null;
  const longWord = Math.max(...title.split(' ').map(w => w.length)) > 9;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${FONT}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#f4f4f1;font-family:Inter,-apple-system,Helvetica,Arial,sans-serif;color:#111;position:relative}
.text{position:absolute;left:72px;top:60px;bottom:60px;width:${big ? 1000 : photo ? 640 : 470}px;display:flex;flex-direction:column;justify-content:space-between}
.eyebrow{font-size:22px;color:#444}
h1{font-size:${big || longWord ? 64 : 84}px;line-height:1.04;font-weight:600;letter-spacing:-2px;margin-bottom:24px}
.hook{font-size:30px;line-height:1.35;color:#222}
.by{font-size:22px;line-height:1.4;color:#444}.by strong{color:#111;font-weight:600}
.panel{position:absolute;left:${PANEL.left}px;top:${PANEL.top}px;right:${PANEL.right}px;bottom:${PANEL.bottom}px;${m && m.bare ? '' : 'border-radius:16px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)'}}
.photo{position:absolute;right:72px;top:96px;width:340px;height:438px;border-radius:20px;background:url('${url('me.webp')}') center 12%/cover;box-shadow:0 20px 50px rgba(0,0,0,.16)}
${m ? m.css : ''}
</style></head><body>
<div class="text"><div class="eyebrow">${esc(eyebrow)}</div>
<div><h1>${esc(title)}</h1><p class="hook">${esc(hook)}</p></div>
<div class="by"><strong>Julien Crésus-Ashton</strong><br>Senior Interaction Designer</div></div>
${m ? `<div class="panel">${m.inner}</div>` : ''}${photo ? '<div class="photo"></div>' : ''}
</body></html>`;
}

// Grid thumbnails share one soft background. The MacBook sits directly on it; everything
// else (phone screens, mockups, client logos) is framed as a card with the same margins.
function thumbHtml(hero) {
  const framed = hero.kind !== 'macbook';
  const inset = { x: 56, y: 36 };
  const m = framed
    ? heroMarkup({ ...hero, ...(hero.thumb || {}) }, 960 - inset.x * 2, 540 - inset.y * 2)
    : heroMarkup(hero, 960, 540);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
body{width:960px;height:540px;overflow:hidden;background:#f3f3f3;position:relative}
.frame{position:absolute;${framed ? `left:${inset.x}px;right:${inset.x}px;top:${inset.y}px;bottom:${inset.y}px;border-radius:14px;overflow:hidden;box-shadow:0 14px 34px rgba(0,0,0,.14),0 0 0 1px rgba(0,0,0,.07)` : 'inset:0'}}
${m.css}
</style></head><body><div class="frame">${m.inner}</div></body></html>`;
}

const cards = projects.map(p => {
  const company = p.title.split(' — ')[0];
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

fs.mkdirSync(SHARE, { recursive: true });
fs.mkdirSync(THUMBS, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'share-'));
const profile = path.join(tmp, 'profile');

// Headless Chrome writes the screenshot but can then hang, so stop it once the file settles.
function shoot(name, markup, size, out) {
  const file = path.join(tmp, `${name}.html`);
  fs.writeFileSync(file, markup);
  fs.rmSync(out, { force: true });
  return new Promise((resolve, reject) => {
    const chrome = spawn(CHROME, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${profile}`,
      `--window-size=${size}`, '--virtual-time-budget=6000', '--force-device-scale-factor=1',
      `--screenshot=${out}`, `file://${file}`,
    ], { stdio: 'ignore' });
    let last = -1;
    let waited = 0;
    const timer = setInterval(() => {
      waited += 500;
      const bytes = fs.existsSync(out) ? fs.statSync(out).size : 0;
      if (bytes > 0 && bytes === last) { clearInterval(timer); chrome.kill('SIGKILL'); resolve(); }
      else if (waited > 60000) { clearInterval(timer); chrome.kill('SIGKILL'); reject(new Error(`timed out: ${name}`)); }
      last = bytes;
    }, 500);
  });
}

function toWebp(png, webp) {
  execFileSync('python3', ['-c', 'import sys;from PIL import Image;Image.open(sys.argv[1]).convert("RGB").save(sys.argv[2],"WEBP",quality=86)', png, webp]);
  fs.rmSync(png);
}

(async () => {
  for (const card of cards) {
    await shoot(card.id, shareHtml(card), '1200,630', path.join(SHARE, `${card.id}.png`));
    console.log('wrote', `public/img/share/${card.id}.png`);
  }
  for (const card of cards) {
    if (!card.hero) continue;
    const png = path.join(tmp, `${card.id}-thumb.png`);
    await shoot(`${card.id}-thumb`, thumbHtml(card.hero), '960,540', png);
    toWebp(png, path.join(THUMBS, `${card.id}.webp`));
    console.log('wrote', `public/img/thumbs/${card.id}.webp`);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
})().catch(e => { console.error(e.message); process.exit(1); });
