import { Navbar } from "@/components/lancher/navbar"
import { Hero } from "@/components/lancher/hero"
import { HowItWorks } from "@/components/lancher/how-it-works"
import { Benefits } from "@/components/lancher/benefits"
import { Totem } from "@/components/lancher/totem"
import { Payments } from "@/components/lancher/payments"
import { Steps } from "@/components/lancher/steps"
import { EfiPartnership } from "@/components/lancher/efi-partnership"
import { Connectivity } from "@/components/lancher/connectivity"
import { Testimonials } from "@/components/lancher/testimonials"
import { Support } from "@/components/lancher/support"
import { OwnerCta } from "@/components/lancher/owner-cta"
import { Footer } from "@/components/lancher/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Totem />
      <Payments />
      <Steps />
      <EfiPartnership />
      <Connectivity />
      <Testimonials />
      <Support />
      <OwnerCta />
      <Footer />
    </main>
  )
}
