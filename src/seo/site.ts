import { c } from "@/content";

// Everything search engines and AI assistants read about each page: title,
// description, canonical URL and schema.org JSON-LD. Used at build time by
// scripts/prerender.mjs (static HTML per route) and in the browser by
// <RouteHead /> when navigating between pages.

export const SITE_URL = "https://www.peremogabakery.com";

// Facts about the business. Contact details come from the editable content
// slots so a change in the dashboard also updates the structured data.
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "вулиця Григоровича-Барського, 1",
  addressLocality: "Київ",
  addressRegion: "Київ",
  postalCode: "03182",
  addressCountry: "UA",
};
const GEO = { "@type": "GeoCoordinates", latitude: 50.40957, longitude: 30.3914 };
const MAPS_URL = "https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9";
const B2B_PHONE = "+380969694485";
const AREA_SERVED = ["Київ", "Ірпінь", "Буча", "Білогородка"].map((name) => ({ "@type": "City", name }));

const telephone = () => `+${c("contact.phone").replace(/\D/g, "")}`;

/** Partner (HoReCa) terms — also shown on /b2b and in llms.txt. Keep in one place. */
export const B2B_TERMS = {
  cutoff: "Замовлення приймаємо за день до поставки: неділя — п'ятниця до 17:00.",
  kyiv: "Київ: доставка в понеділок, середу та п'ятницю з 09:00 до 14:00.",
  suburbs: "Ірпінь, Буча, Білогородка та Троєщина: доставка по середах з 10:00 до 14:00.",
  minimum: "Мінімальне замовлення — 1 000 грн.",
  fee: "Доставка: правий берег Києва — 200 грн, лівий берег та передмістя — 250 грн; від 2 000 грн — безкоштовно.",
  payment: "Оплата за рахунком на ФОП або готівкою; можливе відтермінування платежу на 2–3 дні.",
  tasting: "Дегустаційний сет: три позиції з меню на вибір — безкоштовно привеземо на вашу локацію.",
  cashback: "10% кешбеку щомісяця за програмою лояльності для партнерів.",
};

export const B2B_FAQ: { q: string; a: string }[] = [
  {
    q: "Яке мінімальне замовлення для закладу?",
    a: "Мінімальна сума замовлення — 1 000 грн. Від 2 000 грн доставка безкоштовна.",
  },
  {
    q: "Коли і куди ви доставляєте?",
    a: "По Києву — у понеділок, середу та п'ятницю з 09:00 до 14:00. Ірпінь, Буча, Білогородка та Троєщина — по середах з 10:00 до 14:00.",
  },
  {
    q: "До котрої години можна зробити замовлення?",
    a: "За день до поставки, з неділі по п'ятницю до 17:00.",
  },
  {
    q: "Скільки коштує доставка?",
    a: "Правий берег Києва — 200 грн, лівий берег та передмістя — 250 грн. При замовленні від 2 000 грн доставка безкоштовна.",
  },
  {
    q: "Як можна оплатити?",
    a: "За рахунком на ФОП або готівкою. Для постійних партнерів можливе відтермінування платежу на 2–3 дні.",
  },
  {
    q: "Чи можна спершу спробувати продукцію?",
    a: "Так. Оберіть три позиції з меню — ми безкоштовно привеземо дегустаційний сет на вашу локацію.",
  },
  {
    q: "Що потрібно, щоб почати співпрацю?",
    a: "Назва закладу, адреса й телефон отримувача, форма оплати (ФОП або готівка) і, для ФОП, дані платника. Залиште запит на сторінці — надішлемо прайс і умови.",
  },
  {
    q: "Яку продукцію ви постачаєте закладам?",
    a: "Класичні та круглі круасани, солоні круасани й сендвічі на крафтовому хлібі, еклери, чізкейки, торти, тарти, кіші, донати, макарони, порційні десерти та хліб на заквасці — близько 90 позицій власної рецептури.",
  },
];

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** Breadcrumb name; omitted for the home page. */
  crumb?: string;
  noindex?: boolean;
  jsonLd?: () => object[];
}

const bakery = () => ({
  "@type": ["Bakery", "LocalBusiness"],
  "@id": `${SITE_URL}/#bakery`,
  name: "Peremoga Bakery",
  alternateName: ["Пекарня «Перемога»", "Пекарня Перемога", "Peremoga"],
  description:
    "Реміснича пекарня в Києві (Південна Борщагівка). Постачає авторську випічку, десерти, торти та крафтовий хліб кав'ярням, ресторанам і готелям Києва, Ірпеня та Бучі; має власну кав'ярню.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: telephone(),
  email: c("contact.email"),
  address: ADDRESS,
  geo: GEO,
  hasMap: MAPS_URL,
  foundingDate: "2021",
  priceRange: "₴₴",
  servesCuisine: ["Випічка", "Десерти", "Хліб", "Кава"],
  areaServed: AREA_SERVED,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      name: "Співпраця з закладами (B2B)",
      telephone: B2B_PHONE,
      areaServed: AREA_SERVED,
      availableLanguage: ["uk", "ru", "en"],
    },
    { "@type": "ContactPoint", contactType: "customer service", telephone: telephone(), email: c("contact.email") },
  ],
  sameAs: ["https://www.instagram.com/peremogabakery/", "https://www.tiktok.com/@peremogabakery", MAPS_URL],
  makesOffer: { "@id": `${SITE_URL}/b2b#service` },
});

const website = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Peremoga Bakery",
  inLanguage: "uk-UA",
  publisher: { "@id": `${SITE_URL}/#bakery` },
});

