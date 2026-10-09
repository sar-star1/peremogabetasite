// After `vite build` (browser) and `vite build --ssr` (dist-ssr), render every
// route to its own HTML file with real content and per-page <head>, so search
// engines and AI crawlers that don't run JavaScript see the full page.
// Vercel serves /b2b from dist/b2b.html (cleanUrls) and dist/404.html for
// unknown paths.
import { readFile, rm, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const { render, headTags, PAGES, NOT_FOUND } = await import(new URL("../dist-ssr/entry-server.js", import.meta.url));
const template = await readFile(new URL("index.html", dist), "utf8");

const page = (seo, url) =>
  template.replace("<!--seo-head-->", headTags(seo)).replace("<!--app-html-->", render(url));

for (const seo of PAGES) {
  const file = seo.path === "/" ? "index.html" : `${seo.path.slice(1)}.html`;
  await writeFile(new URL(file, dist), page(seo, seo.path));
  console.log(`[prerender] ${seo.path} → dist/${file}`);
}
await writeFile(new URL("404.html", dist), page(NOT_FOUND, "/404"));
console.log("[prerender] 404 → dist/404.html");
await rm(new URL("../dist-ssr/", import.meta.url), { recursive: true });
