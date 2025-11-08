"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      name: "TOAKS Titanium Stove Set",
      category: "Cooking",
      price: "$89.99",
      image: "/titanium-camping-stove-set-ultralight-backpacking.jpg",
      slug: "toaks-titanium-stove-set",
    },
    {
      name: "Trangia Mini Alcohol Burner",
      category: "Heating",
      price: "$24.99",
      image: "/alcohol-burner-camping-stove-compact.jpg",
      slug: "trangia-mini-alcohol-burner",
    },
    {
      name: "Lixada Ultralight Pot System",
      category: "Cooking",
      price: "$45.99",
      image: "/ultralight-titanium-camping-pot-cookware-set.jpg",
      slug: "lixada-ultralight-pot-system",
    },
    {
      name: "Gear Aid Titanium Wind Shield",
      category: "Protection",
      price: "$34.99",
      image: "/camping-wind-shield-titanium-folding.jpg",
      slug: "gear-aid-titanium-wind-shield",
    },
    {
      name: "Somnifix Sleep Strips",
      category: "Recovery",
      price: "$19.99",
      image: "/mouth-tape-sleep-strips-breathing-recovery.jpg",
      slug: "somnifix-sleep-strips",
    },
    {
      name: "Hostage Tape Hypoallergenic",
      category: "Recovery",
      price: "$24.99",
      image: "/hypoallergenic-mouth-tape-sleep-recovery.jpg",
      slug: "hostage-tape-hypoallergenic",
    },
    {
      name: "SilentSnore Breath Optimizer",
      category: "Recovery",
      price: "$29.99",
      image: "/breathing-device-snore-optimizer-recovery.jpg",
      slug: "silentsnore-breath-optimizer",
    },
    {
      name: "ThermoLite Trail Cup",
      category: "Hydration",
      price: "$14.99",
      image: "/titanium-camping-cup-lightweight-trail-mug.jpg",
      slug: "thermolite-trail-cup",
    },
    {
      name: "Sea to Summit Alpha Pan",
      category: "Cooking",
      price: "$54.99",
      image: "/camping-frying-pan-titanium-outdoor-cookware.jpg",
      slug: "sea-to-summit-alpha-pan",
    },
    {
      name: "Snow Peak Titanium Spork",
      category: "Utensils",
      price: "$12.99",
      image: "/titanium-spork-ultralight-camping-utensil.jpg",
      slug: "snow-peak-titanium-spork",
    },
    {
      name: "Keith Titanium Flask 200ml",
      category: "Hydration",
      price: "$39.99",
      image: "/titanium-flask-200ml-outdoor-camping-bottle.jpg",
      slug: "keith-titanium-flask",
    },
  ]

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
          Forged for{" "}
          <span className="bg-gradient-to-r from-[#FF5C00] to-[#7B00FF] bg-clip-text text-transparent">Excellence</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-[#3C3C3C] bg-[#1a1a1a]/50 backdrop-blur-sm transition-all hover:border-[#FF5C00] hover:shadow-xl hover:shadow-[#FF5C00]/20"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square overflow-hidden bg-[#2a2a2a]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-heading tracking-widest text-[#FFBE40]">{product.category}</div>
                <h3 className="font-heading text-lg font-bold text-[#e8e8e8] text-balance">{product.name}</h3>
                <div className="flex items-center justify-between pt-2">
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] font-heading text-white hover:scale-105"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>

              {hoveredProduct === index && (
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#FF5C00]/10 to-transparent" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
