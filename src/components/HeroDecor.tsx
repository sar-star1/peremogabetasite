import { motion } from "framer-motion";
import { uploadedPhotos } from "@/assets/uploads";

/**
 * 20 decorative photos in the hero, sized variably (tiny → as large as the
 * existing draggable hero photos) and positioned in the gaps between them.
 *
 * The 7 existing draggable photos (default layout) occupy roughly:
 *   - top-left big block, top-center small, top-right block
 *   - mid-left block, mid-right block
 *   - bottom-center-left, bottom-center-right
 *
 * Gap zones used for decor:
 *   A. between top-left and top-center      (~28% .. 35% wide column)
 *   B. between top-center and top-right     (~50% .. 70% wide column)
 *   C. mid band between top + mid rows
 *   D. far-right vertical strip
 *   E. bottom-left strip + bottom-center slot + far-right bottom
 *
 * Each spot defines its own size per breakpoint (mobile / tablet / desktop)
 * via Tailwind arbitrary values so sizes vary widely.
 */

type Spot = {
  /** 1-based index into uploadedPhotos. */
  i: number;
  /** Position classes (percentage-based, per breakpoint). */
  pos: string;
  /** Size classes per breakpoint, e.g. "w-[28px] h-[28px] md:w-[60px] md:h-[60px] lg:w-[120px] lg:h-[120px]". */
  size: string;
  rotate?: number;
};

// All percentages are relative to the hero collage box.
// Sizes are tuned so some decor matches the scale of existing draggable photos.
const spots: Spot[] = [
  // ── Zone A: narrow top-center-left gap (~28-34% wide)
  { i: 1,  pos: "top-[2%] left-[28%]",         size: "w-[26px] h-[26px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px]",   rotate: -6 },
  { i: 2,  pos: "top-[18%] left-[26%]",        size: "w-[32px] h-[32px] md:w-[70px] md:h-[70px] lg:w-[120px] lg:h-[120px]", rotate: 5 },

  // ── Zone B: wide top-center-right gap (~50-70%)
  { i: 3,  pos: "top-[1%] left-[52%]",         size: "w-[40px] h-[40px] md:w-[90px] md:h-[90px] lg:w-[150px] lg:h-[150px]", rotate: 4 },
  { i: 4,  pos: "top-[20%] left-[62%]",        size: "w-[28px] h-[28px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px]", rotate: -3 },
  { i: 5,  pos: "top-[6%] left-[68%]",         size: "w-[22px] h-[22px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px]",   rotate: 8 },

  // ── Zone C: mid band, beside / behind the wordmark
  { i: 6,  pos: "top-[32%] left-[28%]",        size: "w-[44px] h-[44px] md:w-[110px] md:h-[110px] lg:w-[200px] lg:h-[200px]", rotate: -5 },
  { i: 7,  pos: "top-[28%] left-[44%]",        size: "w-[20px] h-[20px] md:w-[44px] md:h-[44px] lg:w-[70px] lg:h-[70px]",   rotate: 3 },
  { i: 8,  pos: "top-[36%] left-[58%]",        size: "w-[36px] h-[36px] md:w-[80px] md:h-[80px] lg:w-[140px] lg:h-[140px]", rotate: -7 },
  { i: 9,  pos: "top-[26%] right-[6%]",        size: "w-[24px] h-[24px] md:w-[52px] md:h-[52px] lg:w-[90px] lg:h-[90px]",   rotate: 6 },

  // ── Zone D: far-right strip between top-right and mid-right photos
  { i: 10, pos: "top-[38%] right-[1%]",        size: "w-[18px] h-[18px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]",   rotate: -4 },
  { i: 11, pos: "top-[58%] right-[0%]",        size: "w-[26px] h-[26px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px]", rotate: 7 },

  // ── Mid-left far edge between supreme and pavlova
  { i: 12, pos: "top-[36%] left-[2%]",         size: "w-[20px] h-[20px] md:w-[44px] md:h-[44px] lg:w-[80px] lg:h-[80px]",   rotate: -5 },

  // ── Zone E: lower band
  { i: 13, pos: "top-[58%] left-[30%]",        size: "w-[34px] h-[34px] md:w-[80px] md:h-[80px] lg:w-[140px] lg:h-[140px]", rotate: 5 },
  { i: 14, pos: "top-[62%] left-[46%]",        size: "w-[22px] h-[22px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px]",   rotate: -6 },
  { i: 15, pos: "bottom-[2%] left-[14%]",      size: "w-[30px] h-[30px] md:w-[70px] md:h-[70px] lg:w-[110px] lg:h-[110px]", rotate: 4 },
  { i: 16, pos: "bottom-[4%] left-[40%]",      size: "w-[26px] h-[26px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px]",   rotate: -8 },
  { i: 17, pos: "bottom-[6%] right-[18%]",     size: "w-[42px] h-[42px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[170px]", rotate: 6 },
  { i: 18, pos: "bottom-[0%] right-[2%]",      size: "w-[20px] h-[20px] md:w-[44px] md:h-[44px] lg:w-[70px] lg:h-[70px]",   rotate: -3 },

  // ── Top corners small accents
  { i: 19, pos: "top-[0%] left-[0%]",          size: "w-[18px] h-[18px] md:w-[36px] md:h-[36px] lg:w-[54px] lg:h-[54px]",   rotate: -10 },
  { i: 20, pos: "top-[0%] right-[0%]",         size: "w-[18px] h-[18px] md:w-[36px] md:h-[36px] lg:w-[54px] lg:h-[54px]",   rotate: 10 },
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
            transition={{ duration: 0.6, delay: 0.4 + idx * 0.035, ease: "easeOut" }}
            className={`absolute object-cover shadow-md ${spot.pos} ${spot.size}`}
          />
        );
      })}
    </div>
  );
};

export default HeroDecor;
