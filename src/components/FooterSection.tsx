import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-10 bg-espresso text-primary-foreground/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">
              Peremoga Bakery
            </span>
            <p className="text-sm mt-1 text-primary-foreground/60">
              Реміснича пекарня в серці Києва
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/peremogabakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@peremogabakery"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              TikTok
            </a>
            <a
              href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Google Maps
            </a>
          </div>

          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Peremoga Bakery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
