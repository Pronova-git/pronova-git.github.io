import { Hero } from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code, LineChart, Users, Globe2, Bot, Eye, Database } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Pronova",
  description: "Japan market entry consulting and software & AI development services.",
}

export default function ServicesPage() {
  const consultingServices = [
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Strategic planning and market entry support for the Japanese market",
    },
    {
      icon: LineChart,
      title: "Marketing and Sales Support",
      description: "Localized marketing strategies and sales enablement for Japan",
    },
    {
      icon: Users,
      title: "Technical Advisory",
      description: "Technical communication support and advisory services",
    },
    {
      icon: Globe2,
      title: "Japan Entity Setup",
      description: "Entity setup support with professional partners",
    },
  ]

  const developmentServices = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Modern web and mobile applications with cutting-edge frameworks",
    },
    {
      icon: Database,
      title: "Backend & Full-Stack",
      description: "Scalable backend systems and full-stack solutions",
    },
    {
      icon: Bot,
      title: "Generative & Agentic AI",
      description: "Advanced AI solutions including generative and agentic AI systems",
    },
    {
      icon: Eye,
      title: "Computer Vision & Predictive AI",
      description: "Computer vision and predictive AI implementations",
    },
  ]

  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Services"
        subtitle="Comprehensive consulting and technology solutions to help you succeed in Japan"
        imageSrc="/images/japan_market_entry.png"
        align="center"
        overlayStrength="medium"
      />

      {/* Japan Market Entry Section */}
      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Japan Market Entry & Consulting</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Strategic guidance and hands-on support for companies entering the Japanese market
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {consultingServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur border-white/10 hover:border-white/30 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software & AI Development Section */}
      <section className="py-16 lg:py-24 bg-[rgb(40,30,120)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Software & AI Development</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Production-ready software and AI solutions built with modern technologies
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {developmentServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur border-white/10 hover:border-white/30 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
