import { motion } from "framer-motion";
import { uploadedPhotos } from "@/assets/uploads";

/**
 * Decorative scattered photos for each section.
 * Per-viewport classes ensure photos sit in safe gutters and never cover text:
 *  - mobile: tiny thumbnails tucked into section corners
 *  - tablet (md): small images near the edges
 *  - desktop (lg+): larger images in the wide outer gutters
 *
 * Photos are sourced from the first 20 uploads (upload-001 .. upload-020).
 */

type Variant =
  | "tiles"
  | "promo1"
  | "promo2"
  | "promo3"
  | "promo4"
  | "reviews"
  | "faq"
  | "contact";

type Spot = {
  /** 1-based index into uploadedPhotos */
  i: number;
  /** Tailwind positioning + size classes (responsive). */
  cls: string;
  /** Optional rotation in degrees. */
  rotate?: number;
};

// 20 photos distributed across 8 section variants.
const layouts: Record<Variant, Spot[]> = {
  // 3 photos
  tiles: [
    {
      i: 1,
      cls:
        "top-2 right-2 w-14 h-14 " +
        "md:top-6 md:right-4 md:w-24 md:h-24 " +
        "lg:top-10 lg:right-6 lg:w-36 lg:h-36",
      rotate: -6,
    },
    {
      i: 2,
      cls:
        "hidden md:block " +
        "md:bottom-4 md:left-4 md:w-20 md:h-20 " +
        "lg:bottom-12 lg:left-8 lg:w-32 lg:h-32",
      rotate: 8,
    },
    {
      i: 3,
      cls:
        "hidden lg:block " +
        "lg:top-1/2 lg:right-12 lg:w-24 lg:h-24",
      rotate: -3,
    },
  ],
  // 3 photos
  promo1: [
    {
      i: 4,
      cls:
        "top-2 left-2 w-14 h-14 " +
        "md:top-8 md:left-2 md:w-20 md:h-20 " +
        "lg:top-16 lg:left-10 lg:w-32 lg:h-32",
      rotate: 5,
    },
    {
      i: 5,
      cls:
        "hidden md:block " +
        "md:bottom-6 md:right-2 md:w-24 md:h-24 " +
        "lg:bottom-16 lg:right-12 lg:w-36 lg:h-36",
      rotate: -7,
    },
    {
      i: 6,
      cls:
        "hidden lg:block lg:top-1/3 lg:right-2 lg:w-20 lg:h-20",
      rotate: 4,
    },
  ],
  // 3 photos
  promo2: [
    {
      i: 7,
      cls:
        "top-2 right-2 w-14 h-14 " +
        "md:top-6 md:right-4 md:w-20 md:h-20 " +
        "lg:top-12 lg:right-10 lg:w-32 lg:h-32",
      rotate: -5,
    },
    {
      i: 8,
      cls:
        "hidden md:block " +
        "md:bottom-6 md:left-2 md:w-24 md:h-24 " +
        "lg:bottom-12 lg:left-12 lg:w-36 lg:h-36",
      rotate: 6,
    },
    {
      i: 9,
      cls: "hidden lg:block lg:bottom-1/3 lg:right-4 lg:w-20 lg:h-20",
      rotate: -4,
    },
  ],
  // 3 photos
  promo3: [
    {
      i: 10,
      cls:
        "top-2 left-2 w-14 h-14 " +
        "md:top-8 md:left-4 md:w-20 md:h-20 " +
        "lg:top-16 lg:left-12 lg:w-32 lg:h-32",
      rotate: -8,
    },
    {
      i: 11,
      cls:
        "hidden md:block " +
        "md:bottom-4 md:right-2 md:w-20 md:h-20 " +
        "lg:bottom-10 lg:right-10 lg:w-32 lg:h-32",
      rotate: 6,
    },
    {
      i: 12,
      cls: "hidden lg:block lg:top-1/2 lg:left-2 lg:w-20 lg:h-20",
      rotate: 3,
    },
  ],
  // 2 photos
  promo4: [
    {
      i: 13,
      cls:
        "top-2 right-2 w-14 h-14 " +
        "md:top-8 md:right-4 md:w-24 md:h-24 " +
        "lg:top-16 lg:right-12 lg:w-32 lg:h-32",
      rotate: 7,
    },
    {
      i: 14,
      cls:
        "hidden md:block " +
        "md:bottom-6 md:left-4 md:w-20 md:h-20 " +
        "lg:bottom-12 lg:left-12 lg:w-28 lg:h-28",
      rotate: -5,
    },
  ],
  // 2 photos
  reviews: [
    {
      i: 15,
      cls:
        "top-2 left-2 w-12 h-12 " +
        "md:top-8 md:left-2 md:w-20 md:h-20 " +
        "lg:top-16 lg:left-12 lg:w-32 lg:h-32",
      rotate: -6,
    },
    {
      i: 16,
      cls:
        "hidden md:block " +
        "md:bottom-8 md:right-2 md:w-20 md:h-20 " +
        "lg:bottom-16 lg:right-12 lg:w-32 lg:h-32",
      rotate: 5,
    },
  ],
  // 2 photos — FAQ has narrow column, keep decor at far edges only
  faq: [
    {
      i: 17,
      cls:
        "top-2 right-2 w-12 h-12 " +
        "md:top-12 md:right-4 md:w-20 md:h-20 " +
        "lg:top-20 lg:right-12 lg:w-28 lg:h-28",
      rotate: 6,
    },
    {
      i: 18,
      cls:
        "hidden md:block " +
        "md:bottom-10 md:left-4 md:w-20 md:h-20 " +
        "lg:bottom-20 lg:left-12 lg:w-28 lg:h-28",
      rotate: -8,
    },
  ],
  // 2 photos
  contact: [
    {
      i: 19,
      cls:
        "top-2 right-2 w-12 h-12 " +
        "md:top-8 md:right-4 md:w-20 md:h-20 " +
        "lg:top-16 lg:right-10 lg:w-32 lg:h-32",
      rotate: -7,
    },
    {
      i: 20,
      cls:
        "hidden md:block " +
        "md:bottom-6 md:left-4 md:w-20 md:h-20 " +
        "lg:bottom-12 lg:left-10 lg:w-32 lg:h-32",
      rotate: 5,
    },
  ],
};

interface DecorativeImagesProps {
  variant: Variant;
}

const DecorativeImages = ({ variant }: DecorativeImagesProps) => {
  const spots = layouts[variant];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
      {spots.map((spot, idx) => {
        const photo = uploadedPhotos[spot.i - 1];
        if (!photo) return null;
        return (
          <motion.img
            key={`${variant}-${spot.i}`}
            src={photo.url}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9, rotate: spot.rotate ?? 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: spot.rotate ?? 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
            className={`absolute object-cover shadow-lg ${spot.cls}`}
          />
        );
      })}
    </div>
  );
};

export default DecorativeImages;
