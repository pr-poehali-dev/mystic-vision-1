import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseItems = [
  {
    src: "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
    label: "Результат процедуры",
    caption: "Гладкость и блеск на 4–6 месяцев",
  },
  {
    src: "/fashion-photography-editorial-black-and-white.jpg",
    label: "Работа выпускника",
    caption: "Практика на реальных моделях",
  },
  {
    src: "/interior-design-minimalist-living-room-natural-lig.jpg",
    label: "Учебная студия",
    caption: "Профессиональное оборудование",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Работы выпускников
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-serif text-lg">{item.label}</span>
                <span className="text-white/70 text-sm mt-1">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
