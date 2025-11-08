"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative z-10 px-4 py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] p-16 text-center">
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#FF5C00] opacity-20 blur-3xl animate-pulse" />
            <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[#7B00FF] opacity-20 blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-8">
            <h2 className="font-heading text-5xl font-bold text-[#e8e8e8] md:text-6xl">
              Refine Your{" "}
              <span className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">Gear</span>
            </h2>

            <p className="text-xl text-[#a0a0a0]">Join explorers who demand precision, durability, and innovation</p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] px-12 py-6 font-heading text-lg tracking-wider text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C00]/50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="flex items-center gap-2">
                  Shop the Lab
                  <span className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}>→</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
