import { Navigation } from "@/components/navigation"
import { LavaBackground } from "@/components/lava-background"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <LavaBackground />
      <Navigation />
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-lg text-[#C0C0C0] mb-12">
              Get in touch with our team for inquiries, support, or partnership opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6">
                <h3 className="font-heading text-xl font-bold text-[#FF5C00] mb-2">Email</h3>
                <p className="text-[#C0C0C0]">support@titantreklab.com</p>
              </div>

              <div className="rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6">
                <h3 className="font-heading text-xl font-bold text-[#FF5C00] mb-2">Phone</h3>
                <p className="text-[#C0C0C0]">+1 952-855-0385</p>
              </div>

              <div className="rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6">
                <h3 className="font-heading text-xl font-bold text-[#FF5C00] mb-2">Location</h3>
                <p className="text-[#C0C0C0]">732 Orchard Street</p>
                <p className="text-[#C0C0C0]">Osseo, Minnesota 55369</p>
                <p className="text-[#C0C0C0]">United States</p>
              </div>

              <div className="rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6">
                <h3 className="font-heading text-xl font-bold text-[#FF5C00] mb-2">Hours</h3>
                <p className="text-[#C0C0C0]">Mon-Fri: 9AM - 6PM PST</p>
              </div>
            </div>

            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
