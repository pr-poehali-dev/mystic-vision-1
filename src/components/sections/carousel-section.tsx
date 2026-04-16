import { motion } from "framer-motion"

const testimonials = [
  { name: "Анна К.", city: "Москва", text: "За 2 месяца после курса привлекла 15 новых клиентов на кератин. Доход вырос на 40%.", stars: 5 },
  { name: "Марина Д.", city: "Санкт-Петербург", text: "Наконец-то поняла, как работать с разными типами волос. Теперь клиенты приходят именно ко мне.", stars: 5 },
  { name: "Светлана П.", city: "Екатеринбург", text: "Курс окупился за первые три процедуры. Преподаватель отвечает на вопросы даже после обучения.", stars: 5 },
  { name: "Ольга Р.", city: "Краснодар", text: "Начала с нуля — без опыта. Сейчас работаю в салоне и принимаю заказы на дому.", stars: 5 },
  { name: "Елена М.", city: "Казань", text: "Очень понравилась практическая часть — работали на моделях с разными типами волос.", stars: 5 },
  { name: "Наталья В.", city: "Новосибирск", text: "Программа продуманная, без воды. Получила сертификат и сразу начала привлекать клиентов.", stars: 5 },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  )
}

export function CarouselSection() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наши выпускники уже зарабатывают больше.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[360px] rounded-xl overflow-hidden shadow-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm"
              data-clickable
            >
              <Stars count={item.stars} />
              <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">«{item.text}»</p>
              <div className="border-t border-primary-foreground/20 pt-4">
                <p className="text-primary-foreground font-medium text-sm">{item.name}</p>
                <p className="text-primary-foreground/60 text-xs">{item.city}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
