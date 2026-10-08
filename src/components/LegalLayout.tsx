import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

interface LegalSection {
  title: string;
  body: string[];
}

interface LegalLayoutProps {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  children?: ReactNode;
}

const LegalLayout = ({ title, updated, intro, sections, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            На головну
          </Link>
          <span className="font-display-black text-sm uppercase tracking-wide">
            Peremoga Bakery
          </span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <h1 className="font-display-black text-3xl md:text-4xl uppercase leading-tight mb-2">
          {title}
        </h1>
        <p className="text-[11px] font-body uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Останнє оновлення: {updated}
        </p>

        {intro && (
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/80 mb-10">
            {intro}
          </p>
        )}

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-display-black text-lg md:text-xl uppercase mb-3">
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-sm md:text-base leading-relaxed text-foreground/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {children}
      </main>

      <FooterSection />
    </div>
  );
};

export default LegalLayout;
