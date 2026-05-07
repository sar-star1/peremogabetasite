import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/peremoga-logo.jpg";

const HeroSection = () => {
  return (
    <header className="relative h-screen min-h-[700px] overflow-hidden" role="banner">
      <video
        src="/assets/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
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
            alt="Логотип Peremoga Bakery — пекарня Перемога Київ"
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
           <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light text-primary-foreground mb-3 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
             Peremoga
           </h1>
           <div className="flex items-center justify-center gap-4 mb-6">
             <div className="h-px w-12 bg-primary-foreground/40" />
             <span className="font-body text-xs uppercase tracking-[0.35em] text-primary-foreground/80 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
               Artisan Bakery · Kyiv
             </span>
             <div className="h-px w-12 bg-primary-foreground/40" />
           </div>
           <p className="font-body text-base md:text-lg text-primary-foreground/85 max-w-lg mx-auto font-light leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
             Ваше свято заслуговує на найкраще. Авторські десерти, крафтовий хліб та випічка, створені з любов'ю — щодня у <span className="font-body">Києві</span>.
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-3xl"
        >
         <Link
           to="/b2b"
           className="flex-1 text-center px-8 py-4 bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/40 text-primary-foreground font-body text-sm uppercase tracking-[0.2em] font-light hover:bg-primary-foreground hover:text-foreground transition-all duration-300 shadow-lg"
         >
           B2B
         </Link>
         <Link
           to="/clients"
           className="flex-1 text-center px-8 py-4 bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/40 text-primary-foreground font-body text-sm uppercase tracking-[0.2em] font-light hover:bg-primary-foreground hover:text-foreground transition-all duration-300 shadow-lg"
         >
           Завітайте
         </Link>
         <Link
           to="/charity-bread"
           className="flex-1 text-center px-8 py-4 bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/40 text-primary-foreground font-body text-sm uppercase tracking-[0.2em] font-light hover:bg-primary-foreground hover:text-foreground transition-all duration-300 shadow-lg"
         >
           Хліб "Перемога"
         </Link>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/0 via-primary-foreground/40 to-primary-foreground/0" />
      </motion.div>
    </header>
  );
};

export default HeroSection;
