import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WheatDivider from "@/components/WheatDivider";
import charityBread1 from "@/assets/charity-bread-1.jpg";
import charityBread2 from "@/assets/charity-bread-2.jpg";
import charityBread3 from "@/assets/charity-bread-3.jpg";
import charityBread4 from "@/assets/charity-bread-4.jpg";

const photos = [
  { src: charityBread1, alt: 'Хліб "Перемога" — новина про хліб для воїнів у Бахмуті' },
  { src: charityBread4, alt: "Роздача благодійного хліба людям" },
  { src: charityBread2, alt: "Доставка хліба на прифронтові території" },
  { src: charityBread3, alt: 'Хліб "Перемога" серед уламків — символ незламності' },
];

const CharityBread = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
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
                Благодійність
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-8 tracking-wide">
                Хліб "Перемога"
              </h1>
              <WheatDivider className="mb-10" />
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] mb-6 font-light">
                З першого дня повномасштабного вторгнення у 2022 році наша пекарня почала випікати 
                благодійний хліб "Перемога" для людей з прифронтових та деокупованих територій, 
                а також для наших захисників.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] mb-6 font-light">
                Щодня і щоночі, без вихідних і свят, наша команда працює, щоб хліб потрапив 
                туди, де він найбільше потрібен. Кожна буханка має надпис "Перемога" — як символ 
                незламності українського духу.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] mb-6 font-light">
                Хліб доставляється волонтерами на прифронтові території, в деокуповані міста та 
                села, до військових підрозділів. Навіть під обстрілами — хліб "Перемога" знаходить 
                дорогу до людей.
              </p>
              <p className="text-foreground text-base md:text-lg leading-[1.9] font-medium">
                Це більше ніж хліб — це надія, підтримка та віра в перемогу.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full aspect-[4/3] object-cover rounded-sm"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-24 md:pb-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 border-t border-border"
            >
              {[
                { value: "2022", label: "Початок проєкту" },
                { value: "24/7", label: "Режим роботи" },
                { value: "∞", label: "Буханок випечено" },
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
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default CharityBread;
