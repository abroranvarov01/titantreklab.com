"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="relative z-50 border-b border-[#3C3C3C] bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
              TitanTrekLab
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-heading text-sm tracking-wider text-[#e8e8e8] transition-colors hover:text-[#FF5C00]"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                {hoveredLink === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] animate-in fade-in slide-in-from-bottom-2" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
