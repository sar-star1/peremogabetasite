import { motion } from "framer-motion";
import { uploadedPhotos } from "@/assets/uploads";

/**
 * 20 decorative photos placed in two dedicated strips — one ABOVE and one
 * BELOW the existing hero collage. By living in their own bands they cannot
 * touch the PEREMOGA BAKERY wordmark (which sits inside the collage) nor any
 * of the 7 existing draggable hero photos.
 *
 * Sizes vary widely (small thumbs ↔ medium tiles) and scale per breakpoint.
 */

type Spot = {
  /** 1-based index into uploadedPhotos. */
  i: number;
  /** Absolute position within the strip (percentage of strip width / height). */
  pos: string;
  /** Square size, responsive. */
  size: string;
  rotate?: number;
};

// 10 spots per strip, scattered horizontally with varied vertical offset.
const topStrip: Spot[] = [
  { i: 1,  pos: "left-[1%]  top-[10%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: -8 },
  { i: 2,  pos: "left-[11%] top-[50%]",  size: "w-9 h-9  md:w-16 md:h-16 lg:w-28 lg:h-28",   rotate: 5 },
  { i: 3,  pos: "left-[21%] top-[5%]",   size: "w-8 h-8  md:w-14 md:h-14 lg:w-24 lg:h-24",   rotate: -4 },
  { i: 4,  pos: "left-[30%] top-[45%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: 7 },
  { i: 5,  pos: "left-[39%] top-[0%]",   size: "w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32",  rotate: -3 },
  { i: 6,  pos: "left-[51%] top-[45%]",  size: "w-8 h-8  md:w-14 md:h-14 lg:w-24 lg:h-24",   rotate: 6 },
  { i: 7,  pos: "left-[61%] top-[10%]",  size: "w-9 h-9  md:w-16 md:h-16 lg:w-28 lg:h-28",   rotate: -5 },
  { i: 8,  pos: "left-[72%] top-[50%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: 4 },
  { i: 9,  pos: "left-[82%] top-[20%]",  size: "w-10 h-10 md:w-18 md:h-18 lg:w-[120px] lg:h-[120px]", rotate: -7 },
  { i: 10, pos: "right-[1%] top-[0%]",   size: "w-8 h-8  md:w-14 md:h-14 lg:w-24 lg:h-24",   rotate: 8 },
];

const bottomStrip: Spot[] = [
  { i: 11, pos: "left-[1%]  top-[40%]",  size: "w-8 h-8  md:w-14 md:h-14 lg:w-24 lg:h-24",   rotate: 6 },
  { i: 12, pos: "left-[11%] top-[5%]",   size: "w-10 h-10 md:w-18 md:h-18 lg:w-[120px] lg:h-[120px]", rotate: -6 },
  { i: 13, pos: "left-[22%] top-[50%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: 4 },
  { i: 14, pos: "left-[31%] top-[10%]",  size: "w-9 h-9  md:w-16 md:h-16 lg:w-28 lg:h-28",   rotate: -7 },
  { i: 15, pos: "left-[42%] top-[45%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: 5 },
  { i: 16, pos: "left-[51%] top-[0%]",   size: "w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32",  rotate: -3 },
  { i: 17, pos: "left-[62%] top-[45%]",  size: "w-8 h-8  md:w-14 md:h-14 lg:w-24 lg:h-24",   rotate: 7 },
  { i: 18, pos: "left-[72%] top-[10%]",  size: "w-9 h-9  md:w-16 md:h-16 lg:w-28 lg:h-28",   rotate: -4 },
  { i: 19, pos: "left-[83%] top-[50%]",  size: "w-7 h-7  md:w-12 md:h-12 lg:w-20 lg:h-20",   rotate: 6 },
  { i: 20, pos: "right-[1%] top-[15%]",  size: "w-10 h-10 md:w-18 md:h-18 lg:w-[110px] lg:h-[110px]", rotate: -8 },
];

interface HeroDecorStripProps {
  variant: "top" | "bottom";
}

const HeroDecorStrip = ({ variant }: HeroDecorStripProps) => {
  const spots = variant === "top" ? topStrip : bottomStrip;
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-16 md:h-28 lg:h-40 ${
        variant === "top" ? "mb-6 md:mb-8 lg:mb-10" : "mt-6 md:mt-8 lg:mt-10"
      }`}
    >
      {spots.map((spot, idx) => {
        const photo = uploadedPhotos[spot.i - 1];
        if (!photo) return null;
        return (
          <motion.img
            key={`hero-decor-${variant}-${spot.i}`}
            src={photo.url}
            alt=""
            loading="eager"
            initial={{ opacity: 0, scale: 0.85, rotate: spot.rotate ?? 0 }}
            animate={{ opacity: 1, scale: 1, rotate: spot.rotate ?? 0 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.04, ease: "easeOut" }}
            className={`absolute object-cover shadow-md ${spot.pos} ${spot.size}`}
          />
        );
      })}
    </div>
  );
};

export default HeroDecorStrip;
