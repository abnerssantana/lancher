import { MessageCircle, Mail, Phone, Clock } from "lucide-react"

export function Support() {
  return (
    <section id="suporte" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
              SUPORTE DE VERDADE PARA ESCOLAS E CANTINAS
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Nossa equipe acompanha cada etapa da implantação, do cadastro inicial ao treinamento da equipe.
              Atendimento via WhatsApp, e-mail e telefone, com horários estendidos e suporte humanizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium text-gray-900">Resposta rápida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="font-medium text-gray-900">Suporte completo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="font-medium text-gray-900">Atendimento direto</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horário</p>
                  <p className="font-medium text-gray-900">Estendido</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/friendly-customer-support-team-helping-school-cafe.jpg"
              alt="Equipe de suporte Lancher"
              className="rounded-2xl shadow-xl mx-auto"
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
