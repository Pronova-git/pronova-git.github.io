import { Hero } from "@/components/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience - Pronova",
  description: "Companies we've worked with across various industries and technologies.",
}

export default function ExperiencePage() {
  const companies = [
    "AriSafTech Ltd.",
    "Axiross GmbH",
    "Beyond Limits",
    "CIERTO Co., Ltd.",
    "Imubit Inc.",
    "Incr Inc.",
    "JITO K.K.",
    "KOUBOU Inc.",
    "Lynx Technology LLC.",
    "Radcom Ltd.",
    "Rebomix LLC.",
    "Sakura Software Solutions LLC.",
    "SoftBank Corp.",
    "Talon Aerolytics Inc.",
    "Unif.io Inc.",
  ]

  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Experience"
        subtitle="Trusted by global technology companies"
        imageSrc="/images/software_ai.png"
        align="center"
        overlayStrength="medium"
      />

      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-white/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                We've had the privilege of working with innovative companies across telecommunications, AI, software
                development, and emerging technologies. Our clients range from startups to established corporations, all
                seeking to leverage the Japanese market or our technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 hover:border-white/30 hover:bg-white/10 transition-all text-center"
                >
                  <p className="text-white font-medium">{company}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/60 text-sm">
                Companies listed alphabetically. Additional references available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
