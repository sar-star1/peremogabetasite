import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const instagramPosts = [
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_CZecj-DUULF-GoRpY.png", alt: "Круглий круасан" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_bTFQA-nIFeE-TWUCv.png", alt: "Фісташковий круасан" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_KsAFb-qevzu-oFHRF.png", alt: "Еклер ягідний" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_xlCIe-iGIrk-kBAbR.png", alt: "Торт" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_NlvgD-iEkSu-KICSS.jpeg", alt: "Десерт Павлова" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_EFhRG-QONTe-gjFfD.png", alt: "Лимонний круасан" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_JHRHL-GaNGc-FmoOc.png", alt: "Йогуртовий круасан" },
  { image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_kkRJk-flJeM-dQJIx.png", alt: "Естерхазі" },
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

        {/* Carousel-style scrollable grid */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {instagramPosts.map((post, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/peremogabakery/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 snap-center group relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
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
