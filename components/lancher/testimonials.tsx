"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "A Lancher mudou completamente a hora do recreio. Acabou a confusão e as filas.",
    author: "Maria Silva",
    role: "Escola Modelo",
  },
  {
    quote: "O sistema é muito fácil de usar e o suporte é incrível. Recomendo para todas as cantinas.",
    author: "José Antonio",
    role: "Cantina Sabor & Saúde",
  },
  {
    quote: "Os pais adoraram poder acompanhar os gastos dos filhos. E nós ganhamos muito mais controle.",
    author: "André Soares",
    role: "Colégio São Paulo",
  },
]

const clients = ["Escola Alpha", "Colégio Beta", "Instituto Gamma", "Escola Delta", "Colégio Epsilon", "Instituto Zeta"]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-4">O QUE DIZEM SOBRE NÓS</h2>
          <p className="text-lg text-lancher-red font-medium">Quem usa, aprova</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-12 h-12 text-lancher-red/20 absolute top-8 left-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="text-center pt-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl text-gray-700 mb-8 italic">"{testimonials[current].quote}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonials[current].author}</p>
                  <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Depoimento anterior"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === current ? "bg-lancher-red" : "bg-gray-300"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                    whileHover={{ scale: 1.3 }}
                    animate={{ scale: index === current ? 1.3 : 1 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Próximo depoimento"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-12">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-400 font-medium whitespace-nowrap">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
