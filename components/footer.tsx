import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[rgb(26,20,96)] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pronova</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-2">Yokosuka, Japan</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Your bridge to the Japanese market through strategic consulting and advanced technology solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-white/70 hover:text-white transition-colors text-sm">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-white/70 hover:text-white transition-colors text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Pronova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
