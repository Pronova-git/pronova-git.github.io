import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pronova - Your Bridge to the Japanese Market",
  description:
    "Pronova supports global companies entering and growing in Japan through strategic consulting and advanced technology solutions.",
  generator: "v0.app",

  // ✅ Search Console verification
  verification: {
    google: "yUUe0MrGJscSTgHd6mlPOMR4Rf4AFMmOGNaftciZ7nM",
  },

  // ✅ Favicon / icons
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },

  // ✅ manifest
  manifest: "/favicon/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "rgb(26, 20, 96)",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WT63VSHJPS"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WT63VSHJPS', { anonymize_ip: true });
          `}
        </Script>

        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
