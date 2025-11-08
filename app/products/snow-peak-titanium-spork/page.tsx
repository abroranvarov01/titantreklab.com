import { LavaBackground } from "@/components/lava-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const product = {
    name: "Snow Peak Titanium Spork",
    price: "$12.99",
    category: "Utensils",
    rating: 4.8,
    reviews: 342,
    image: "/titanium-spork.jpg",
    description:
      "The Snow Peak Titanium Spork is the ultimate ultralight eating utensil for backpackers and minimalists. Crafted from pure titanium, it combines a spoon and fork into one incredibly lightweight and durable tool.",
    features: [
      "Pure titanium construction",
      "Only 16g weight",
      "Spoon and fork combination",
      "Corrosion resistant",
      "Smooth polished edges",
      "Compact 165mm length",
    ],
    specs: {
      Weight: "16g",
      Length: "165mm",
      Material: "Pure Titanium",
      Finish: "Polished",
    },
    link: "https://www.amazon.com/Snow-Peak-Titanium-Spork/dp/B000AR2N7Q",
  }

  return (
    <>
      <LavaBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen px-4 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#1a1a1a]">
                <img
                  src={product.image || "/placeholder.svg?height=600&width=600&query=titanium spork"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-2 text-sm font-heading tracking-widest text-[#FFBE40]">{product.category}</div>
                <h1 className="mb-4 font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">{product.name}</h1>

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-[#FFBE40] text-[#FFBE40]" : "text-[#3C3C3C]"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#a0a0a0]">{product.reviews} reviews</span>
                </div>

                <div className="mb-8 text-3xl font-bold text-[#FF5C00]">{product.price}</div>
              </div>

              <p className="text-lg leading-relaxed text-[#c0c0c0]">{product.description}</p>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] font-heading text-lg hover:scale-105"
                asChild
              >
                <Link href={product.link} target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                </Link>
              </Button>

              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#e8e8e8]">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#c0c0c0]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5C00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#e8e8e8]">Technical Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-[#3C3C3C] pb-2">
                      <span className="text-[#a0a0a0]">{key}</span>
                      <span className="font-medium text-[#e8e8e8]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
