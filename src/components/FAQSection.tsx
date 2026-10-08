import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { c, plain } from "@/content";

const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({
  q: plain(`home.faq.${n}.q`),
  a: plain(`home.faq.${n}.a`),
}));

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            {c("home.faq.eyebrow")}
          </span>
          <h2 className="font-display-black text-foreground text-4xl md:text-6xl uppercase mt-4 leading-[0.9]">
            {c("home.faq.heading")}
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="border-t border-foreground">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-foreground"
            >
              <AccordionTrigger className="font-display-black text-foreground text-sm md:text-base uppercase hover:no-underline py-6 text-left tracking-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
