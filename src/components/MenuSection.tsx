import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            Для вас
          </span>
          <h2 className="font-display-black text-foreground text-4xl md:text-6xl lg:text-7xl uppercase mt-4 leading-[0.9]">
            Оберіть своє задоволення
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-light text-sm mt-6">
            Роздрібне меню. Для B2B співпраці — напишіть нам в Instagram.
          </p>
        </motion.div>

        {/* Category text links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 border-y border-border py-5">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`font-body text-[11px] uppercase tracking-[0.3em] transition-all ${
                activeCategory === i
                  ? "text-foreground border-b border-foreground pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
          >
            {menuCategories[activeCategory].items.map((item) => (
              <div key={item.name} className="group">
                <div className="aspect-square overflow-hidden bg-secondary mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-display-black text-foreground text-sm uppercase leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-body text-xs text-foreground whitespace-nowrap pt-0.5">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-light mb-2">
                  {item.description}
                </p>
                <span className="text-[10px] text-muted-foreground/70 font-body uppercase tracking-[0.2em]">
                  {item.weight}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
