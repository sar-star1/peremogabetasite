import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Наше меню
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Роздрібне меню. Гуртові ціни за запитом в нашому Instagram.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <span className="text-xs text-muted-foreground/70">{item.weight}</span>
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
