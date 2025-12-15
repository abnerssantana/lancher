"use client"

import { motion } from "framer-motion"
import { ClipboardList, Clock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Pedidos Antecipados",
    description: "Receba pedidos antecipados e otimize sua produção",
  },
  {
    icon: Clock,
    title: "Reduza Filas",
    description: "Reduza filas e o tempo de espera dos alunos",
  },
  {
    icon: BarChart3,
    title: "Vendas e Estoque",
    description: "Acompanhe vendas e estoque em tempo real, sem planilhas manuais",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-4">
            SIMPLIFIQUE A OPERAÇÃO DA CANTINA COM TECNOLOGIA
          </h2>
          <p className="text-base text-gray-600 text-pretty">
            A Lancher conecta pais, alunos e cantinas em um fluxo totalmente digital. Os pedidos são feitos e pagos pelo
            app antes do intervalo, permitindo mais agilidade no atendimento e controle total das vendas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:border-lancher-red/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-14 h-14 bg-lancher-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lancher-red transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <feature.icon className="w-7 h-7 text-lancher-red group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="font-heading font-extrabold text-lg md:text-xl text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
