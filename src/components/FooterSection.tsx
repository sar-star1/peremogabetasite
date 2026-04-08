import { Instagram } from "lucide-react";
import logo from "@/assets/peremoga-logo.jpg";

const FooterSection = () => {
  return (
    <footer className="py-14 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Peremoga Bakery"
            className="w-14 h-14 rounded-full object-cover mb-4 opacity-80"
            width={56}
            height={56}
            loading="lazy"
          />
          <span className="font-display text-xl font-light tracking-wide text-background/90 mb-1">
            Peremoga Bakery
          </span>
          <p className="text-xs font-body font-light tracking-[0.15em] uppercase text-background/40 mb-8">
            Реміснича пекарня · Київ
          </p>

          <div className="flex items-center gap-8 mb-8">
            <a
              href="https://www.instagram.com/peremogabakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@peremogabakery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors text-xs font-body font-light uppercase tracking-[0.15em]"
            >
              TikTok
            </a>
            <a
              href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors text-xs font-body font-light uppercase tracking-[0.15em]"
            >
              Maps
            </a>
          </div>

          <div className="h-px w-16 bg-background/10 mb-6" />

          <p className="text-xs text-background/30 font-body font-light">
            © {new Date().getFullYear()} Peremoga Bakery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
