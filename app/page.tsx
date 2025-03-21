import Hero from "@/components/global/hero"
import HowItWorks from "@/components/global/how-it-works"
import Features from "@/components/global/features"
import Testimonials from "@/components/global/testimonials"
import Footer from "@/components/global/footer"

export default function Home() {
  return (
   
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Hero />
          <HowItWorks />
          <Features />
          <Testimonials />
        </main>
        <Footer />
      </div>
  
  )
}

