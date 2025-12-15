import { Button } from "@/components/ui/button"
import { Fingerprint, Printer, Zap } from "lucide-react"

export function Totem() {
  return (
    <section className="py-16 md:py-24 bg-lancher-brown text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/modern-self-service-kiosk-totem-with-biometric-fin.jpg"
              alt="Totem de autoatendimento Lancher"
              className="rounded-2xl mx-auto"
              width={500}
              height={500}
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Fingerprint className="w-4 h-4" />
              <span className="text-sm font-medium">Produto Opcional</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">
              TOTEM: AUTOATENDIMENTO RÁPIDO E SEGURO
            </h2>

            <p className="text-base text-white/80 mb-8">
              O totem opcional com biometria permite que alunos façam pedidos e se identifiquem em segundos via digital
              dos dedos, imprimindo o pedido instantaneamente para retirada e otimizando filas em cantinas de alto
              volume.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Fingerprint className="w-5 h-5 text-lancher-red" />
                <span className="text-sm">Biometria para agilidade</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Printer className="w-5 h-5 text-lancher-red" />
                <span className="text-sm">Impressão instantânea</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-lancher-red" />
                <span className="text-sm">Alto volume</span>
              </div>
            </div>

            <p className="text-sm text-white/60 mb-6">Negociação de aquisição/locação e mensalidade sob consulta</p>

            <Button size="lg" className="bg-white text-lancher-brown hover:bg-gray-100">
              Saiba mais sobre o totem
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
