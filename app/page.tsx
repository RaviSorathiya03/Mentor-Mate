import Navbar from "@/components/global/navbar"
import Hero from "@/components/global/hero"
import HowItWorks from "@/components/global/how-it-works"
import Features from "@/components/global/features"
import Testimonials from "@/components/global/testimonials"
import Footer from "@/components/global/footer"
import { ThemeProvider } from "@/components/global/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <HowItWorks />
          <Features />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

