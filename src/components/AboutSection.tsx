import { motion } from "framer-motion";
import WheatDivider from "./WheatDivider";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
              Про нас
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-8 tracking-wide">
              Смак перемоги
            </h2>

            <WheatDivider className="mb-10" />

            <p className="text-muted-foreground text-base md:text-lg leading-[1.9] mb-6 font-light">
              Peremoga Bakery — реміснича пекарня на вулиці Григоровича-Барського в серці Києва. 
              Випікаємо щодня з натуральних інгредієнтів найвищої якості: вершкове масло 82–83%, 
              шоколад Lubeca 33%, натуральна ваніль та органічні пасти.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.9] font-light">
              Від хрустких круасанів і ніжних еклерів до святкових тортів — кожен виріб 
              створюється з любов'ю та увагою до деталей.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {[
              { value: "08:00", label: "Відкриття" },
              { value: "7", label: "Категорій" },
              { value: "50+", label: "Позицій" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-light text-foreground mb-2 tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs font-body uppercase tracking-[0.2em] text-muted-foreground font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
