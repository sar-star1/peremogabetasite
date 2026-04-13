import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WheatDivider from "@/components/WheatDivider";
import charityBread1 from "@/assets/charity-bread-1.jpg";
import charityBread2 from "@/assets/charity-bread-2.jpg";
import charityBread3 from "@/assets/charity-bread-3.jpg";
import charityBread4 from "@/assets/charity-bread-4.jpg";
import monobankLogo from "@/assets/monobank-logo.png";
import breadBasket from "@/assets/bread-basket.webp";

const photos = [
  { src: charityBread1, alt: 'Хліб "Перемога" — новина про хліб для воїнів у Бахмуті' },
  { src: charityBread4, alt: "Роздача благодійного хліба людям" },
  { src: charityBread2, alt: "Доставка хліба на прифронтові території" },
  { src: charityBread3, alt: 'Хліб "Перемога" серед уламків — символ незламності' },
];

const DONATE_URL = "https://send.monobank.ua/jar/Hy45vxyuK?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpM27TiX6gbutSUPcoWy2CA_GS80O7x1L_Np4mG5DYdZX6-x7bOJd2MCbkS8_aem_PU4R8Pz5jJA4s63Uy89SWA";
const NEWS_URL = "https://www.5.ua/suspilstvo/bezkoshtovno-peredaiut-khlib-peremoha-viiskovym-ta-volonteram-iak-pratsiuie-pekarnia-u-kyievi-314185.html";
const INSTAGRAM_URL = "https://www.instagram.com/craft_bakery_by_dubova/";

const CharityBread = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero with background */}
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
              className="max-w-2xl mx-auto pt-16"
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

        {/* Donate & Links */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto"
            >
              {/* Donate */}
              <div className="p-8 border border-wheat/30 bg-wheat/5 text-center mb-8">
                <h3 className="font-display text-2xl font-light text-foreground mb-4 tracking-wide">
                  Підтримати проєкт
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Ваша допомога дозволяє нам продовжувати випікати хліб для тих, хто цього найбільше потребує.
                </p>
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-background font-body text-sm uppercase tracking-[0.15em] font-light hover:bg-foreground/90 transition-colors"
                >
                  <img src={monobankLogo} alt="Monobank" className="w-5 h-5 object-contain" />
                  Задонатити через Monobank
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* News & Instagram links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={NEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 border border-border hover:border-wheat/40 transition-colors group"
                >
                  <Newspaper className="w-5 h-5 text-muted-foreground group-hover:text-wheat transition-colors shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-foreground block">5 канал</span>
                    <span className="text-xs text-muted-foreground font-light">Репортаж про хліб "Перемога"</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto shrink-0" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 border border-border hover:border-wheat/40 transition-colors group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-wheat transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <div>
                    <span className="text-sm font-medium text-foreground block">Instagram</span>
                    <span className="text-xs text-muted-foreground font-light">Відео про благодійність</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto shrink-0" />
                </a>
              </div>
            </motion.div>
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
