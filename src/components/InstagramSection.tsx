import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { InstagramEmbed } from "react-social-media-embed";

const instagramPostUrls = [
  "https://www.instagram.com/p/DIMISKqI2jz/",
  "https://www.instagram.com/p/DIJp_bmoGMW/",
  "https://www.instagram.com/p/DIHIMxkoxQs/",
  "https://www.instagram.com/p/DIEcFJSIE8S/",
  "https://www.instagram.com/p/DICBkGxoKs4/",
  "https://www.instagram.com/p/DH_XfyJoUjR/",
];

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-7 h-7 text-primary" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              @peremogabakery
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Слідкуйте за нами в Instagram — нові смаки, акції та натхнення щодня
          </p>
        </motion.div>

        {/* Horizontally scrollable Instagram embeds */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {instagramPostUrls.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 snap-center w-[328px]"
              >
                <InstagramEmbed url={url} width={328} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/peremogabakery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Підписатися
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
