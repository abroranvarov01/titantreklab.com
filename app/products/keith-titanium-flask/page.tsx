import { LavaBackground } from "@/components/lava-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const product = {
    name: "Keith Titanium Flask 200ml",
    price: "$39.99",
    category: "Hydration",
    rating: 4.7,
    reviews: 189,
    image: "/titanium-flask.jpg",
    description:
      "The Keith Titanium Flask 200ml is a premium outdoor flask designed for adventurers who demand durability without the weight. Made from pure titanium with a secure screw cap, it's perfect for carrying spirits or emergency liquids in the backcountry.",
    features: [
      "Pure titanium construction",
      "200ml capacity",
      "Lightweight at 88g",
      "Leak-proof screw cap",
      "Rounded hip-flask design",
      "Corrosion and rust-proof",
    ],
    specs: {
      Weight: "88g",
      Capacity: "200ml (6.8oz)",
      Material: "Pure Titanium",
      Dimensions: "105 x 80 x 20mm",
    },
    link: "https://www.amazon.com/Keith-Titanium-Flask-Outdoor-Camping/dp/B01N0X8YZ9",
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
                  src={product.image || "/placeholder.svg?height=600&width=600&query=titanium flask outdoor"}
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
