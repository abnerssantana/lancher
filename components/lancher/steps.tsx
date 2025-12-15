"use client"

import { motion } from "framer-motion"
import { Settings, Package, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configuração",
    description: "Configuração e homologação da sua cantina e escola",
  },
  {
    number: "02",
    icon: Package,
    title: "Cadastro",
    description: "Cadastro dos produtos",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Pronto!",
    description: "Comece a receber seus pedidos online",
  },
]

export function Steps() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-4">
            EM POUCOS PASSOS, SUA CANTINA DIGITAL
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-full"
                whileHover={{ y: -5, shadow: "lg" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-heading text-lancher-red/20">{step.number}</span>
                  <motion.div
                    className="w-12 h-12 bg-lancher-red rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <h3 className="font-heading font-extrabold text-lg text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-lancher-red/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-lancher-red rounded-2xl p-6 md:p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-base md:text-lg font-medium">
            Mais eficiência para a cantina, mais agilidade para os alunos e menos gestão manual para você.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
