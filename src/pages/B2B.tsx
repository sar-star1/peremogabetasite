import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Mail, Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WheatDivider from "@/components/WheatDivider";
import heroBakery from "@/assets/hero-bakery.jpg";
import breadBasket from "@/assets/bread-basket.webp";
import croissants from "@/assets/hero-croissants.jpg";

const benefits = [
  "Щоденна свіжа випічка власного виробництва",
  "Стабільні об'єми та гнучкий графік доставки по Києву",
  "Індивідуальні рецептури під концепцію вашого закладу",
  "Прозоре ціноутворення для постійних партнерів",
];

const forWhom = [
  { title: "Кав'ярні", desc: "Круасани, бріоші, синабони та авторські десерти до ранкової кави." },
  { title: "Ресторани", desc: "Крафтовий хліб, фокачча та бріош-булочки під ваше меню." },
  { title: "Готелі", desc: "Свіжа випічка для сніданків — щодня, без вихідних." },
  { title: "Корпоративні клієнти", desc: "Кейтеринг та подарункові набори для команд і подій." },
];

const B2B = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBakery})` }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="container mx-auto px-6 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              На головну
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
                B2B · Оптова співпраця
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-6 tracking-wide">
                Партнерство з пекарнею Peremoga
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Ваш заклад заслуговує на випічку, якій довіряють гості. Ми постачаємо крафтовий хліб
                та авторську випічку кав'ярням, ресторанам і готелям Києва.
              </p>
              <WheatDivider className="mt-10" />
            </motion.div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
                  Чому ми
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mt-3 mb-8 tracking-wide">
                  Надійний партнер для вашого бізнесу
                </h2>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-wheat mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground font-light leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={croissants}
                alt="Крафтова випічка Peremoga для оптових партнерів"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${breadBasket})` }}
          />
          <div className="absolute inset-0 bg-linen-gradient" style={{ opacity: 0.92 }} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground tracking-wide">
                З ким ми працюємо
              </h2>
              <WheatDivider className="mt-6" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {forWhom.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border p-6 hover:border-wheat/40 transition-colors"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center border border-wheat/30 bg-wheat/5 p-10 md:p-14"
            >
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wide">
                Обговоримо співпрацю
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Напишіть нам — ми надішлемо прайс, узгодимо асортимент та графік доставки під ваш заклад.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.instagram.com/peremogabakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background font-body text-sm uppercase tracking-[0.15em] font-light hover:bg-foreground/90 transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Написати в Instagram
                </a>
                <a
                  href="mailto:peremogabakery@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground font-body text-sm uppercase tracking-[0.15em] font-light hover:border-wheat/50 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a
                  href="tel:+380935263825"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground font-body text-sm uppercase tracking-[0.15em] font-light hover:border-wheat/50 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Телефон
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default B2B;
