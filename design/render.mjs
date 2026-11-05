// Renders every slide in ../content/posts.json to 1080x1350 PNG (Instagram 4:5); SQUARE=1 gives 1080x1080 for ads.
// Usage (from anywhere):  node design/render.mjs [d01 d05 ...]
// Needs the `playwright` package and a Chromium it can launch. Fonts and the logo
// are bundled in this folder, so output is identical on any machine.
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const data = JSON.parse(readFileSync(join(root, "content/posts.json"), "utf8"));
const only = new Set(process.argv.slice(2));
const mark = readFileSync(join(here, "aihub-mark.svg"), "utf8")
  .replace(/id="g"/g, 'id="gm"').replace(/url\(#g\)/g, "url(#gm)");
const fontUrl = (f) => pathToFileURL(join(here, "fonts", f)).href;

const SQUARE = process.env.SQUARE === "1"; // SQUARE=1 renders 1080x1080 (Meta carousel ads) into assets-ads/
const W = 1080, H = SQUARE ? 1080 : 1350;
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const css = (accent, light) => `
@font-face{font-family:G;font-weight:400;src:url(${fontUrl("Geist-Regular.woff2")})}
@font-face{font-family:G;font-weight:500;src:url(${fontUrl("Geist-Medium.woff2")})}
@font-face{font-family:G;font-weight:600;src:url(${fontUrl("Geist-SemiBold.woff2")})}
@font-face{font-family:G;font-weight:700;src:url(${fontUrl("Geist-Bold.woff2")})}
@font-face{font-family:G;font-weight:900;src:url(${fontUrl("Geist-Black.woff2")})}
:root{--s:1;--bg:${light ? "#F6F5F1" : "#0B0B12"};--fg:${light ? "#0B0B12" : "#F4F2EE"};--mut:${light ? "#55555F" : "#A3A3B2"};--acc:${accent};--line:${light ? "#D9D7D0" : "#2A2A38"}}
*{box-sizing:border-box;margin:0;padding:0}
body{width:${W}px;height:${H}px;background:var(--bg);color:var(--fg);font-family:G,system-ui,sans-serif;overflow:hidden;-webkit-font-smoothing:antialiased}
.frame{width:${W}px;height:${H}px;padding:84px 90px 72px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center;height:44px;font-size:26px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}
.top .e{color:var(--acc)}.top .n{color:var(--mut);letter-spacing:.08em;font-weight:500}
.content{flex:1;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:36px 0}
.foot{display:flex;align-items:center;justify-content:space-between;border-top:2px solid var(--line);padding-top:30px;height:110px}
.brand{display:flex;align-items:center;gap:18px;font-weight:700;font-size:32px}.brand svg{width:56px;height:56px}
.url{color:var(--mut);font-size:28px;font-weight:500}
h1,h2{letter-spacing:-.04em}
.cover h1{font-size:calc(var(--s)*118px);line-height:1.02;font-weight:900}
.cover p{margin-top:44px;font-size:calc(var(--s)*44px);line-height:1.3;color:var(--mut);font-weight:500}
.cover .bar{width:140px;height:12px;background:var(--acc);margin-bottom:48px;border-radius:6px}
.stat .num{font-size:calc(var(--s)*330px);font-weight:900;letter-spacing:-.06em;line-height:.95;color:var(--acc)}
.stat .lab{margin-top:26px;font-size:calc(var(--s)*58px);font-weight:700;line-height:1.1;letter-spacing:-.02em}
.stat .bd{margin-top:28px;font-size:calc(var(--s)*40px);line-height:1.38;color:var(--mut)}
.point h2{font-size:calc(var(--s)*92px);line-height:1.04;font-weight:800}
.point .bd{margin-top:44px;font-size:calc(var(--s)*48px);line-height:1.38;color:var(--fg);opacity:.9}
.point .tag{margin-top:44px;align-self:flex-start;font-size:34px;font-weight:600;color:var(--bg);background:var(--acc);padding:12px 26px;border-radius:999px}
.point .rule,.list .rule{width:96px;height:10px;background:var(--acc);border-radius:5px;margin-bottom:40px}
.list h2{font-size:calc(var(--s)*76px);line-height:1.05;font-weight:800}
.list ul{list-style:none;margin-top:44px;display:flex;flex-direction:column;gap:calc(var(--s)*26px)}
.list li{display:flex;gap:26px;align-items:flex-start;font-size:calc(var(--s)*42px);line-height:1.28;border-top:2px solid var(--line);padding-top:calc(var(--s)*24px)}
.list li b{color:var(--acc);font-weight:800;min-width:56px}
.cta h1{font-size:calc(var(--s)*104px);line-height:1.03;font-weight:900}
.cta p{margin-top:40px;font-size:calc(var(--s)*46px);color:var(--mut);line-height:1.35}
.cta .btn{margin-top:56px;align-self:flex-start;font-size:42px;font-weight:700;background:var(--acc);color:#0B0B12;padding:26px 48px;border-radius:999px}
.text{justify-content:flex-start;padding-top:20px}
.text h1{font-size:calc(var(--s)*96px);line-height:1.04;font-weight:900;letter-spacing:-.045em}
.text .ls{margin-top:60px;display:flex;flex-direction:column;gap:calc(var(--s)*34px)}
.text .ls p{font-size:calc(var(--s)*50px);line-height:1.28;font-weight:500;color:#2A2A33}
.text.in .top{display:none}
`;

function body(s, i, n) {
  const k = s.kind;
  const top = `<div class="top"><span class="e">${esc(s.eyebrow || "")}</span><span class="n">${String(i + 1).padStart(2, "0")}/${String(n).padStart(2, "0")}${i < n - 1 ? " →" : ""}</span></div>`;
  const foot = `<div class="foot"><div class="brand">${mark}<span>AI Hub</span></div><div class="url">aihubswiss.org</div></div>`;
  let c = "";
  if (k === "cover") c = `<div class="content cover"><div class="bar"></div><h1>${esc(s.headline)}</h1><p>${esc(s.sub || "")}</p></div>`;
  else if (k === "stat") c = `<div class="content stat"><div class="num">${esc(s.stat)}</div><div class="lab">${esc(s.label)}</div><div class="bd">${esc(s.body || "")}</div></div>`;
  else if (k === "point") c = `<div class="content point"><div class="rule"></div><h2>${esc(s.headline)}</h2><div class="bd">${esc(s.body || "")}</div>${s.tag ? `<div class="tag">${esc(s.tag)}</div>` : ""}</div>`;
  else if (k === "list") c = `<div class="content list"><div class="rule"></div><h2>${esc(s.headline)}</h2><ul>${s.items.map((t, j) => `<li><b>${j + 1}</b><span>${esc(t)}</span></li>`).join("")}</ul></div>`;
  else if (k === "cta") c = `<div class="content cta"><h1>${esc(s.headline)}</h1><p>${esc(s.body || "")}</p><div class="btn">${esc(s.button || "")}</div></div>`;
  else if (k === "text") c = `<div class="content text"><h1>${esc(s.headline)}</h1><div class="ls">${s.lines.map((l) => `<p>${esc(l)}</p>`).join("")}</div></div>`;
  else throw new Error("unknown slide kind " + k);
  return `<div class="frame">${k === "text" ? "" : top}${c}${foot}</div>`;
}

const fit = `
document.fonts.ready.then(()=>{const c=document.querySelector('.content');let s=1;
while(c.scrollHeight>c.clientHeight+1&&s>0.45){s-=0.03;document.documentElement.style.setProperty('--s',s.toFixed(2));}
document.body.dataset.ready='1';window.__scale=s;});`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const report = [];
for (const p of data.posts) {
  if (!p.slides || (only.size && !only.has(p.id))) continue;
  const accent = data.pillars[p.pillar].accent;
  const outDir = join(root, SQUARE ? "assets-ads" : "assets", p.id);
  mkdirSync(outDir, { recursive: true });
  for (let i = 0; i < p.slides.length; i++) {
    const s = p.slides[i];
    const light = s.kind === "text";
    const html = `<!doctype html><meta charset="utf-8"><style>${css(light ? "#6D28D9" : accent, light)}</style><body>${body({ ...s, eyebrow: s.eyebrow || data.pillars[p.pillar].name }, i, p.slides.length)}<script>${fit}</script></body>`;
    await page.setContent(html, { waitUntil: "load" });
    await page.waitForSelector("body[data-ready='1']");
    const scale = await page.evaluate(() => window.__scale);
    const file = join(outDir, `${p.id}-${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: W, height: H } });
    report.push(`${p.id}-${i + 1} scale ${scale.toFixed(2)}`);
  }
}
await browser.close();
console.log(report.join("\n"));
