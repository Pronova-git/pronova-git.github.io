import { Hero } from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Pronova",
  description: "Learn about Pronova and our mission to bridge global companies with the Japanese market.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="About Pronova"
        subtitle="Bridging global innovation with Japanese excellence"
        imageSrc="/images/home.png"
        align="center"
        overlayStrength="strong"
      />

      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Pronova is a consulting and software development company based in Yokosuka, Japan. We specialize in
                  helping international companies successfully enter and expand in the Japanese market.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Our unique combination of deep market knowledge, technical expertise, and hands-on execution enables
                  us to deliver practical solutions that drive real business results. We don't just provide advice—we
                  work alongside our clients to implement strategies and build the technology needed for success.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  With a strong background in telecommunications, AI, and software development, we bring both business
                  acumen and technical depth to every engagement. Our clients benefit from our understanding of Japanese
                  business culture combined with international best practices.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Business Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/5 backdrop-blur border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Business Name</h3>
                        <p className="text-white/70">Pronova</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                        <p className="text-white/70">Yokosuka, Japan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Business Type</h3>
                        <p className="text-white/70">Consulting & Software Development</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Domain</h3>
                        <p className="text-white/70">pronova-lab.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Professional Partner</h2>
              <Card className="bg-white/5 backdrop-blur border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Tax Advisor</h3>
                  <p className="text-white/80">Takahashi Nobuhisa Tax Accountant Office</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
