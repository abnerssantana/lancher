"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Users, ShieldCheck } from "lucide-react";
import { OwnerDialog } from "./owner-dialog";

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-24 bg-linear-to-b from-red-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-lancher-red/10 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-lancher-red rounded-full animate-pulse" />
              <span className="text-sm font-medium text-lancher-red">
                100% Gratuito para cantinas
              </span>
            </motion.div>

            <motion.h1
              className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-black leading-tight my-10 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A PLATAFORMA QUE TRANSFORMA A GESTÃO DE CANTINAS ESCOLARES
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Digitalize pedidos, elimine filas e simplifique o controle de
              vendas e pagamentos — tudo em um só sistema.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {" "}
              <Button
                size="lg"
                variant="outline"
                className="border-lancher-red text-lancher-red hover:bg-lancher-red/10 text-base px-8 py-6 bg-transparent"
              >
                Entrar
              </Button>
              <OwnerDialog>
                <Button
                  size="lg"
                  className="bg-lancher-red hover:bg-lancher-red-dark text-white text-base px-8 py-6"
                >
                  Quero conhecer a Lancher
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </OwnerDialog>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-20 pt-10 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { icon: Smartphone, text: "App para pais e alunos" },
                { icon: Users, text: "+500 cantinas parceiras" },
                { icon: ShieldCheck, text: "Pagamento seguro" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-lancher-red" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/happy-students-at-school-cafeteria-with-tablets-an.jpg"
                alt="Estudantes felizes usando o sistema Lancher na cantina"
                className="rounded-2xl shadow-2xl mx-auto"
                width={600}
                height={700}
              />
            </motion.div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-lancher-red/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-lancher-red/10 rounded-full blur-2xl" />

            <motion.div
              className="absolute -right-4 top-3/4 p-4 rounded-xl shadow-lg border bg-green-200/30 border-green-300 z-20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Pedido confirmado!
                  </p>
                  <p className="text-xs text-gray-500">
                    Lanche pronto às 10:15
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
