import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className={`font-display text-xl font-bold transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Peremoga Bakery
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Меню", href: "#menu" },
            { label: "Про нас", href: "#about" },
            { label: "Instagram", href: "#instagram" },
            { label: "Контакти", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://www.instagram.com/peremogabakery/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
