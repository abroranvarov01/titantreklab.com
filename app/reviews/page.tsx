import { Navigation } from "@/components/navigation"
import { LavaBackground } from "@/components/lava-background"
import { Reviews } from "@/components/reviews"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  return (
    <>
      <LavaBackground />
      <Navigation />
      <main className="relative z-10">
        <div className="min-h-screen py-20">
          <ProductShowcase />
          <Reviews />
        </div>
      </main>
      <Footer />
    </>
  )
}
