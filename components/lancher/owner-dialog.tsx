"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle2 } from "lucide-react"

interface OwnerDialogProps {
  children: React.ReactNode
}

export function OwnerDialog({ children }: OwnerDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form state when dialog closes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-black">Cadastre sua cantina</DialogTitle>
          <DialogDescription className="text-gray-600">
            Receba uma apresentação gratuita da Lancher para sua cantina.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">100% Gratuito</div>
          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Sem Mensalidade</div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading text-xl text-black mb-2">Cadastro realizado!</h3>
            <p className="text-gray-600 text-sm">
              Em breve nossa equipe entrará em contato para agendar sua apresentação.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="dialog-name" className="text-gray-700">
                Nome completo
              </Label>
              <Input id="dialog-name" type="text" placeholder="Seu nome" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="dialog-email" className="text-gray-700">
                E-mail corporativo
              </Label>
              <Input id="dialog-email" type="email" placeholder="seu@email.com" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="dialog-phone" className="text-gray-700">
                Telefone/WhatsApp
              </Label>
              <Input id="dialog-phone" type="tel" placeholder="(00) 00000-0000" required className="mt-1" />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-lancher-red hover:bg-lancher-red-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Receber apresentação"}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Ao enviar, você concorda com nossa política de privacidade.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
