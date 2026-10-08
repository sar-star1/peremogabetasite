import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryTiles from "@/components/CategoryTiles";
import PromoStrip from "@/components/PromoStrip";
import ReviewsSection from "@/components/ReviewsSection";
import PhotoMarquee from "@/components/PhotoMarquee";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { c, Paragraphs } from "@/content";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PhotoMarquee direction="right" speed={70} />

        <CategoryTiles eyebrow={c("home.tiles.eyebrow")} heading={c("home.tiles.heading")} />

        <PromoStrip
          background="warm"
          imageAlt="Команда пекарні Перемога — серце ремісничої випічки в Києві"
          eyebrow={c("home.promo1.eyebrow")}
          title={c("home.promo1.title")}
          image={c("home.promo1.image")}
          description={<Paragraphs k="home.promo1.text" />}
          ctaLabel={c("home.promo1.cta")}
          ctaHref="/clients"
        />

        <PromoStrip
          background="background"
          reverse
          eyebrow={c("home.promo2.eyebrow")}
          title={c("home.promo2.title")}
          image={c("home.promo2.image")}
          imageAlt="Авторські торти, еклери та десерти пекарні Перемога"
          description={<Paragraphs k="home.promo2.text" />}
          ctaLabel={c("home.promo2.cta")}
          ctaHref="/clients"
        />

        <PromoStrip
          background="linen"
          imageAlt="Поставки авторської випічки для кав'ярень та ресторанів Києва, Ірпеня, Бучі"
          eyebrow={c("home.promo3.eyebrow")}
          title={c("home.promo3.title")}
          image={c("home.promo3.image")}
          description={<Paragraphs k="home.promo3.text" />}
          ctaLabel={c("home.promo3.cta")}
          ctaHref="/b2b"
        />

        <PromoStrip
          background="background"
          reverse
          eyebrow={c("home.promo4.eyebrow")}
          title={c("home.promo4.title")}
          image={c("home.promo4.image")}
          imageAlt="Стандартизована лінійка випічки пекарні Перемога"
          description={<Paragraphs k="home.promo4.text" />}
          ctaLabel={c("home.promo4.cta")}
          ctaHref="/standard-line"
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
