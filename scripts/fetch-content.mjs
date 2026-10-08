// Runs before `dev` and `build`. Pulls the published website text/photo
// edits from the dashboard into src/content/published.json, and publishes the
// slot list as /content-manifest.json so the dashboard knows what to show.
//
// WEBSITE_CONTENT_URL = the dashboard's https://<dashboard>/api/website-content
// When it's set and the fetch fails, the build fails on purpose: Vercel then
// keeps the previous deployment live instead of reverting to the defaults.
import { copyFile, readFile, writeFile } from "node:fs/promises";

const out = new URL("../src/content/published.json", import.meta.url);
const url = process.env.WEBSITE_CONTENT_URL;

await copyFile(new URL("../src/content/slots.json", import.meta.url), new URL("../public/content-manifest.json", import.meta.url));

if (!url) {
  const existing = await readFile(out, "utf8").catch(() => null);
  if (existing === null) await writeFile(out, "{}\n");
  console.log("[content] WEBSITE_CONTENT_URL not set — using defaults" + (existing ? " + local published.json" : ""));
} else {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`[content] ${url} answered ${res.status}`);
  const { content } = await res.json();
  if (!content || typeof content !== "object") throw new Error("[content] unexpected response shape");
  await writeFile(out, JSON.stringify(content, null, 2) + "\n");
  console.log(`[content] ${Object.keys(content).length} published edits`);
}
