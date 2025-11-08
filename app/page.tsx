import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CategoryGrid } from "@/components/category-grid"
import { ProductShowcase } from "@/components/product-showcase"
import { Technology } from "@/components/technology"
import { VideoSection } from "@/components/video-section"
import { Reviews } from "@/components/reviews"
import { CTASection } from "@/components/cta-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { LavaBackground } from "@/components/lava-background"
import { CookieBanner } from "@/components/cookie-banner"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <LavaBackground />
      <Navigation />
      <Hero />
      <About />
      <CategoryGrid />
      <ProductShowcase />
      <Technology />
      <VideoSection />
      <Reviews />
      <CTASection />
      <Newsletter />
      <Footer />
      <CookieBanner />
    </main>
  )
}
