import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WheatDivider from "@/components/WheatDivider";
import CategoryTiles from "@/components/CategoryTiles";
import breadBasket from "@/assets/bread-basket.webp";
import breadSliced from "@/assets/bread-sliced.webp";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import b2bCake from "@/assets/b2b-cake.jpeg";

const StandardLine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 text-primary">
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${breadBasket})` }}
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
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
                Масовий ринок
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-8 tracking-wide">
                Стандартизована Лінійка
              </h1>
              <WheatDivider className="mb-10" />
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] font-light">
                Скоро тут з'явиться повна інформація про нашу стандартизовану лінійку продукції.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Placeholder content */}
        <section className="pb-24 md:pb-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto pt-16 text-center"
            >
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] mb-6 font-light">
                Готуємо опис нашої стандартизованої лінійки — стабільна якість, чіткі рецептури
                та надійний асортимент для щоденного попиту.
              </p>
              <p className="text-muted-foreground text-sm leading-[1.9] font-light italic">
                Деталі, склад та умови постачання з'являться найближчим часом.
              </p>
            </motion.div>
          </div>
        </section>

        <CategoryTiles
          eyebrow="Дивіться також"
          heading="Інші напрямки пекарні"
          tiles={[
            {
              to: "/b2b",
              eyebrow: "ДЛЯ ПАРТНЕРСТВА",
              title: "HORECA (B2B) ",
              image: b2bSupreme,
              alt: "HoReCa (B2B) співпраця для кав'ярень та ресторанів",
            },
            {
              to: "/clients",
              eyebrow: "АВТОРСЬКІ ВИРОБИ",
              title: "МЕНЮ ",
              image: b2bCake,
              alt: "Меню та адреса пекарні Перемога",
            },
            {
              to: "/",
              eyebrow: "Головна",
              title: "На головну",
              image: breadSliced,
              alt: "Повернутись на головну сторінку",
            },
          ]}
        />
      </main>
      <FooterSection />
    </div>
  );
};

export default StandardLine;
