import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { c } from "@/content";

const schedule = [
  { day: c("contact.days1"), hours: c("contact.hours1") },
  { day: c("contact.days2"), hours: c("contact.hours2") },
];

const items = [
  {
    icon: MapPin,
    title: "Адреса",
    value: c("contact.address"),
    href: "https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9",
    external: true,
  },
  {
    icon: Phone,
    title: "Телефон",
    value: c("contact.phone"),
    href: `tel:+${c("contact.phone").replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: c("contact.email"),
    href: `mailto:${c("contact.email")}`,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            {c("contact.eyebrow")}
          </span>
          <h2 className="font-display-black text-foreground text-4xl md:text-6xl lg:text-7xl uppercase mt-4 leading-[0.9]">
            {c("contact.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="space-y-8">
            {items.map(({ icon: Icon, title, value, href, external }) => (
              <div key={title} className="border-t border-foreground pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
                  <h3 className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                    {title}
                  </h3>
                </div>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="font-display-black text-foreground text-lg md:text-xl uppercase leading-tight hover:opacity-60 transition-opacity block"
                >
                  {value}
                </a>
              </div>
            ))}

            <div className="border-t border-foreground pt-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
                <h3 className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground">
                  Робочий час
                </h3>
              </div>
              {schedule.map((s) => (
                <div key={s.day} className="flex justify-between gap-8 mb-1.5">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.day}</span>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-foreground">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden h-80 md:h-auto min-h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.5!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0LLRg9C70LjRhtGPINCT0YDQuNCz0L7RgNC-0LLQuNGH0LAt0JHQsNGA0YHRjNC60L7Qs9C-LCAxLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peremoga Bakery на карті"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
