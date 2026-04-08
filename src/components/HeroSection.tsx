import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="Peremoga Bakery — свіжа випічка"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 tracking-tight">
            Peremoga Bakery
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Реміснича пекарня в серці Києва. Свіжа випічка щодня з натуральних інгредієнтів.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Переглянути меню
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-primary-foreground/40 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Контакти
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
