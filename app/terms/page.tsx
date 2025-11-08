import Link from "next/link"
import { LavaBackground } from "@/components/lava-background"

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <LavaBackground />

      <div className="relative z-10">
        <header className="border-b border-[#3C3C3C] bg-[#0a0a0a]/80 backdrop-blur-sm px-4 py-6">
          <div className="container mx-auto">
            <Link href="/" className="font-heading text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
                TitanTrekLab
              </span>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl font-bold mb-8 bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <div className="space-y-8 text-[#b0b0b0]">
              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using TitanTrekLab.com, you accept and agree to be bound by the terms and provision
                  of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">2. Amazon Affiliate Disclosure</h2>
                <p className="leading-relaxed">
                  TitanTrekLab.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Product Information</h2>
                <p className="leading-relaxed">
                  We strive to provide accurate product information. However, manufacturers may change product
                  specifications without notice. We recommend verifying product details on the retailer's website before
                  making a purchase.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">4. User Conduct</h2>
                <p className="leading-relaxed">
                  You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or
                  impair the website. You may not attempt to gain unauthorized access to any part of the website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on TitanTrekLab.com, including text, graphics, logos, and images, is the property of
                  TitanTrekLab or its content suppliers and is protected by international copyright laws.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  TitanTrekLab shall not be liable for any indirect, incidental, special, or consequential damages
                  arising out of or in connection with your use of the website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting to the website. Your continued use of the website constitutes acceptance of the modified
                  terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">8. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at 732 Orchard Street,
                  Osseo, Minnesota 55369, United States or call +1 952-855-0385.
                </p>
              </section>
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-block font-heading text-sm tracking-wider text-[#FF5C00] hover:text-[#FFBE40] transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