const faqPage = (items: { q: string; a: string }[], id: string) => ({
  "@type": "FAQPage",
  "@id": id,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const homeFaq = () =>
  [1, 2, 3, 4, 5, 6].map((n) => ({
    q: c(`home.faq.${n}.q`).replace(/\*\*/g, ""),
    a: c(`home.faq.${n}.a`).replace(/\*\*/g, ""),
  }));

const b2bService = () => ({
  "@type": "Service",
  "@id": `${SITE_URL}/b2b#service`,
  name: "Постачання випічки та десертів для кав'ярень і ресторанів",
  serviceType: "Оптове постачання випічки, десертів і хліба для HoReCa",
  provider: { "@id": `${SITE_URL}/#bakery` },
  areaServed: AREA_SERVED,
  audience: { "@type": "BusinessAudience", audienceType: "Кав'ярні, ресторани, готелі, кейтеринг" },
  url: `${SITE_URL}/b2b`,
  description: Object.values(B2B_TERMS).join(" "),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Асортимент для закладів",
    itemListElement: [
      "Круасани класичні та круглі (New York Rolls)",
      "Солоні круасани та сендвічі на крафтовому хлібі",
      "Еклери",
      "Чізкейки",
      "Торти",
      "Тарти та міні-тарти",
      "Кіші",
      "Донати",
      "Макарони",
      "Порційні десерти",
      "Крафтовий хліб на заквасці",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name } })),
  },
});

const standardLineProducts = () => ({
  "@type": "ItemList",
  name: "Стандартизована лінійка хліба для мереж і HoReCa",
  itemListElement: [
    { name: "Хліб з висівками", weight: "500 г" },
    { name: "Булочка для бургерів", weight: "80 г" },
    { name: "Паніні", weight: "120 г" },
    { name: "Багет", weight: "150 г" },
    { name: "Тостовий хліб" },
  ].map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@id": `${SITE_URL}/#bakery` },
      ...(p.weight ? { weight: p.weight } : {}),
    },
  })),
});

export const PAGES: PageSeo[] = [
  {
    path: "/",
    title: "Peremoga Bakery — випічка та десерти для кав'ярень у Києві",
    description:
      "Реміснича пекарня на вул. Григоровича-Барського, 1 (Борщагівка, Київ). Постачаємо круасани, десерти, торти й крафтовий хліб кав'ярням і ресторанам Києва, Ірпеня та Бучі. Кав'ярня пн–сб 08:00–20:00.",
    jsonLd: () => [bakery(), website(), faqPage(homeFaq(), `${SITE_URL}/#faq`)],
  },
  {
    path: "/b2b",
    crumb: "Для закладів (B2B)",
    title: "Випічка та десерти для кав'ярень оптом — Київ | Peremoga Bakery",
    description:
      "Постачання круасанів, еклерів, чізкейків, тортів, кішів і хліба на заквасці для кав'ярень, ресторанів і готелів Києва, Ірпеня, Бучі. Доставка пн/ср/пт, мінімум 1 000 грн, безкоштовно від 2 000 грн, дегустаційний сет.",
    jsonLd: () => [b2bService(), faqPage(B2B_FAQ, `${SITE_URL}/b2b#faq`)],
  },
  {
    path: "/standard-line",
    crumb: "Стандартизована лінійка",
    title: "Хліб для бургерів, паніні, багет оптом — стандартизована лінійка | Peremoga Bakery",
    description:
      "Хліб з висівками, булочки для бургерів, паніні, багет і тостовий хліб для мереж, кейтерингу та HoReCa в Києві й області. Однакова вага, стабільна якість, заморозка до 3 місяців, від 100 одиниць.",
    jsonLd: () => [standardLineProducts()],
  },
  {
    path: "/clients",
    crumb: "Меню",
    title: "Меню пекарні-кав'ярні Peremoga Bakery — Борщагівка, Київ",
    description:
      "Круасани, еклери, чізкейки, торти та кава в пекарні-кав'ярні Peremoga Bakery на вул. Григоровича-Барського, 1 (Південна Борщагівка, Київ). Працюємо пн–сб 08:00–20:00.",
  },
  { path: "/privacy", crumb: "Політика конфіденційності", title: "Політика конфіденційності — Peremoga Bakery", description: "Як Peremoga Bakery обробляє персональні дані." },
  { path: "/terms", crumb: "Умови використання", title: "Умови використання — Peremoga Bakery", description: "Умови використання сайту Peremoga Bakery." },
  { path: "/cookies", crumb: "Політика щодо cookie", title: "Політика щодо cookie — Peremoga Bakery", description: "Які файли cookie використовує сайт Peremoga Bakery." },
];

export const NOT_FOUND: PageSeo = {
  path: "/404",
  title: "Сторінку не знайдено — Peremoga Bakery",
  description: "Такої сторінки немає. Перейдіть на головну Peremoga Bakery.",
  noindex: true,
};

export function seoFor(pathname: string): PageSeo {
  const path = pathname.replace(/\/+$/, "") || "/";
  return PAGES.find((p) => p.path === path) ?? NOT_FOUND;
}

/** All JSON-LD for a page as one @graph, with a breadcrumb for inner pages. */
export function jsonLdFor(page: PageSeo): object | null {
  if (page.noindex) return null;
  const graph: object[] = [...(page.jsonLd?.() ?? [])];
  if (page.crumb) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Головна", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.crumb, item: `${SITE_URL}${page.path}` },
      ],
    });
  }
  return graph.length ? { "@context": "https://schema.org", "@graph": graph } : null;
}
