import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import b2bSupreme from "@/assets/b2b-supreme-croissants.jpeg";
import breadSliced from "@/assets/bread-sliced.webp";
import charityBread from "@/assets/charity-bread-1.jpg";

type Tile = {
  to: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
};

const defaultTiles: Tile[] = [
  {
    to: "/b2b",
    eyebrow: "Для закладів",
    title: "B2B · Партнерство",
    image: b2bSupreme,
    alt: "Авторська випічка Supreme для кав'ярень та ресторанів",
  },
  {
    to: "/clients",
    eyebrow: "Завітайте",
    title: "Меню та адреса",
    image: breadSliced,
    alt: "Свіжий крафтовий хліб у пекарні Перемога, Київ",
  },
  {
    to: "/charity-bread",
    eyebrow: "Благодійність",
    title: 'Хліб "Перемога"',
    image: charityBread,
    alt: 'Благодійний хліб "Перемога" для військових та прифронтових територій',
  },
];

interface CategoryTilesProps {
  tiles?: Tile[];
  eyebrow?: string;
  heading?: string;
  className?: string;
}

const CategoryTiles = ({
  tiles = defaultTiles,
  eyebrow = "Що далі",
  heading = "Оберіть свій напрямок",
  className = "",
}: CategoryTilesProps) => {
  return (
    <section className={`py-20 md:py-28 bg-background ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-3 tracking-wide">
            {heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to={tile.to}
                className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/10 transition-opacity duration-500 group-hover:from-charcoal/90" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9 text-primary-foreground">
                  <span className="font-body text-[11px] uppercase tracking-[0.3em] text-primary-foreground/75 font-light mb-3">
                    {tile.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                    {tile.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] font-light border-t border-primary-foreground/30 pt-4 group-hover:gap-3 transition-all duration-300">
                    Дізнатись більше
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
