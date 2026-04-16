import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const footerLinks = [
  { label: "Программа", href: "#" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#" },
  { label: "Контакты", href: "#" },
]

const faqItems = [
  {
    q: "Можно ли пройти курс без опыта?",
    a: "Да, базовый тариф разработан специально для новичков. Опыт не нужен — только желание учиться.",
  },
  {
    q: "Какие составы используются на обучении?",
    a: "Работаем с проверенными профессиональными брендами: Brazilian Blowout, Honma Tokyo, La Biosthetique.",
  },
  {
    q: "Как долго держится эффект у клиентов?",
    a: "При правильном уходе — от 4 до 6 месяцев. Мы учим, как объяснить это клиентам и продать уходовую линейку.",
  },
  {
    q: "Есть ли рассрочка?",
    a: "Да, доступна рассрочка на все тарифы. Первый платёж — после первого занятия.",
  },
]

export function FooterSection() {
  const [email, setEmail] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* FAQ Section */}
      <div className="relative max-w-3xl mx-auto mb-24">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Частые вопросы
        </motion.p>
        <div className="divide-y divide-border">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="py-5 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              data-clickable
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-lg text-foreground">{item.q}</span>
                <motion.span
                  className="text-muted-foreground text-xl flex-shrink-0"
                  animate={{ rotate: openFaq === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              KERATIN.
            </motion.h2>
            <p className="text-muted-foreground mt-3 max-w-xs">Обучение кератиновому выпрямлению от практикующих мастеров</p>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Email signup */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-2">Телефон: <span className="text-foreground">+7 (000) 000-00-00</span></p>
            <p className="text-muted-foreground text-sm mb-4">Email: <span className="text-foreground">info@keratin-school.ru</span></p>
            <p className="text-muted-foreground text-sm mb-4">Оставьте email — пришлём программу курса и расписание:</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите email"
                className="flex-1 bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-foreground text-background p-3 rounded-lg hover:bg-foreground/90 transition-colors"
                data-clickable
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Школа кератинового выпрямления. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
