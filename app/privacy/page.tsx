import { Hero } from "@/components/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Pronova",
  description: "Privacy policy for Pronova.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Privacy Policy"
        subtitle="How we handle and protect your information"
        align="center"
        overlayStrength="medium"
      />

      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-white/80 leading-relaxed">
                    Pronova ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you visit our website or use our
                    services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <p className="text-white/80 leading-relaxed mb-3">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                    <li>Personal information (name, email address, company name) that you voluntarily provide</li>
                    <li>Usage data and analytics about how you interact with our website</li>
                    <li>Information from cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-white/80 leading-relaxed mb-3">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                    <li>Responding to your inquiries and providing customer service</li>
                    <li>Improving our website and services</li>
                    <li>Sending you information about our services (with your consent)</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-white/80 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information. However, no method of transmission over the internet or electronic storage is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                  <p className="text-white/80 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-white/80 leading-relaxed mb-3">
                    Depending on your location, you may have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to object to or restrict processing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
                  <p className="text-white/80 leading-relaxed">
                    As we operate from Japan, your information may be transferred to and processed in Japan. We ensure
                    appropriate safeguards are in place to protect your information in accordance with this Privacy
                    Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-white/80 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-white/80 leading-relaxed">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us
                    through our contact form.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/60 text-sm">Last Updated: January 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
