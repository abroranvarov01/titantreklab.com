"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative z-10 flex min-h-[90vh] items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="font-heading text-6xl font-bold leading-tight tracking-tight text-balance md:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-r from-[#e8e8e8] via-[#FFBE40] to-[#e8e8e8] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
              Born in Fire,
            </span>
            <span className="block bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Built for the Trail
            </span>
          </h1>

          <p className="font-heading text-xl text-[#a0a0a0] tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 md:text-2xl">
            Precision Gear for Explorers.
          </p>

          <div className="flex flex-col items-center gap-3 text-lg text-[#FFBE40] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <span>Titanium Stoves • Breath Optimization • Trail Innovation</span>
          </div>

          <div className="pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] px-12 py-6 font-heading text-lg tracking-wider text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C00]/50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Gear
                <span className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}>🔥</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7B00FF] to-[#FF5C00] opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
          </div>

          <p className="pt-4 text-sm text-[#a0a0a0] animate-in fade-in duration-1000 delay-1200">
            Powered by TitanTrek Lab Research
          </p>
        </div>
      </div>
    </section>
  )
}
