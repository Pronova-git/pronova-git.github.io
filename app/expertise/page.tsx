import { Hero } from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, Film, Brain, Cpu, Blocks } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expertise - Pronova",
  description: "Deep technical expertise in telecom, AI, multimedia, and emerging technologies.",
}

export default function ExpertisePage() {
  const expertiseAreas = [
    {
      icon: Radio,
      title: "Telecom, 4G, 5G & RF",
      description:
        "Deep expertise in telecommunications, 4G/5G networks, and radio frequency technologies. Experience with network architecture, protocol implementation, and RF system design.",
      useCases: ["Radio Interface", "Network optimization", "Connected devices/IoT", "Simulations", "Link budget", "Testings", "Satellight and NTN"],
    },
    {
      icon: Film,
      title: "Multimedia & Streaming",
      description:
        "Advanced knowledge in multimedia processing, video streaming, and real-time media delivery systems. Expertise in codecs, streaming protocols, and media infrastructure.",
      useCases: ["VOD platforms", "Media processing pipelines", "Video and Audio players"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Comprehensive AI/ML capabilities including generative AI, computer vision, predictive analytics, and agentic AI systems. Focus on production-ready implementations.",
      useCases: ["Generative AI applications", "Computer vision systems", "Predictive models", "AI agents"],
    },
    {
      icon: Cpu,
      title: "Embedded Software",
      description:
        "Embedded systems for communication devices, multimedia devices, home devicesand IoT devices. Real-time system expertise.",
      useCases: ["Mobile devices", "Home gateway", "Set top box", "Android/iOS"],
    },
    {
      icon: Blocks,
      title: "Blockchain",
      description:
        "Blockchain technology implementation, smart contract development, and decentralized application design. Experience with multiple blockchain platforms.",
      useCases: ["Smart contracts", "DApp development", "Token systems", "Blockchain integration"],
    },
  ]

  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Technical Expertise"
        subtitle="Deep technical knowledge across telecommunications, AI, and emerging technologies"
        imageSrc="/images/expertise.png"
        align="center"
        overlayStrength="medium"
      />

      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {expertiseAreas.map((area, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur border-white/10 hover:border-white/30 transition-all group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                      <p className="text-white/80 leading-relaxed mb-4">{area.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Examples</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.useCases.map((useCase, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
