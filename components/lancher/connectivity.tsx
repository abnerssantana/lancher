import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Tablet } from "lucide-react"

export function Connectivity() {
  return (
    <section className="py-16 md:py-24 bg-lancher-red">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">GESTÃO COMPLETA DE ONDE VOCÊ ESTIVER</h2>
            <p className="text-base text-white/80 mb-8">
              Acesse a Lancher pelo computador, celular ou tablet. Controle pedidos, configure cardápios e visualize
              relatórios em tempo real, dentro ou fora da escola.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Monitor className="w-5 h-5" />
                <span className="text-sm">Desktop</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Tablet className="w-5 h-5" />
                <span className="text-sm">Tablet</span>
              </div>
            </div>

            <Button size="lg" className="bg-white text-lancher-red hover:bg-gray-100">
              Entrar na minha conta
            </Button>
          </div>

          <div className="relative">
            <img
              src="/responsive-dashboard-mockup-on-laptop-tablet-and-p.jpg"
              alt="Lancher em múltiplos dispositivos"
              className="rounded-xl shadow-2xl mx-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
