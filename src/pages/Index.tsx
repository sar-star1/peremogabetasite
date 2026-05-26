import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryTiles from "@/components/CategoryTiles";
import PromoStrip from "@/components/PromoStrip";
import ReviewsSection from "@/components/ReviewsSection";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import teamPhoto from "@/assets/team-photo.jpg";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import b2bCake from "@/assets/b2b-cake.jpeg";
import charityBread from "@/assets/charity-bread-1.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        {/* Porto's-style 3 big destination tiles */}
        <CategoryTiles
          eyebrow="Ваш напрямок"
          heading="Що вас цікавить?"
        />

        {/* Promo strip 1 — Our story (image left) */}
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

        {/* Promo strip 2 — Bakery & sweets (image right) */}
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

        {/* Promo strip 3 — B2B (image left) */}
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

        {/* Promo strip 4 — Charity bread (image right) */}
        <PromoStrip
          background="background"
          reverse
          eyebrow="Благодійність · з 2022"
          title='Хліб "Перемога" — більше, ніж хліб'
          image={charityBread}
          imageContain
          imageAlt='Благодійний хліб "Перемога" для військових та прифронтових територій'
          description={
            <>
              <p>
                З першого дня повномасштабного вторгнення ми щодня і щоночі випікаємо благодійний хліб
                «Перемога» для прифронтових територій та наших захисників.
              </p>
              <p>Це надія, підтримка та віра в перемогу — у кожній буханці.</p>
            </>
          }
          ctaLabel="Підтримати проєкт"
          ctaHref="/charity-bread"
        />

        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
