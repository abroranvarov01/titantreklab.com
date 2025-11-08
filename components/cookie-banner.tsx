"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAccepting, setIsAccepting] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setIsAccepting(true)
    setTimeout(() => {
      localStorage.setItem("cookiesAccepted", "true")
      setIsVisible(false)
    }, 500)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#1a1a1a]/95 p-6 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#e8e8e8] flex-1">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              our use of cookies.
            </p>

            <Button
              onClick={handleAccept}
              className={`bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] font-heading text-white hover:scale-105 whitespace-nowrap transition-all ${
                isAccepting ? "scale-105" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                Accept Heat
                <span>🔥</span>
              </span>
            </Button>
          </div>

          {isAccepting && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] opacity-20 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
