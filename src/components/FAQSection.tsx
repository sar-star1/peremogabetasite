import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WheatDivider from "./WheatDivider";

const faqs = [
  {
    q: "Де знаходиться пекарня Peremoga Bakery?",
    a: "Ми знаходимося за адресою вулиця Григоровича-Барського, 1, Київ, Україна. Зручне розташування з безкоштовною парковкою.",
  },
  {
    q: "Який графік роботи пекарні?",
    a: "Ми працюємо з понеділка по суботу з 08:00 до 20:00. У неділю — вихідний.",
  },
  {
    q: "Чи можна замовити торт або десерти на замовлення?",
    a: "Так! Ми виготовляємо авторські торти та десерти на замовлення для свят, весіль та корпоративів. Зверніться до нас за телефоном або email для обговорення деталей.",
  },
  {
    q: "Чи є у вас B2B постачання для кав'ярень?",
    a: "Так, ми здійснюємо B2B постачання випічки та хліба для кав'ярень, ресторанів та готелів у Києві. Зв'яжіться з нами для обговорення умов співпраці.",
  },
  {
    q: "Що таке благодійний хліб «Перемога»?",
    a: "З 2022 року ми випікаємо благодійний хліб «Перемога» для прифронтових територій. Це наш внесок у підтримку людей, які цього потребують найбільше.",
  },
  {
    q: "Чи є у вас безглютенова або веганська випічка?",
    a: "Наше меню постійно оновлюється. Будь ласка, зверніться до нас за телефоном або в Instagram, щоб дізнатися про актуальний асортимент.",
  },
  {
    q: "Чи є парковка біля пекарні?",
    a: "Так, біля нашої пекарні є безкоштовна парковка для відвідувачів.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-linen-gradient">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            Часті запитання
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-4 tracking-wide">
            FAQ
          </h2>
          <WheatDivider className="mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border bg-card/60 px-6"
              >
                <AccordionTrigger className="font-display text-base md:text-lg font-medium text-foreground hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
