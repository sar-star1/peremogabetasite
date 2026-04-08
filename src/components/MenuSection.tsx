import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menuData";
import WheatDivider from "./WheatDivider";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 md:py-32 bg-linen-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            Обирайте
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-4 tracking-wide">
            Наше меню
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-light text-sm">
            Роздрібне меню. Гуртові ціни за запитом в нашому Instagram.
          </p>
          <WheatDivider className="mt-8" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-14">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 text-xs font-body uppercase tracking-[0.15em] font-light transition-all duration-300 ${
                activeCategory === i
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="group bg-card overflow-hidden border border-border hover:border-wheat/50 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-medium text-foreground leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-body text-sm text-foreground/80 font-light whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-2">
                    {item.description}
                  </p>
                  <span className="text-[11px] text-muted-foreground/60 font-body uppercase tracking-wider">
                    {item.weight}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
