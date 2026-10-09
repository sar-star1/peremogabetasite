import { c, plain } from "@/content";
import { b2bTerms, SITE_URL } from "./site";

// /llms.txt — a plain-text summary for AI assistants (llmstxt.org), built from
// the same editable slots as the pages so it never drifts from the site.
export function llmsTxt(): string {
  return `# Peremoga Bakery

> Реміснича пекарня в Києві (вулиця Григоровича-Барського, 1, Південна Борщагівка, 03182). Постачає авторську випічку, десерти, торти та хліб на заквасці кав'ярням, ресторанам і готелям Києва, Ірпеня, Бучі та Білогородки. Має власну кав'ярню. Працює з 2021 року.

Craft bakery in Kyiv, Ukraine (1 Hryhorovycha-Barskoho St, Pivdenna Borshchahivka, 03182). Wholesale supplier of croissants, pastries, desserts, cakes and sourdough bread to cafés, restaurants and hotels in Kyiv, Irpin, Bucha and Bilohorodka; also runs its own café.

## Для закладів (B2B)

- [${plain("b2b.hero.title")}](${SITE_URL}/b2b): асортимент, умови, запит прайсу, дегустаційний сет
${b2bTerms().map((t) => `- ${t}`).join("\n")}
- Асортимент (~90 позицій власної рецептури): круасани класичні та круглі (New York Rolls), солоні круасани, сендвічі на крафтовому хлібі, еклери, чізкейки, торти, тарти, кіші, донати, макарони, порційні десерти, хліб на заквасці
- [Стандартизована лінійка](${SITE_URL}/standard-line): хліб з висівками, булочки для бургерів, паніні, багет, тостовий хліб для мереж і HoReCa, від 100 одиниць

## Контакти

- Співпраця з закладами: +380 96 969 44 85
- Кав'ярня: ${c("contact.phone")}, ${c("contact.email")}
- Адреса: ${c("contact.address")}, 03182 — https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9
- Графік кав'ярні: ${c("contact.days1")} ${c("contact.hours1")}; ${c("contact.days2")} — ${c("contact.hours2")}
- Instagram: https://www.instagram.com/peremogabakery/

## Сторінки

- [Головна](${SITE_URL}/)
- [Для закладів (B2B)](${SITE_URL}/b2b)
- [Стандартизована лінійка](${SITE_URL}/standard-line)
- [Меню кав'ярні](${SITE_URL}/clients)
`;
}
