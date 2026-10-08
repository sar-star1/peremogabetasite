import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

// Editorial hero — Dominique Ansel inspired.
// Full-bleed background photo, huge wordmark centered, sticky CTA bar below.
const HeroSection = () => {
  return (
    <header
      className="relative bg-background pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      role="banner"
    >
      {/* Background photo — replace src/assets/hero-bg.jpg with the real shot later. */}
      <img
        src={heroBg}
        alt="Свіжа випічка та десерти пекарні Перемога на світлому столі"
        className="absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
        loading="eager"
        width={1920}
        height={1088}
      />
      {/* Soft cream scrim so the wordmark stays readable over the photo. */}
      <div className="absolute inset-0 bg-hero-scrim" aria-hidden="true" />
      {/* Bottom fade into the next section. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-hero-overlay" aria-hidden="true" />

      <div className="container relative mx-auto px-6">
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[560px] md:min-h-[680px] lg:min-h-[760px] pointer-events-none">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-foreground/70 mb-4"
          >
            KYIV · 2021
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="font-display-black text-foreground leading-[0.85] text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[10rem] xl:text-[12rem]"
          >
            <span className="block">PEREMOGA</span>
            <span className="block">BAKERY</span>
          </motion.h1>
        </div>

        {/* Sticky floating CTA bar — bottom of viewport, Dominique Ansel style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="fixed bottom-5 md:bottom-6 left-0 right-0 z-40 flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-3 md:px-6 md:py-3.5 shadow-lg">
            {[
              { to: "/clients", label: "АВТОРСЬКІ ВИРОБИ" },
              { to: "/b2b", label: "HORECA (B2B)" },
              { to: "/standard-line", label: "СТАНДАРТИЗОВАНА ЛІНІЙКА" },
            ].map((cta) => (
              <Link
                key={cta.to}
                to={cta.to}
                className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white bg-foreground rounded-full px-5 py-2.5 md:px-6 md:py-3 hover:bg-foreground/85 transition-colors duration-200"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
