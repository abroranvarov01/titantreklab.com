import { Navigation } from "@/components/navigation"
import { LavaBackground } from "@/components/lava-background"
import { About } from "@/components/about"
import { Technology } from "@/components/technology"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <LavaBackground />
      <Navigation />
      <main className="relative z-10">
        <div className="min-h-screen py-20">
          <About />
          <Technology />
        </div>
      </main>
      <Footer />
    </>
  )
}
