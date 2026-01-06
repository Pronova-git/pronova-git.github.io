"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgb(26,20,96)]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo_yoko.png" alt="Pronova" width={240} height={60} className="h-14 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/expertise" className="text-white/80 hover:text-white transition-colors">
              Expertise
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/experience" className="text-white/80 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-white text-[rgb(26,20,96)] hover:bg-white/90 font-semibold"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeMobileMenu} />
      )}

      <div
        className={`fixed top-20 right-0 bottom-0 w-64 bg-[rgb(26,20,96)] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <Link
            href="/services"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/expertise"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Expertise
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="/experience"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <div className="border-t border-white/20 pt-6 flex flex-col gap-3">
            <Button asChild className="w-full bg-white text-[rgb(26,20,96)] hover:bg-white/90 font-semibold">
              <Link href="/contact" onClick={closeMobileMenu}>
                Talk to Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
