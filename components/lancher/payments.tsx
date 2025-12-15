"use client"

import { motion } from "framer-motion"
import { CreditCard, RefreshCw, CheckCircle2, ShieldCheck, DollarSign, Zap, Calendar, Ban } from "lucide-react"

const advantages = [
  { icon: Zap, text: "Pagamentos em tempo real via Pix e cartão" },
  { icon: Calendar, text: "Recarga automática programada pelos pais" },
  { icon: Ban, text: "Sem boletos, sem atraso, sem taxas escondidas" },
  { icon: ShieldCheck, text: "Total conformidade com o sistema financeiro brasileiro" },
]

export function Payments() {
  return (
    <section id="pagamentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <CreditCard className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Pagamento instantâneo</span>
            </motion.div>

            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-4 w-8/12">
              PAGAMENTOS VIA PIX E CARTÃO DE CRÉDITO
            </h2>

            <p className="text-lg text-lancher-red font-medium mb-4">Pagamento instantâneo, zero burocracia</p>

            <p className="text-gray-600 text-sm mb-6">
              Com integração total ao Pix e cartão de crédito, a Lancher garante que cada pedido ou recarga seja
              confirmada em segundos. O dinheiro cai direto na conta da cantina, com total segurança e rastreabilidade.
            </p>

            <p className="text-gray-600 text-sm mb-8">
              Além disso, os pais podem ativar a recarga automática: basta definir um valor mínimo de saldo. Quando a
              conta do aluno fica abaixo desse limite, o sistema dispara automaticamente uma cobrança no cartão
              cadastrado e já faz a recarga — sem preocupação, sem esquecimento.
            </p>

            <div className="space-y-4">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <adv.icon className="w-5 h-5 text-lancher-red shrink-0" />
                  </motion.div>
                  <span className="text-gray-700 text-sm">{adv.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-linear-to-br from-lancher-black to-lancher-black/80 rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <span className="text-3xl font-bold">SALDO</span>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="bg-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-white" />
                    <span className="text-white/90 font-medium">Recarga via Pix</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Valor</span>
                    <span className="font-bold">R$ 50,00</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-green-300 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirmado em 3 segundos</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-white" />
                    <span className="text-white/90 font-medium">Recarga via Cartão</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Valor</span>
                    <span className="font-bold">R$ 100,00</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-green-300 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirmado em 5 segundos</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/20 rounded-xl p-4 border-2 border-white/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Saldo atual</span>
                    <span className="font-bold text-3xl">R$ 175,00</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 },
                scale: { duration: 0.5, delay: 0.5 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Recarga Automática</p>
                  <p className="text-xs text-red-500">Mínimo: R$ 20,00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
