import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PromoStripProps {
  eyebrow?: string;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  reverse?: boolean;
  background?: "background" | "warm" | "linen";
  imageContain?: boolean;
}

const bgMap = {
  background: "bg-background",
  warm: "bg-warm-gradient",
  linen: "bg-linen-gradient",
};

const PromoStrip = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
  reverse = false,
  background = "background",
  imageContain = false,
}: PromoStripProps) => {
  const cta = ctaLabel && ctaHref ? (
    ctaExternal ? (
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-foreground text-background font-body text-xs uppercase tracking-[0.2em] font-light hover:bg-foreground/90 transition-all duration-300 hover:gap-3 self-start"
      >
        {ctaLabel}
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    ) : (
      <Link
        to={ctaHref}
        className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-foreground text-background font-body text-xs uppercase tracking-[0.2em] font-light hover:bg-foreground/90 transition-all duration-300 hover:gap-3 self-start"
      >
        {ctaLabel}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    )
  ) : null;

  return (
    <section className={`py-16 md:py-24 ${bgMap[background]}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`overflow-hidden ${reverse ? "md:order-2" : ""}`}
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className={`w-full aspect-[4/3] ${imageContain ? "object-contain bg-background" : "object-cover"} hover:scale-[1.03] transition-transform duration-[1200ms] ease-out`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${reverse ? "md:order-1" : ""}`}
          >
            {eyebrow && (
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light mb-4">
                {eyebrow}
              </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-6 leading-tight">
              {title}
            </h2>
            <div className="text-muted-foreground text-base md:text-lg font-light leading-[1.85] space-y-4">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
            {cta}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoStrip;
