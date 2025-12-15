import { RefreshCw, Building2, Banknote, Lock, CheckCircle2, Wallet } from "lucide-react"

export function EfiPartnership() {
  return (
    <section className="py-16 md:py-24 bg-lancher-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lancher-red/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-lancher-red" />
            <span className="text-sm font-medium text-lancher-red">Parceria Oficial</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-lancher-black mb-4">PARCERIA OFICIAL EFÍ BANK</h2>
          <p className="text-lg text-lancher-red font-medium mb-4">Pagamentos modernos com segurança bancária.</p>
          <p className="text-lancher-black text-sm">
            Receba seu dinheiro direto na conta Efí, com as melhores taxas do mercado e sem retenção.
          </p>
        </div>

        {/* Conta Digital Efí e Taxas - 2 Cards em Paralelo */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-lancher-red/5 to-lancher-red/10 rounded-2xl p-6 md:p-8 border border-lancher-red/20">
            <div className="w-12 h-12 bg-lancher-red rounded-xl flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-lancher-white" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-lancher-black mb-3">Conta Digital Efí</h3>
            <div className="space-y-2">
              {[
                "Integração nativa",
                "Segurança 100%",
                "Receba seu dinheiro na conta Efí.",
                "Capital de giro com recargas antecipadas.",
                "Sem retenção do seu dinheiro.",
                "Certificados de segurança e transações protegidas.",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-lancher-black">
                  <CheckCircle2 className="w-4 h-4 text-lancher-red shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-lancher-brown rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-extrabold text-lg text-white mb-6 text-center">Taxas da operadora financeira (Efí):</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-lancher-white rounded-xl p-4 text-center border border-lancher-gray/30">
                <div className="w-12 h-12 bg-lancher-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Banknote className="w-6 h-6 text-lancher-red" />
                </div>
                <p className="text-sm text-lancher-black mb-1">Pix</p>
                <p className="text-2xl font-bold text-lancher-black">0,89%</p>
              </div>
              <div className="bg-lancher-white rounded-xl p-4 text-center border border-lancher-gray/30">
                <div className="w-12 h-12 bg-lancher-brown/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-lancher-brown" />
                </div>
                <p className="text-sm text-lancher-black mb-1">Cartão de Crédito</p>
                <p className="text-2xl font-bold text-lancher-black">3%</p>
              </div>
            </div>
            <p className="text-center text-sm text-white/80">
              Valores referentes exclusivamente ao processamento bancário. A Lancher não cobra taxas sobre transações.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
