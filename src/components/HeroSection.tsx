import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import b2bCake from "@/assets/b2b-cake.jpeg";
import b2bEclairs from "@/assets/b2b-eclairs.jpeg";
import b2bTubes from "@/assets/b2b-tubes.jpeg";

// Editorial collage hero — Dominique Ansel inspired.
// Huge wordmark center; product photos float on white with pastel offset blocks.
const HeroSection = () => {
  return (
    <header
      className="relative bg-background pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      role="banner"
    >
      <div className="container mx-auto px-6">
        <div className="relative min-h-[560px] md:min-h-[680px] lg:min-h-[760px]">
          {/* Floating product 1 — top-left, pastel-peach offset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-0 top-4 md:top-10 w-[34%] md:w-[24%] max-w-[260px]"
          >
            <div className="relative">
              <div className="absolute -bottom-3 -left-3 w-full h-full bg-pastel-peach" />
              <img
                src={b2bSupreme}
                alt="Круасан Supreme Peremoga Bakery"
                className="relative w-full aspect-square object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Floating product 2 — top-center small, pastel-lavender offset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[26%] md:w-[18%] max-w-[200px] hidden sm:block"
          >
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-pastel-lavender" />
              <img
                src={b2bEclairs}
                alt="Еклер ремісничої пекарні Перемога"
                className="relative w-full aspect-square object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Floating product 3 — right, pastel-lime offset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-2 md:top-20 w-[32%] md:w-[22%] max-w-[240px]"
          >
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full bg-pastel-lime" />
              <img
                src={b2bTubes}
                alt="Авторські десерти Peremoga Bakery"
                className="relative w-full aspect-square object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Floating product 4 — bottom-center, pastel-blue offset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-12 w-[36%] md:w-[24%] max-w-[260px]"
          >
            <div className="relative">
              <div className="absolute -bottom-3 -left-3 w-full h-full bg-pastel-blue" />
              <img
                src={b2bCake}
                alt="Авторський торт Peremoga Bakery"
                className="relative w-full aspect-square object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Center wordmark */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[560px] md:min-h-[680px] lg:min-h-[760px] pointer-events-none text-[#a4b8cc]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4"
            >
              &nbsp;&nbsp;
              <br />
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mt-12 font-light leading-relaxed pointer-events-auto"
            >
              Реміснича пекарня — авторські десерти, крафтовий хліб та випічка щодня у Києві.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-16 pointer-events-auto"
            >
              {[
                { to: "/clients", label: "ЗАВІТАЙТЕ" },
                { to: "/b2b", label: "B2B" },
                { to: "/charity-bread", label: "ХЛІБ \"ПЕРЕМОГА\"" },
              ].map((cta) => (
                <Link
                  key={cta.to}
                  to={cta.to}
                  className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
