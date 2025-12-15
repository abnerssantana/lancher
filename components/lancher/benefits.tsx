"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Banknote, Gift, Heart, FileText, Users } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    text: "Atendimento mais rápido e organizado no intervalo",
  },
  {
    icon: Banknote,
    text: "Redução de dinheiro físico circulando no ambiente escolar",
  },
  {
    icon: Gift,
    text: "Sistema gratuito e simples de implementar",
  },
  {
    icon: Heart,
    text: "Pais controlam restrições de alimentos e gastos",
  },
  {
    icon: FileText,
    text: "Relatórios automatizados",
  },
  {
    icon: Users,
    text: "Gestão de alunos facilitada",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-linear-to-r from-white to-lancher-brown/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-12">
              ORGANIZAÇÃO, SEGURANÇA E EFICIÊNCIA EM UM SÓ SISTEMA
            </h2>
            <p className="text-base text-gray-600 mb-8">
              A Lancher agrega tecnologia e praticidade à rotina escolar, garantindo mais controle às cantinas e mais
              tranquilidade para as famílias.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-lancher-red/10 rounded-lg flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon className="w-5 h-5 text-lancher-red" />
                  </motion.div>
                  <p className="text-gray-700 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-lancher-red hover:bg-lancher-red-dark text-white w-full">
                Quero testar a Lancher na minha escola
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/food-kids.jpg"
              alt="Cantina organizada com sistema Lancher"
              className="rounded-2xl shadow-xl"
              width={700}
              height={300}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">0</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Filas no intervalo</p>
                  <p className="text-xs text-gray-500">Atendimento em segundos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
