import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ProgressAnimation() {
  const [step, setStep] = useState(0)
  const steps = ["Теория", "Практика", "Сертификат"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      {steps.map((s, i) => (
        <motion.div
          key={s}
          className="w-full max-w-[160px] flex items-center gap-3"
          animate={{ opacity: i <= step ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full flex-shrink-0"
            animate={{ backgroundColor: i <= step ? "hsl(var(--primary))" : "hsl(var(--muted))" }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-sm text-foreground">{s}</span>
        </motion.div>
      ))}
    </div>
  )
}

function FormatAnimation() {
  const [active, setActive] = useState(0)
  const formats = ["Онлайн", "Офлайн", "Гибрид"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % formats.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      {formats.map((f, i) => (
        <motion.div
          key={f}
          className="px-5 py-2 rounded-full text-sm font-medium"
          animate={{
            backgroundColor: i === active ? "hsl(var(--primary))" : "hsl(var(--secondary))",
            color: i === active ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
            scale: i === active ? 1.08 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {f}
        </motion.div>
      ))}
    </div>
  )
}

function CertificateAnimation() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-[130px] h-[90px] rounded-lg border-2 border-primary/40 flex flex-col items-center justify-center gap-1 bg-primary/5"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: show ? 1 : 0.7, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-2xl">🏆</span>
        <span className="text-xs text-foreground font-medium">Сертификат</span>
        <span className="text-[10px] text-muted-foreground">Международного образца</span>
      </motion.div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что вас ждёт
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Program Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <ProgressAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Чёткая программа</h3>
              <p className="text-muted-foreground text-sm mt-1">Теория, практика и сертификат — по шагам от простого к сложному.</p>
            </div>
          </motion.div>

          {/* Format Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <FormatAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Удобный формат</h3>
              <p className="text-muted-foreground text-sm mt-1">Онлайн, офлайн или гибридно — выбирайте, как вам удобно учиться.</p>
            </div>
          </motion.div>

          {/* Certificate Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <CertificateAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Официальный диплом</h3>
              <p className="text-muted-foreground text-sm mt-1">Сертификат международного образца, который ценят клиенты и салоны.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
