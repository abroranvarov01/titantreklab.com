import Link from "next/link"
import { LavaBackground } from "@/components/lava-background"

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <div className="space-y-8 text-[#b0b0b0]">
              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email addresses when you subscribe to our newsletter</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Usage data and analytics about how you interact with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Send you newsletters and promotional materials (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Amazon Affiliate Program</h2>
                <p className="leading-relaxed">
                  As an Amazon Associate, we may collect information about your interactions with affiliate links. When
                  you click on our Amazon affiliate links, Amazon may collect information according to their own privacy
                  policy.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can
                  control cookie settings through your browser preferences. Our website uses cookies for analytics and
                  to remember your preferences.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites and services, including Amazon. We are not
                  responsible for the privacy practices of these third parties. We encourage you to review their privacy
                  policies.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can unsubscribe from
                  our newsletter at any time by clicking the unsubscribe link in our emails.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">9. Changes to Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-1">
                  <p>TitanTrekLab</p>
                  <p>732 Orchard Street</p>
                  <p>Osseo, Minnesota 55369</p>
                  <p>United States</p>
                  <p>Phone: +1 952-855-0385</p>
                </div>
              </section>

              <p className="text-sm text-[#808080] mt-8">Last updated: January 2025</p>
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
