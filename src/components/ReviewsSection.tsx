import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { c } from "@/content";

const reviews = [1, 2, 3].map((n) => ({
  name: c(`home.reviews.${n}.name`),
  text: c(`home.reviews.${n}.text`),
  rating: 5,
}));

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3 h-3 fill-foreground text-foreground" strokeWidth={0} />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            {c("home.reviews.eyebrow")}
          </span>
          <h2 className="font-display-black text-foreground text-4xl md:text-6xl lg:text-7xl uppercase mt-4 leading-[0.9]">
            {c("home.reviews.heading")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <a
            href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-foreground hover:opacity-60 transition-opacity"
          >
            <Stars count={5} />
            <span className="font-body text-[11px] uppercase tracking-[0.3em]">Google Reviews</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-t border-foreground pt-6"
            >
              <Stars count={review.rating} />
              <p className="text-foreground text-sm leading-[1.8] font-light mt-5 mb-6">
                "{review.text}"
              </p>
              <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                — {review.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[11px] uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            Усі відгуки на Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
