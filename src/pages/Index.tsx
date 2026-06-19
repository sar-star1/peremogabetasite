import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryTiles from "@/components/CategoryTiles";
import PromoStrip from "@/components/PromoStrip";
import ReviewsSection from "@/components/ReviewsSection";
import DecorativeImages from "@/components/DecorativeImages";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import teamPhoto from "@/assets/team-photo.jpg";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import b2bCake from "@/assets/b2b-cake.jpeg";
import breadBasket from "@/assets/bread-basket.webp";

// Helper to wrap a section with decorative photos in its outer gutters.
const Decor = ({
  variant,
  children,
}: {
  variant:
    | "tiles"
    | "promo1"
    | "promo2"
    | "promo3"
    | "promo4"
    | "reviews"
    | "faq"
    | "contact";
  children: React.ReactNode;
}) => (
  <div className="relative overflow-hidden">
    <DecorativeImages variant={variant} />
    <div className="relative z-10">{children}</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        <Decor variant="tiles">
          <CategoryTiles
            eyebrow="ВАШ НАПРЯМОК"
            heading="ЩО ВАС ЦІКАВИТЬ?"
          />
        </Decor>

        <Decor variant="promo1">
          <PromoStrip
            background="warm"
            eyebrow="Реміснича пекарня · з 2021"
            title="Ми розуміємо, що кожен момент — особливий"
            image={teamPhoto}
            imageAlt="Команда пекарні Перемога — серце ремісничої випічки в Києві"
            description={
              <>
                <p>
                  З 2021 року наша пекарня народилася з пристрасті до ремесла. У 2022 році, з початком війни,
                  вона отримала своє ім'я — коли ми почали випікати благодійний хліб «Перемога».
                </p>
                <p>
                  Ми поєднуємо авторські рецептури та натуральні інгредієнти, щоб кожен ваш вибір був
                  осмисленим — і неймовірно смачним.
                </p>
              </>
            }
            ctaLabel="Авторські Вироби"
            ctaHref="/clients"
          />
        </Decor>

        <Decor variant="promo2">
          <PromoStrip
            background="background"
            reverse
            eyebrow="Випічка · десерти · хліб"
            title="Авторські смаки щодня"
            image={b2bCake}
            imageAlt="Авторські торти, еклери та десерти пекарні Перемога"
            description={
              <>
                <p>
                  Круглі круасани Supreme, ніжні еклери, чізкейки із солоною карамеллю, торти на замовлення
                  та сезонні десерти — усе власної рецептури, на натуральних інгредієнтах.
                </p>
                <p>
                  Подарункові набори, паски, штолени та калачі — для тих, хто хоче подарувати
                  справді особливе.
                </p>
              </>
            }
            ctaLabel="Дивитись меню"
            ctaHref="/clients"
          />
        </Decor>

        <Decor variant="promo3">
          <PromoStrip
            background="linen"
            eyebrow="B2B · для закладів"
            title="Надійний партнер вашої кав'ярні"
            image={b2bSupreme}
            imageAlt="Поставки авторської випічки для кав'ярень та ресторанів Києва, Ірпеня, Бучі"
            description={
              <>
                <p>
                  Щоденні поставки авторської випічки, десертів та крафтового хліба до закладів Києва,
                  Ірпеня та Бучі. Швидка комунікація, персональний менеджер.
                </p>
                <p>
                  <span className="text-foreground">10% кешбеку щомісяця</span> у нашій програмі лояльності
                  для партнерів.
                </p>
              </>
            }
            ctaLabel="Отримати прайс"
            ctaHref="/b2b"
          />
        </Decor>

        <Decor variant="promo4">
          <PromoStrip
            background="background"
            reverse
            eyebrow="Масовий ринок"
            title="Стандартизована лінійка"
            image={breadBasket}
            imageAlt="Стандартизована лінійка випічки пекарні Перемога"
            description={
              <>
                <p>
                  Наша стандартизована лінійка — стабільна якість, чіткі рецептури та надійний
                  асортимент для щоденного попиту.
                </p>
                <p>Деталі та повний асортимент з'являться найближчим часом.</p>
              </>
            }
            ctaLabel="Дізнатись більше"
            ctaHref="/standard-line"
          />
        </Decor>

        <Decor variant="reviews">
          <ReviewsSection />
        </Decor>
        <Decor variant="faq">
          <FAQSection />
        </Decor>
        <Decor variant="contact">
          <ContactSection />
        </Decor>
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
