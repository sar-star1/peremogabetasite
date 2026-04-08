import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const schedule = [
  { day: "Понеділок — Субота", hours: "08:00 — 20:00" },
  { day: "Неділя", hours: "Вихідний" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Контакти
          </h2>
          <p className="text-muted-foreground">Завітайте до нас або напишіть</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Адреса</h3>
                <a
                  href="https://maps.google.com/?q=вулиця+Григоровича-Барського,+1,+Київ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  вулиця Григоровича-Барського, 1, Київ, Україна
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Робочий час</h3>
                {schedule.map((s) => (
                  <div key={s.day} className="flex justify-between gap-6 text-muted-foreground mb-1">
                    <span>{s.day}</span>
                    <span className="font-medium text-foreground">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:zashkvarnojulia@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  zashkvarnojulia@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-auto min-h-[320px]"
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
