import { Hero } from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Code2, Globe, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Your Bridge to the Japanese Market — Business, Technology, and Execution."
        subtitle="Pronova supports global companies entering and growing in Japan through strategic consulting and advanced technology solutions."
        imageSrc="/images/home.png"
        primaryCta={{ label: "Talk to Us", href: "/contact" }}
        align="left"
        overlayStrength="medium"
      />

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur border-white/10 hover:border-white/30 transition-all group">
              <CardContent className="p-8">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Japan Market Entry & Consulting</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Helping international companies succeed in Japan by aligning business strategy and technical
                  execution.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We bridge market knowledge, local practices, and deep engineering expertise to reduce risk and
                  accelerate growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 hover:border-white/30 transition-all group">
              <CardContent className="p-8">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Software & AI Development</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Turning ideas into scalable, production-ready solutions through modern software and AI technologies.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We help clients realize their vision and accelerate digital transformation with practical,
                  results-driven engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Pronova Section */}
      <section className="py-16 lg:py-24 bg-[rgb(40,30,120)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Why Pronova</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Deep Market Understanding</h3>
                <p className="text-white/70">Deep understanding of Japanese market and culture</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hands-on Execution</h3>
                <p className="text-white/70">Hands-on execution, not just advisory</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Technical Expertise</h3>
                <p className="text-white/70">Strong background in telecom, RF, AI, and multimedia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Trusted Partner</h3>
                <p className="text-white/70">Trusted by global technology companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
