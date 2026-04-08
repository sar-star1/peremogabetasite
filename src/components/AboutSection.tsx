import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Про нас</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Смак перемоги
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Peremoga Bakery — це реміснича пекарня в серці Києва на вулиці Григоровича-Барського. 
              Ми випікаємо щодня, використовуючи тільки натуральні інгредієнти найвищої якості: 
              вершкове масло 82-83%, шоколад Lubeca 33%, натуральну ваніль та органічні пасти.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Від хрустких круасанів і ніжних еклерів до святкових тортів — кожен виріб створюється 
              з любов'ю та увагою до деталей.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-14"
          >
            {[
              { value: "08:00", label: "Відкриття" },
              { value: "7", label: "Категорій меню" },
              { value: "50+", label: "Позицій" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
