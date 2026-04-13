import { motion } from "framer-motion";
import { Star } from "lucide-react";
import WheatDivider from "./WheatDivider";

const reviews = [
  {
    name: "Тетяна Нікітішина",
    text: "Щодня ходжу в цю кав'ярню з дочкою, нам дуже подобається😍 Випічка завжди дуже свіжа і кава дуже смачна!! Бариста дуже мила та привітна) В кав'ярні приємна атмосфера, гарні декорації, дуже тепло та затишно. Раджу всім!!",
    rating: 5,
    food: 5,
    service: 5,
    atmosphere: 5,
  },
  {
    name: "Мария Ходзицкая",
    text: "Це місце, де завжди зустрічають з посмішкою на обличчі, запропонують найсмачнішу випічку, та ароматну каву. Я таких еклерів більше ніде не куштувала — ніжнюсінькі, дуже-дуже смачні! А ще, рекомендую скуштувати хлібчик!",
    rating: 5,
    food: 5,
    service: 5,
    atmosphere: 5,
  },
  {
    name: "Aeris",
    text: "Атмосфера дуже затишна, а кава завжди смачна та ароматна. Бариста Каріна — просто чудова, завжди привітна і допоможе обрати ідеальний напій. Місце ідеально підходить як для швидкої кави, так і для неспішного відпочинку.",
    rating: 5,
    food: 5,
    service: 5,
    atmosphere: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-warm-gold text-warm-gold" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            Успіх наших гостей
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-4 tracking-wide">
            Вони вже обрали Peremoga
          </h2>
          <WheatDivider className="mt-6" />
        </motion.div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <a
            href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-border hover:border-wheat/50 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="text-sm font-body text-muted-foreground font-light">
                Google Reviews
              </span>
            </div>
          </a>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-card border border-border p-8 hover:border-wheat/40 transition-colors duration-500"
            >
              <Stars count={review.rating} />

              <p className="text-muted-foreground text-sm leading-[1.8] font-light mt-5 mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-border pt-5">
                <span className="font-display text-base font-medium text-foreground">
                  {review.name}
                </span>
                <div className="flex gap-4 mt-2">
                  {[
                    { label: "Їжа", val: review.food },
                    { label: "Сервіс", val: review.service },
                    { label: "Атмосфера", val: review.atmosphere },
                  ].map((s) => (
                    <span key={s.label} className="text-[11px] font-body text-muted-foreground/70 uppercase tracking-wider font-light">
                      {s.label} {s.val}/5
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-foreground/20 text-foreground/70 font-body text-xs uppercase tracking-[0.2em] font-light hover:border-foreground/40 hover:text-foreground transition-all duration-300"
          >
            Усі відгуки на Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
