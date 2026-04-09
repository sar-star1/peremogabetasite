import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";
import WheatDivider from "./WheatDivider";

const schedule = [
  { day: "Понеділок — Субота", hours: "08:00 — 20:00" },
  { day: "Неділя", hours: "Вихідний" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            Завітайте
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-4 tracking-wide">
            Контакти
          </h2>
          <WheatDivider className="mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-border">
                <MapPin className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">Адреса</h3>
                <a
                  href="https://maps.app.goo.gl/QyoiGuZsLpDQeFmB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light leading-relaxed"
                >
                  вулиця Григоровича-Барського, 1, Київ, Україна
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-border">
                <Clock className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">Робочий час</h3>
                {schedule.map((s) => (
                  <div key={s.day} className="flex justify-between gap-8 text-sm text-muted-foreground mb-1 font-light">
                    <span>{s.day}</span>
                    <span className="text-foreground/80">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-border">
                <Mail className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">Email</h3>
                <a
                  href="mailto:peremogabakery@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  peremogabakery@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden h-80 md:h-auto min-h-[320px] border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.5!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0LLRg9C70LjRhtGPINCT0YDQuNCz0L7RgNC-0LLQuNGH0LAt0JHQsNGA0YHRjNC60L7Qs9C-LCAxLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
