"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function CategoryGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const categories = [
    {
      icon: "🔥",
      title: "Titanium Alcohol Stove",
      subtitle: "Thru-Hiking Edition",
      color: "from-[#FF5C00] to-[#FFBE40]",
    },
    {
      icon: "🌬️",
      title: "Hypoallergenic Mouth Tape",
      subtitle: "Sleep Optimization",
      color: "from-[#7B00FF] to-[#FF5C00]",
    },
    {
      icon: "⚙️",
      title: "Nano-Filter Hydration",
      subtitle: "Trail Water Systems",
      color: "from-[#FFBE40] to-[#7B00FF]",
    },
  ]

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
          Innovation You Can{" "}
          <span className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">Feel</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-[#3C3C3C] bg-[#1a1a1a]/50 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#FF5C00] cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10 space-y-4 text-center">
                <div className="text-6xl">{category.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-[#e8e8e8]">{category.title}</h3>
                <p className="text-[#a0a0a0]">{category.subtitle}</p>
              </div>

              {hoveredCard === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 transition-opacity`} />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
