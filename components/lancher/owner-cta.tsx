"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { OwnerDialog } from "./owner-dialog"
import { useState } from "react"

export function OwnerCta() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="py-20 bg-lancher-red">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-extrabold text-3xl md:text-4xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          É dono de cantina?
        </motion.h2>
        <motion.p
          className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Simplifique a gestão do seu negócio, receba pagamentos de forma prática e ofereça mais comodidade para pais e
          alunos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <OwnerDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Button size="lg" className="bg-white text-lancher-red hover:bg-gray-100 font-semibold px-8 py-6 text-base">
              Quero conhecer a Lancher
            </Button>
          </OwnerDialog>
        </motion.div>
      </div>
    </section>
  )
}
