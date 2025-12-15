import { RefreshCw, Building2, Banknote, Lock, CheckCircle2 } from "lucide-react"

export function EfiPartnership() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Parceria Oficial</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-4">PARCERIA OFICIAL EFÍ BANK</h2>
          <p className="text-lg text-lancher-red font-medium mb-4">Pagamentos modernos com segurança bancária</p>
          <p className="text-gray-600 text-sm">
            Receba seu dinheiro direto na conta Efí, com as melhores taxas do mercado e sem retenção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-black mb-3">Recarga Automática</h3>
            <p className="text-gray-600 text-sm">
              O pai define um saldo mínimo. Quando a conta do aluno fica abaixo desse valor, o sistema dispara uma
              cobrança no cartão e faz a recarga instantaneamente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-black mb-3">Conta Digital Efí</h3>
            <div className="space-y-2">
              {[
                "Integração nativa",
                "Segurança 100%",
                "Receba seu dinheiro na conta Efí",
                "Capital de giro com recargas antecipadas",
                "Sem retenção do seu dinheiro",
                "Certificados de segurança",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <h3 className="font-heading font-extrabold text-lg text-black mb-6 text-center">Tabela de Taxas</h3>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Banknote className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-500 mb-1">Pix</p>
                <p className="text-2xl font-bold text-lancher-brown">0,89%</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-500 mb-1">Cartão de Crédito</p>
                <p className="text-2xl font-bold text-lancher-brown">3%</p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Valores referentes exclusivamente ao processamento bancário.{" "}
            <strong className="text-lancher-red">A Lancher não cobra taxas sobre transações.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
