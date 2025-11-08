import Link from "next/link"

export function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ]

  return (
    <footer className="relative z-10 border-t border-[#3C3C3C] bg-[#0a0a0a]/80 backdrop-blur-sm px-4 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="font-heading text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
              TitanTrekLab
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm tracking-wider text-[#a0a0a0] transition-colors hover:text-[#FF5C00]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-center space-y-2">
            <p className="text-sm text-[#a0a0a0] font-heading tracking-wide">Forged Below the Surface</p>
            <p className="text-xs text-[#a0a0a0]">© 2025 TitanTrekLab.com — All Rights Reserved</p>
            <p className="text-xs text-[#a0a0a0]">
              Amazon Affiliate Partner 🛒 As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
