"use client"

import type React from "react"

import { Hero } from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Shield } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
/* Comment out for Web2Forms migration
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Thank you for your message! We will get back to you soon.")
      setFormData({ name: "", company: "", email: "", message: "" })
      setErrors({})
    }
  }
  */
 /* Addition for Web3Forms migration */
  const WEB3FORMS_ACCESS_KEY = "fc5a2afc-1437-40ed-973f-5b38efea0495" // ←ここに入れる

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return
    setSubmitStatus("idle")
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY") {
      alert("Web3Forms access key is not set.")
      return
    }

    try {
      setIsSubmitting(true)

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New inquiry from pronova-lab.com",
        from_name: "Pronova Website",
        name: formData.name,
        company: formData.company,
        email: formData.email,
        message: formData.message,
        // bot対策（任意・後述）
        // botcheck: "",
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", company: "", email: "", message: "" })
        setErrors({})
      } else {
        console.error("Web3Forms error:", data)
        setSubmitStatus("error")
      }
    } catch (err) {
      console.error(err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
/* end of addition */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <main className="min-h-screen bg-[rgb(26,20,96)]">
      <Hero
        title="Contact Us"
        subtitle="Let's discuss how we can help you succeed in Japan"
        align="center"
        overlayStrength="medium"
      />

      <section className="py-16 lg:py-24 bg-[rgb(26,20,96)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you're exploring the Japanese market or need technical expertise, we're here to help. Fill out
                  the form and we'll get back to you within 24 hours.
                </p>
              </div>

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
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-white/70">Contact us via the form</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Confidentiality</h3>
                      <p className="text-white/70">
                        All communications are treated with strict confidentiality. We respect your privacy and business
                        information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white/5 backdrop-blur border-white/10">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

{/*  Delete 
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-[rgb(26,20,96)] hover:bg-white/90 font-semibold"
                    >
                      Send Message
                    </Button>
*/}
{/* Addition for Web3Forms migration */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[rgb(26,20,96)] hover:bg-white/90 font-semibold disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-green-300 text-sm text-center" aria-live="polite">
                        Thank you! Your message has been sent.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-300 text-sm text-center">
                      Sorry, something went wrong. Please try again later.
                      </p>
                    )}           
{/* end of addition */}

                    <p className="text-white/60 text-sm text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-white">
                        privacy policy
                      </a>.
                    </p>

                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
