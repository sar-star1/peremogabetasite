import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Package, CalendarClock, Phone, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CategoryTiles from "@/components/CategoryTiles";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import b2bCake from "@/assets/b2b-cake.jpeg";
import breadSliced from "@/assets/bread-sliced.webp";

import heroAsset from "@/assets/baseline-hero.jpg.asset.json";
import branAsset from "@/assets/baseline-bran-bread.jpg.asset.json";
import burgerAsset from "@/assets/baseline-burger.jpg.asset.json";
import paniniAsset from "@/assets/baseline-panini.jpg.asset.json";
import baguetteAsset from "@/assets/baseline-baguette.jpg.asset.json";
import toastAsset from "@/assets/baseline-toast.jpg.asset.json";

type Product = {
  id: string;
  name: string;
  weight: string;
  image: string;
  tagline: string;
  formats?: { label: string; description: string }[];
  suitableFor: string[];
  inWork?: string[];
  composition: string;
  shelfLife: string;
  nutrition: string;
};

const products: Product[] = [
  {
    id: "bran",
    name: "Хліб пшеничний з висівками",
    weight: "500 г",
    image: branAsset.url,
    tagline:
      "Пшеничний хліб із додаванням висівок зі стабільною структурою та щільною, еластичною м'якушкою. Добре тримає форму, не кришиться та підходить для щоденного використання в закладах.",
    formats: [
      { label: "Нарізний", description: "рівні скибки, економія часу кухні, стабільна подача" },
      { label: "Цілий", description: "можливість нарізки під власні задачі та формат страв" },
    ],
    suitableFor: ["Сендвічів", "Хлібної корзини", "Подачі до супів та основних страв"],
    composition:
      "Борошно пшеничне в/г, борошно 1/г, висівки пшеничні, вода, цукор білий кристалічний, дріжджі сухі, олія, сіль кухонна.",
    shelfLife:
      "10 діб в герметичній тарі при кімнатній температурі, у замороженому вигляді — 3 місяці.",
    nutrition: "239 ккал · білки 6,17 г · жири 4,46 г · вуглеводи 43,44 г (на 100 г)",
  },
  {
    id: "burger",
    name: "Булочка для бургерів",
    weight: "80 г",
    image: burgerAsset.url,
    tagline:
      "Булочка зі стабільною структурою, м'якою еластичною м'якушкою та рівномірною формою. Добре тримає начинку, не розмокає та зберігає вигляд у подачі.",
    suitableFor: ["Класичних та авторських бургерів", "Доставки та takeaway"],
    inWork: [
      "Не розвалюється при зборці",
      "Тримає соуси та соки начинки",
      "Зручна у роботі на потоці",
      "Добре поводиться при підсмаженні",
    ],
    composition:
      "Борошно пшеничне в/г, вода, цукор білий кристалічний, маргарин вершковий, сухе молоко, дріжджі пресовані, олія, сіль кухонна, кунжут білий.",
    shelfLife:
      "7 діб в герметичній тарі при кімнатній температурі, у замороженому вигляді — 2 місяці.",
    nutrition: "314 ккал · білки 7 г · жири 6,98 г · вуглеводи 55,48 г (на 100 г)",
  },
  {
    id: "panini",
    name: "Паніні",
    weight: "120 г",
    image: paniniAsset.url,
    tagline:
      "Хліб для паніні зі щільною, еластичною структурою та рівномірною пористістю. Добре тримає начинку, не деформується при пресуванні та зберігає форму після грилю.",
    suitableFor: ["Класичних паніні", "Гарячих сендвічів", "Takeaway та доставки"],
    inWork: [
      "Рівномірно підсмажується на грилі",
      "Не розсипається при розрізі",
      "Тримає структуру з соковитою начинкою",
      "Зручний у роботі на потоці",
    ],
    composition:
      "Борошно пшеничне в/г, вода, цукор білий кристалічний, маргарин вершковий, сухе молоко, дріжджі пресовані, олія, сіль кухонна.",
    shelfLife:
      "7 діб в герметичній тарі при кімнатній температурі, у замороженому вигляді — 2 місяці.",
    nutrition: "314 ккал · білки 7,36 г · жири 6,98 г · вуглеводи 55,48 г (на 100 г)",
  },
  {
    id: "baguette",
    name: "Багети",
    weight: "150 г",
    image: baguetteAsset.url,
    tagline:
      "Багет зі стабільною формою, хрусткою скоринкою та щільною, еластичною м'якушкою. Добре тримає структуру, не кришиться та підходить для щоденного використання в закладах.",
    formats: [
      { label: "Цілий", description: "для власної нарізки та подачі" },
      { label: "З надрізами / під сендвіч", description: "швидка підготовка та зручність у роботі" },
    ],
    suitableFor: ["Сендвічів", "Брускет", "Хлібної корзини", "Подачі до супів та основних страв"],
    inWork: [
      "Легко ріжеться на рівні частини",
      "Не розсипається при нарізці",
      "Зберігає форму при подачі",
      "Підходить для запікання та підігріву",
    ],
    composition:
      "Борошно пшеничне в/г, вода, цукор білий кристалічний, маргарин вершковий, сухе молоко, дріжджі пресовані, олія, сіль кухонна, кунжут білий.",
    shelfLife:
      "7 діб в герметичній тарі при кімнатній температурі, у замороженому вигляді — 2 місяці.",
    nutrition: "314 ккал · білки 7,36 г · жири 6,98 г · вуглеводи 55,48 г (на 100 г)",
  },
  {
    id: "toast",
    name: "Тостовий хліб",
    weight: "—",
    image: toastAsset.url,
    tagline:
      "Тостовий хліб зі стабільною структурою, рівномірною пористістю та м'якою еластичною м'якушкою. Добре тримає форму, рівномірно підсмажується та підходить для щоденного використання в закладах.",
    formats: [
      { label: "Нарізний", description: "рівні скибки та швидка підготовка" },
      { label: "Цілий", description: "можливість нарізки під власний формат подачі" },
    ],
    suitableFor: ["Тостів", "Сендвічів", "Сніданків", "Takeaway та доставки"],
    inWork: [
      "Рівномірно підсмажується",
      "Не кришиться при нарізці",
      "Зберігає структуру після обсмаження",
      "Зручний у роботі на потоці",
    ],
    composition:
      "Борошно пшеничне в/г, вода, цукор білий кристалічний, маргарин вершковий, сухе молоко, дріжджі пресовані, олія, сіль кухонна.",
    shelfLife:
      "7 діб в герметичній тарі при кімнатній температурі, у замороженому вигляді — 2 місяці.",
    nutrition: "—",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="font-body text-[11px] uppercase tracking-[0.4em] text-accent-blue">
    {children}
  </span>
);

const ProductBlock = ({ product, index }: { product: Product; index: number }) => {
  const reverse = index % 2 === 1;
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative ${reverse ? "md:order-2" : ""}`}
          >
            <div
              className={`absolute ${reverse ? "-top-4 -right-4" : "-bottom-4 -left-4"} w-full h-full bg-pastel-blue`}
              aria-hidden="true"
            />
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover"
            />
            {product.weight !== "—" && (
              <span className="absolute top-4 left-4 z-10 bg-accent-blue text-primary-foreground font-body text-[11px] uppercase tracking-[0.25em] px-3 py-1.5">
                {product.weight}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${reverse ? "md:order-1" : ""}`}
          >
            <Eyebrow>0{index + 1} · Базова Лінійка</Eyebrow>
            <h2 className="font-display-black text-foreground text-4xl md:text-5xl leading-[0.95] mt-4 mb-6">
              {product.name}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-light leading-[1.85] max-w-md">
              {product.tagline}
            </p>

            {product.formats && (
              <div className="mt-8">
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                  Доступні формати
                </span>
                <div className="mt-3 grid sm:grid-cols-2 gap-3 max-w-md">
                  {product.formats.map((f) => (
                    <div
                      key={f.label}
                      className="border-l-2 border-accent-blue bg-accent-blue-soft px-4 py-3"
                    >
                      <div className="font-body text-sm font-medium text-foreground">{f.label}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {f.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 grid sm:grid-cols-2 gap-8 max-w-md">
              <div>
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                  Підходить для
                </span>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground font-light">
                  {product.suitableFor.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-accent-blue mt-2 w-1 h-1 rounded-full bg-accent-blue shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {product.inWork && (
                <div>
                  <span className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                    У роботі
                  </span>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground font-light">
                    {product.inWork.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="text-accent-blue mt-2 w-1 h-1 rounded-full bg-accent-blue shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <details className="mt-8 group border-t border-border pt-5 max-w-md">
              <summary className="cursor-pointer list-none flex items-center justify-between font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                <span>Склад, зберігання, КБЖУ</span>
                <span className="text-accent-blue transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <div className="mt-5 space-y-4 text-xs leading-[1.8] text-muted-foreground font-light">
                <div>
                  <span className="block uppercase tracking-[0.25em] text-foreground mb-1">
                    Склад
                  </span>
                  {product.composition}
                </div>
                <div>
                  <span className="block uppercase tracking-[0.25em] text-foreground mb-1">
                    Термін зберігання
                  </span>
                  {product.shelfLife}
                </div>
                <div>
                  <span className="block uppercase tracking-[0.25em] text-foreground mb-1">
                    КБЖУ
                  </span>
                  {product.nutrition}
                </div>
              </div>
            </details>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StandardLine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 text-primary">
        {/* Hero */}
        <section className="relative overflow-hidden bg-accent-blue-soft">
          <div className="container mx-auto px-6 py-16 md:py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              На головну
            </Link>

            <div className="grid md:grid-cols-12 gap-10 items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="md:col-span-7"
              >
                <Eyebrow>HoReCa · B2B · з 2021</Eyebrow>
                <h1 className="font-display-black text-foreground text-5xl md:text-7xl lg:text-8xl mt-5 leading-[0.9]">
                  Базова
                  <br />
                  Лінійка
                </h1>
                <p className="mt-8 max-w-xl text-muted-foreground text-base md:text-lg leading-[1.85] font-light">
                  Якісні продукти для стабільної роботи кухні. Хліб, булочки для бургерів, паніні
                  та багети — однакова вага, однакова якість, прогнозована собівартість.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Хліб", "Булочки для бургерів", "Паніні", "Багети", "Тостовий хліб"].map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] uppercase tracking-[0.25em] text-accent-blue border border-accent-blue/40 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="md:col-span-5 relative"
              >
                <div
                  className="absolute -bottom-4 -left-4 w-full h-full bg-accent-blue"
                  aria-hidden="true"
                />
                <img
                  src={heroAsset.url}
                  alt="Базова лінійка пекарні Перемога — хліб, булочки, паніні, багети"
                  className="relative w-full aspect-[4/5] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro / why us */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-5"
              >
                <Eyebrow>Про базову лінійку</Eyebrow>
                <h2 className="font-display-black text-foreground text-3xl md:text-4xl leading-[1] mt-4">
                  Партнер, на якого можна розраховувати в щоденній роботі
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="md:col-span-7 text-muted-foreground font-light leading-[1.85] text-sm md:text-base space-y-5"
              >
                <p>
                  Ми працюємо з 2021 року і спеціалізуємось на виробництві та поставках виробів для
                  закладів HoReCa. За цей час ми добре зрозуміли: для бізнесу важливо не просто
                  отримати продукт, а мати стабільного партнера.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                      Стабільну роботу кухні забезпечує
                    </span>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Стабільна якість у кожній партії",
                        "Чітке дотримання термінів поставок",
                        "Однакові розміри та вага виробів",
                        "Продукт, з яким зручно працювати",
                        "Швидка та гнучка комунікація",
                      ].map((t) => (
                        <li key={t} className="flex gap-2 text-sm">
                          <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                      Наш продукт
                    </span>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-sm">
                        <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 shrink-0" />
                        Не створює проблем у процесі
                      </li>
                      <li className="flex gap-2 text-sm">
                        <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 shrink-0" />
                        Дозволяє контролювати собівартість і подачу
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products */}
        <div>
          {products.map((p, i) => (
            <ProductBlock key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Delivery & cooperation */}
        <section className="py-24 md:py-32 bg-accent-blue-soft border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <Eyebrow>Доставка та старт співпраці</Eyebrow>
              <h2 className="font-display-black text-foreground text-4xl md:text-6xl leading-[0.95] mt-5">
                Почати працювати — просто
              </h2>
            </motion.div>

            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl">
              {[
                {
                  icon: MapPin,
                  label: "Географія доставки",
                  value: "м. Київ та область",
                  note: "Інші регіони — за погодженням",
                },
                {
                  icon: Package,
                  label: "Мінімальне замовлення",
                  value: "від 100 одиниць",
                  note: "Гнучкий формат партії",
                },
                {
                  icon: CalendarClock,
                  label: "Графік поставок",
                  value: "Регулярно за графіком",
                  note: "Є можливість дозаказу",
                },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-background p-8 border-t-2 border-accent-blue"
                >
                  <card.icon className="w-6 h-6 text-accent-blue" strokeWidth={1.5} />
                  <span className="block font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-6">
                    {card.label}
                  </span>
                  <div className="font-display-black text-foreground text-2xl mt-2 leading-tight">
                    {card.value}
                  </div>
                  <p className="text-xs text-muted-foreground font-light mt-3 leading-relaxed">
                    {card.note}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl items-start"
            >
              <div className="border-l-2 border-accent-blue pl-6">
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent-blue">
                  Перед стартом
                </span>
                <p className="mt-3 text-foreground text-lg font-light leading-[1.7]">
                  Ви можете замовити <strong className="font-medium">тестову партію</strong> або{" "}
                  <strong className="font-medium">дегустаційний сет</strong> із нашої продукції —
                  щоб переконатися, що продукт підходить вашій кухні.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground font-light leading-[1.85] text-sm">
                  Також маємо широку лінійку кондитерських виробів, авторської випічки та
                  крафтового хлібу.
                </p>
                <Link
                  to="/clients"
                  className="inline-block mt-5 font-body text-[11px] uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                >
                  Подивитись авторське меню
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contacts */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10 max-w-5xl">
              <div className="md:col-span-5">
                <Eyebrow>Наші контакти</Eyebrow>
                <h2 className="font-display-black text-foreground text-4xl md:text-5xl mt-4 leading-[0.95]">
                  Напишіть або зателефонуйте
                </h2>
              </div>
              <div className="md:col-span-7 grid sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <MapPin className="w-5 h-5 text-accent-blue mb-3" strokeWidth={1.5} />
                  <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Адреса
                  </span>
                  <p className="text-foreground mt-2 font-light leading-relaxed">
                    м. Київ, вул. Григоровича-Барського, 1
                    <br />
                    м. Крюківщина
                  </p>
                </div>
                <div>
                  <Phone className="w-5 h-5 text-accent-blue mb-3" strokeWidth={1.5} />
                  <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Телефон
                  </span>
                  <a
                    href="tel:+380969694485"
                    className="block text-foreground mt-2 font-light hover:text-accent-blue transition-colors"
                  >
                    +38 (096) 96-94-485
                  </a>
                </div>
                <div>
                  <Instagram className="w-5 h-5 text-accent-blue mb-3" strokeWidth={1.5} />
                  <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/peremogabakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground mt-2 font-light hover:text-accent-blue transition-colors"
                  >
                    @peremogabakery
                  </a>
                </div>
              </div>
            </div>
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
