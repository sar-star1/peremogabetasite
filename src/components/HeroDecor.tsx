import { motion } from "framer-motion";
import { uploadedPhotos } from "@/assets/uploads";

/**
 * 20 decorative thumbnails arranged around the PEREMOGA BAKERY hero wordmark.
 *
 * Safe zones (no text overlap) at every breakpoint:
 *  - Outer left & right rails (outside the centered wordmark)
 *  - Top strip above the wordmark
 *  - Bottom strip above the CTA buttons (which sit BELOW the collage area)
 *
 * Per-viewport sizes:
 *  - mobile  : ~28px tiny thumbs, tight against edges (left-0 / right-0)
 *  - tablet  : ~52px thumbs in the section gutters
 *  - desktop : ~80px thumbs with more breathing room
 */

type Spot = {
  /** 1-based index into uploadedPhotos (1..20). */
  i: number;
  /** Responsive Tailwind positioning + size classes. */
  cls: string;
  rotate?: number;
};

// 20 spots distributed around the hero perimeter. Center stays clear for the wordmark.
const spots: Spot[] = [
  // ─── Top row (4): just above where wordmark eyebrow sits, far left → right
  { i: 1,  cls: "top-0 left-0 w-7 h-7 md:top-2 md:left-4 md:w-12 md:h-12 lg:top-2 lg:left-6 lg:w-20 lg:h-20", rotate: -6 },
  { i: 2,  cls: "top-0 left-[22%] w-7 h-7 md:top-1 md:left-[22%] md:w-12 md:h-12 lg:top-0 lg:left-[22%] lg:w-16 lg:h-16", rotate: 4 },
  { i: 3,  cls: "top-0 right-[22%] w-7 h-7 md:top-1 md:right-[22%] md:w-12 md:h-12 lg:top-0 lg:right-[22%] lg:w-16 lg:h-16", rotate: -3 },
  { i: 4,  cls: "top-0 right-0 w-7 h-7 md:top-2 md:right-4 md:w-12 md:h-12 lg:top-2 lg:right-6 lg:w-20 lg:h-20", rotate: 7 },

  // ─── Left rail (6): outside left edge of wordmark, top → bottom
  { i: 5,  cls: "top-[15%] left-0 w-7 h-7 md:top-[14%] md:left-1 md:w-12 md:h-12 lg:top-[14%] lg:left-2 lg:w-20 lg:h-20", rotate: 5 },
  { i: 6,  cls: "top-[30%] left-0 w-7 h-7 md:top-[28%] md:left-2 md:w-14 md:h-14 lg:top-[28%] lg:left-4 lg:w-24 lg:h-24", rotate: -5 },
  { i: 7,  cls: "top-[45%] left-0 w-7 h-7 md:top-[44%] md:left-1 md:w-12 md:h-12 lg:top-[44%] lg:left-2 lg:w-20 lg:h-20", rotate: 3 },
  { i: 8,  cls: "top-[60%] left-0 w-7 h-7 md:top-[60%] md:left-2 md:w-14 md:h-14 lg:top-[60%] lg:left-4 lg:w-24 lg:h-24", rotate: -7 },
  { i: 9,  cls: "top-[75%] left-0 w-7 h-7 md:top-[76%] md:left-1 md:w-12 md:h-12 lg:top-[76%] lg:left-2 lg:w-20 lg:h-20", rotate: 6 },
  { i: 10, cls: "bottom-0 left-[12%] w-7 h-7 md:bottom-2 md:left-[12%] md:w-12 md:h-12 lg:bottom-2 lg:left-[14%] lg:w-16 lg:h-16", rotate: -4 },

  // ─── Right rail (6): outside right edge of wordmark, top → bottom
  { i: 11, cls: "top-[15%] right-0 w-7 h-7 md:top-[14%] md:right-1 md:w-12 md:h-12 lg:top-[14%] lg:right-2 lg:w-20 lg:h-20", rotate: -5 },
  { i: 12, cls: "top-[30%] right-0 w-7 h-7 md:top-[28%] md:right-2 md:w-14 md:h-14 lg:top-[28%] lg:right-4 lg:w-24 lg:h-24", rotate: 6 },
  { i: 13, cls: "top-[45%] right-0 w-7 h-7 md:top-[44%] md:right-1 md:w-12 md:h-12 lg:top-[44%] lg:right-2 lg:w-20 lg:h-20", rotate: -3 },
  { i: 14, cls: "top-[60%] right-0 w-7 h-7 md:top-[60%] md:right-2 md:w-14 md:h-14 lg:top-[60%] lg:right-4 lg:w-24 lg:h-24", rotate: 5 },
  { i: 15, cls: "top-[75%] right-0 w-7 h-7 md:top-[76%] md:right-1 md:w-12 md:h-12 lg:top-[76%] lg:right-2 lg:w-20 lg:h-20", rotate: -6 },
  { i: 16, cls: "bottom-0 right-[12%] w-7 h-7 md:bottom-2 md:right-[12%] md:w-12 md:h-12 lg:bottom-2 lg:right-[14%] lg:w-16 lg:h-16", rotate: 4 },

  // ─── Bottom row (4): below wordmark, sitting just above the CTA strip
  { i: 17, cls: "bottom-0 left-0 w-7 h-7 md:bottom-2 md:left-4 md:w-12 md:h-12 lg:bottom-2 lg:left-6 lg:w-20 lg:h-20", rotate: 7 },
  { i: 18, cls: "bottom-0 left-[36%] w-7 h-7 md:bottom-1 md:left-[36%] md:w-12 md:h-12 lg:bottom-0 lg:left-[36%] lg:w-16 lg:h-16", rotate: -4 },
  { i: 19, cls: "bottom-0 right-[36%] w-7 h-7 md:bottom-1 md:right-[36%] md:w-12 md:h-12 lg:bottom-0 lg:right-[36%] lg:w-16 lg:h-16", rotate: 3 },
  { i: 20, cls: "bottom-0 right-0 w-7 h-7 md:bottom-2 md:right-4 md:w-12 md:h-12 lg:bottom-2 lg:right-6 lg:w-20 lg:h-20", rotate: -7 },
];

const HeroDecor = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {spots.map((spot, idx) => {
        const photo = uploadedPhotos[spot.i - 1];
        if (!photo) return null;
        return (
          <motion.img
            key={`hero-decor-${spot.i}`}
            src={photo.url}
            alt=""
            loading="eager"
            initial={{ opacity: 0, scale: 0.85, rotate: spot.rotate ?? 0 }}
            animate={{ opacity: 1, scale: 1, rotate: spot.rotate ?? 0 }}
            transition={{ duration: 0.6, delay: 0.4 + idx * 0.04, ease: "easeOut" }}
            className={`absolute object-cover shadow-md ${spot.cls}`}
          />
        );
      })}
    </div>
  );
};

export default HeroDecor;
