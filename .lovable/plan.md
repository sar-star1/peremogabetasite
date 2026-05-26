# Redesign plan — Dominique Ansel NY inspired

Reskin the entire site with a new visual language inspired by dominiqueanselny.com. All copy, routes, sections, products, and information stay exactly as they are today — only look, feel, layout, type, and color change.

## Aesthetic direction

Editorial gallery, gallery-white, floating photographic objects on negative space, with playful pastel color-block rectangles peeking from behind product photos. Black ink-style sans typography, very large display words.

- **Background**: pure off-white `#FFFFFF` / `#FAFAFA`. No warm cream, no gradients.
- **Text**: near-black `#0A0A0A`. Subtle gray `#8A8A8A` for meta.
- **Accent color blocks** (used behind images as offset rectangles): pastel blue `#D6E6F2`, pastel lime `#D9E27E`, pastel lavender `#E6E0F2`, pastel peach `#F6D9C9`. Used sparingly as decorative offsets, never as fills behind text.
- **Typography**:
  - Display: **Archivo Black** / **Archivo** (tight tracking, uppercase) for huge hero word-marks.
  - Body / UI: **Inter** all-caps for nav and labels with wide letter-spacing; mixed-case Inter for paragraphs.
  - Replace Cormorant Garamond + Manrope entirely.
- **Layout language**: asymmetric, generous whitespace, floating product cutouts, captions in small caps, no card borders, no shadows. Hairline `1px` dividers only.
- **Motion**: slow fade-up, subtle parallax on the floating images. No big animation flourishes.

## Scope of changes

1. **Design tokens** — rewrite `src/index.css` (colors, removing wheat/warm-gold palette, replacing gradients) and `tailwind.config.ts` (fontFamily, color names kept but remapped, add pastel accents). Switch Google Fonts to Archivo + Inter.
2. **Navbar** — minimal: wordmark left ("PEREMOGA BAKERY" in Archivo Black), centered city tag ("KYIV"), right side address + hours + Instagram + hamburger. Transparent over hero, white when scrolled, no gold hover — underline-on-hover instead.
3. **HeroSection** — replace the full-bleed cinematic video with the Dominique Ansel layout: huge centered display wordmark, 3–4 product photos floating around it with pastel offset rectangles behind them. Video can be moved into a smaller "story" panel later or removed from hero — confirm in question below.
4. **CategoryTiles** — convert from tiles to an editorial "shop the categories" row: floating product images with caption + thin underline link.
5. **PromoStrip** — convert the 4 alternating strips into a magazine-style: image floats with a pastel offset block; copy block has small-caps eyebrow, big Archivo headline, thin body, underline CTA. No card backgrounds.
6. **MenuSection** — gallery grid: square photos on white, item name in Archivo (mixed case, bold), price right-aligned in mono-ish small caps, description in small gray. Tab pills become understated text links with underline on active.
7. **Reviews / Instagram / FAQ / Contact / Footer** — restyle to match: black text on white, hairline dividers, Archivo display headings, all-caps Inter labels. Footer becomes minimal centered wordmark + 3 small-caps links + © line.
8. **Inner pages** (`B2B`, `Clients`, `CharityBread`) — apply the same tokens automatically via the global CSS + shared components; spot-check headings/buttons and adjust local classes if any hardcoded colors remain.

Nothing about copy, images, routes, product data, or business logic changes.

## Question before I start

```text
The Dominique Ansel hero is a still editorial collage, not a video. You
recently put a lot of work into the cinematic hero video. Two options:
```

1. **Replace the hero with the editorial collage** (closer to Dominique Ansel). The hero video gets removed from the homepage.
2. **Keep the hero video** as-is and apply the new editorial style to everything below it.

Which one do you want? (I will not start coding until you answer.)
