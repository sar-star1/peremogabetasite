# Peremoga Bakery — public website

The bakery's public site (www.peremogabakery.com). React + Vite + Tailwind, hosted on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Opens on http://localhost:8080.

## Deploy

Vercel builds every push. `main` is the live site; any other branch gets its own preview URL.

`vercel.json` sends every non-asset path to `index.html` so routes like `/b2b` load directly.

## Images

All photos and videos live in `src/assets` (and `public/assets`) and are bundled with the site.
