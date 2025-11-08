"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
            Join the{" "}
            <span className="bg-gradient-to-r from-[#FF5C00] to-[#7B00FF] bg-clip-text text-transparent">
              Expedition
            </span>
          </h2>

          <p className="mb-8 text-lg text-[#a0a0a0]">Stay Heated. Stay Ahead.</p>

          <form className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`flex-1 border-[#3C3C3C] bg-[#1a1a1a] font-heading text-[#e8e8e8] placeholder:text-[#a0a0a0] transition-all ${
                isFocused ? "border-[#FF5C00] shadow-lg shadow-[#FF5C00]/20" : ""
              }`}
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] font-heading tracking-wider text-white hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-xs text-[#a0a0a0]">Get exclusive gear drops, trail tips, and lab insights</p>
        </div>
      </div>
    </section>
  )
}
