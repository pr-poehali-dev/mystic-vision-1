import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Базовый",
    price: "9 900",
    period: " руб",
    description: "Для новичков и мастеров, начинающих с кератином",
    features: [
      "Теория кератинового выпрямления",
      "Диагностика и типы волос",
      "Техника нанесения состава",
      "Видеоуроки в личном кабинете",
      "Сертификат о прохождении",
      "Поддержка куратора 30 дней",
    ],
  },
  {
    name: "Профи",
    price: "19 900",
    period: " руб",
    description: "Для опытных мастеров и владельцев салонов",
    features: [
      "Всё из Базового тарифа",
      "Практика на 3 моделях",
      "Работа с премиум-составами",
      "Авторская методика преподавателя",
      "Сертификат международного образца",
      "Поддержка куратора 90 дней",
      "Доступ к закрытому клубу мастеров",
      "Скидка 15% на материалы-партнёры",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "39 900",
    period: " руб",
    description: "Индивидуальное обучение с личным наставником",
    features: [
      "Всё из тарифа Профи",
      "Персональные занятия 1 на 1",
      "Разбор ваших реальных кейсов",
      "Помощь с запуском услуги в салоне",
      "Безлимитная поддержка 6 месяцев",
      "Готовые скрипты для клиентов",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Тарифы</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Выберите свой уровень</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Возможна рассрочка. Первый платёж — после первого занятия.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${plan.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30"
                }`}
              >
                Записаться
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
