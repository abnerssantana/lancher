import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const links = {
    produto: [
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Pagamentos", href: "#pagamentos" },
      { label: "Totem", href: "#totem" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#suporte" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  }

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/lancherlogobranca.png"
                alt="Lancher"
                width={150}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm mb-12">A parceira ideal pra sua cantina.</p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">PRODUTO</h4>
            <ul className="space-y-2">
              {links.produto.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">EMPRESA</h4>
            <ul className="space-y-2">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">CONTATO</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@lancher.com.br"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@lancher.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5517991981114"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (17) 99198-1114
                </a>
              </li>
              <li>
                <a
                  href="tel:+5517982310203"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (17) 98231-0203
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  São Paulo, SP - Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Lancher. Todos os direitos reservados.</p>
            <p className="text-white/70 text-sm font-medium">Lancher, a parceira ideal pra sua cantina.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
