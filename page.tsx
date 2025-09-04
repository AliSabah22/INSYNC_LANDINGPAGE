'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendlyEmbed } from "@/components/CalendlyEmbed"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import StickyNavigation from "@/components/StickyNavigation"
import LeadCaptureForm from "@/components/LeadCaptureForm"
import PortfolioGallery from "@/components/PortfolioGallery"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import FloatingCTA from "@/components/FloatingCTA"
import ScrollProgressBar from "@/components/ScrollProgressBar"
import TrustBadges from "@/components/TrustBadges"
import { useRef } from "react"

const Logo = () => <div className="text-2xl font-bold text-royal-600">INSYNC</div>

const professionals = [
  {
    name: "Emily Ford",
    role: "Real Estate Investor",
    image: "/placeholder.svg",
  },
  {
    name: "Cody Sperber",
    role: "Real Estate Expert",
    image: "/placeholder.svg",
  },
  {
    name: "Pace Morby",
    role: "Real Estate Educator",
    image: "/placeholder.svg",
  },
  {
    name: "Justin Werlein",
    role: "Entrepreneur",
    image: "/placeholder.svg",
  },
  {
    name: "John Smith",
    role: "Business Coach",
    image: "/placeholder.svg",
  },
  {
    name: "Robert Kiyosaki",
    role: "Financial Expert",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Johnson",
    role: "Marketing Consultant",
    image: "/placeholder.svg",
  },
  {
    name: "David Brown",
    role: "Investment Advisor",
    image: "/placeholder.svg",
  },
]

export default function Page() {
  const calendlyRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 z-20">
          <Logo />
        </div>
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/911%20classic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center">
          <ScrollAnimation>
            <h1 className="max-w-5xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Scale Your Business with Premium Content Creation & Lead Generation that Converts
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-6">
              From YouTube mastery to full-service content creation, we help entrepreneurs and high-ticket consultants
              generate qualified leads and scale to <span className="text-green-600">$1M+/Year</span>
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Button
              className="mt-6 bg-royal-600 hover:bg-royal-700 text-white px-6 py-4 text-base rounded-md"
              onClick={scrollToCalendly}
            >
              Get Your Custom Content Strategy
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Get Your Free Content Strategy Guide
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Download our proven 5-step framework and book a free strategy call to discover how we can help you scale your business with content.
            </p>
          </ScrollAnimation>
          <LeadCaptureForm
            variant="hero"
            title="Get Your Custom Content Strategy"
            subtitle="Download our free guide and book a strategy call"
            ctaText="Get Started Now"
          />
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-20 container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">INSYNC Has Worked With</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {professionals.map((professional, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    width={160}
                    height={160}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">{professional.name}</h3>
                <p className="text-gray-400 text-center">{professional.role}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Services Highlight Section */}
      <section id="services" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Accelerate Your Growth: Elite Content & Lead Generation Solutions
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "YouTube Mastery",
                items: [
                  "Professional Video Production",
                  "Strategic Content Planning",
                  "Thumbnail Optimization",
                  "Channel Growth Strategy",
                ],
              },
              {
                title: "Content Creation",
                items: ["Social Media Content", "Blog Writing & SEO", "Email Marketing", "Visual Content Design"],
              },
              {
                title: "Lead Generation",
                items: ["Funnel Optimization", "Lead Magnet Creation", "Conversion Strategy", "Analytics & Tracking"],
              },
            ].map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className="bg-black p-8 rounded-lg border border-royal-600">
                  <h3 className="text-xl font-bold mb-4 text-royal-600">{service.title}</h3>
                  <ul className="space-y-3 text-gray-300">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Your Complete Content & Lead Generation Solution
            </h2>
            <h4 className="text-xl md:text-2xl text-center mb-16">
              We handle every aspect of the process for you—everything except appearing in the videos you create.
            </h4>
          </ScrollAnimation>
          <div className="space-y-20">
            {[
              {
                step: 1,
                title: "Strategy & Content Planning",
                description:
                  "Our expert team develops your comprehensive content strategy across all platforms - YouTube, social media, blogs, and more. We identify your unique value proposition and create a content roadmap that attracts your ideal clients.",
                image: "/placeholder.svg",
              },
              {
                step: 2,
                title: "Premium Content Creation",
                description:
                  "Full-service content production including professional video filming, editing, thumbnail creation, blog writing, social media content, and more. We handle everything from scripting to final delivery, ensuring consistent, high-quality content that builds your authority.",
                image: "/placeholder.svg",
              },
              {
                step: 3,
                title: "Lead Generation & Optimization",
                description:
                  "Transform your content into a lead generation machine. We implement proven systems to capture and nurture leads, optimize your conversion funnel, and track results. From SEO to paid promotion, we ensure your content reaches and converts your target audience.",
                image: "/placeholder.svg",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-royal-600 flex items-center justify-center text-xl font-bold mr-4">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section id="testimonials" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          </ScrollAnimation>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-zinc-900" ref={calendlyRef}>
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Transform Your Content Strategy Today</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Book your free strategy session to discover how our full-service content creation and lead generation can
              help you attract premium clients and scale your business. We&apos;ll analyze your current strategy and create a
              custom plan to reach your revenue goals.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border border-royal-600">
              <CalendlyEmbed url="https://calendly.com/contact-insyncmarketing/30min" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black" ref={contactRef}>
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Get Started?</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a custom content strategy that drives real results for your business.
            </p>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <LeadCaptureForm
              variant="sidebar"
              title="Get Your Free Consultation"
              subtitle="Tell us about your project and we&apos;ll create a custom strategy"
              ctaText="Send Message & Book Call"
            />
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  )
}

