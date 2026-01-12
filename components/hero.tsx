"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  title: string
  subtitle: string
  imageSrc?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  align?: "left" | "center"
  overlayStrength?: "light" | "medium" | "strong"
}

export function Hero({
  title,
  subtitle,
  imageSrc,
  primaryCta,
  secondaryCta,
  align = "left",
  overlayStrength = "medium",
}: HeroProps) {
  const overlayClasses = {
    light: "bg-[rgb(26,20,96)]/60",
    medium: "bg-[rgb(26,20,96)]/75",
    strong: "bg-[rgb(26,20,96)]/85",
  }

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  }

  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">

      {imageSrc ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt="Hero background"
              fill
              className="object-cover hero-scale-animation"
              priority
            />
            <div className={`absolute inset-0 ${overlayClasses[overlayStrength]}`} />
            <div className="absolute inset-0 hero-shimmer" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[rgb(26,20,96)] via-[rgb(40,30,120)] to-[rgb(26,20,96)]">
          <div className="absolute inset-0 hero-shimmer" />
        </div>
      )}

      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 flex flex-col ${alignmentClasses[align]} max-w-5xl`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance hero-fade-in-up">
          {title}
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl text-pretty hero-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div
            className={`flex flex-col sm:flex-row gap-4 hero-fade-in-up ${align === "center" ? "justify-center" : ""}`}
            style={{ animationDelay: "400ms" }}
          >
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-white text-[rgb(26,20,96)] hover:bg-white/90 font-semibold shadow-lg hover:scale-105 transition-all"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 bg-transparent hover:border-white transition-all"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
