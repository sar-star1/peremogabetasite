import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/peremoga-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        src={heroBg}
        alt="Peremoga Bakery — свіжа випічка"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Peremoga"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto shadow-2xl ring-2 ring-primary-foreground/20"
            width={144}
            height={144}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light text-primary-foreground mb-3 tracking-wide">
            Peremoga
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <span className="font-body text-xs uppercase tracking-[0.35em] text-primary-foreground/60 font-light">
              Artisan Bakery · Kyiv
            </span>
            <div className="h-px w-12 bg-primary-foreground/30" />
          </div>
          <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-lg mx-auto font-light leading-relaxed">
            Реміснича пекарня в серці Києва. Натуральні інгредієнти, свіжа випічка щодня.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#menu"
            className="px-10 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/25 text-primary-foreground font-body text-sm uppercase tracking-[0.2em] font-light hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Меню
          </a>
          <a
            href="#contact"
            className="px-10 py-3 border border-primary-foreground/15 text-primary-foreground/80 font-body text-sm uppercase tracking-[0.2em] font-light hover:border-primary-foreground/30 transition-all duration-300"
          >
            Контакти
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/0 via-primary-foreground/40 to-primary-foreground/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
