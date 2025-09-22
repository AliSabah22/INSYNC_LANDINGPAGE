'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRef, Suspense, lazy } from "react"
import { useExitIntent } from "@/hooks/useExitIntent"

// Dynamic imports for better code splitting
const CalendlyEmbed = lazy(() => import("@/components/CalendlyEmbed").then(module => ({ default: module.CalendlyEmbed })))
const ScrollAnimationLite = lazy(() => import("@/components/ScrollAnimationLite").then(module => ({ default: module.ScrollAnimationLite })))
const StickyNavigationLite = lazy(() => import("@/components/StickyNavigationLite"))
const TestimonialsCarouselLite = lazy(() => import("@/components/TestimonialsCarouselLite"))
const LeadMagnetForm = lazy(() => import("@/components/LeadMagnetForm"))
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"))
const FloatingCTA = lazy(() => import("@/components/FloatingCTA"))
const ScrollProgressBar = lazy(() => import("@/components/ScrollProgressBar"))

// Loading components for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-royal-600"></div>
  </div>
)

const VideoLoadingSkeleton = () => (
  <div className="aspect-[9/16] bg-zinc-900 rounded-lg animate-pulse">
    <div className="w-full h-full bg-zinc-800 rounded-lg"></div>
  </div>
)

const professionals = [
  {
    name: "Clasico Barbershop",
    role: "Men's Barbershop",
    image: "/placeholder.svg",
  },
  {
    name: "German auto meets",
    role: "Automotive car meetup",
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
  const leadMagnetRef = useRef<HTMLDivElement>(null)
  const { showExitIntent, closeExitIntent } = useExitIntent()

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToLeadMagnet = () => {
    leadMagnetRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Scroll Progress Bar */}
      <Suspense fallback={<div className="h-1 bg-zinc-800"></div>}>
      <ScrollProgressBar />
      </Suspense>

      {/* Sticky Navigation */}
      <Suspense fallback={<div className="h-16 bg-black border-b border-zinc-800"></div>}>
        <StickyNavigationLite />
      </Suspense>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* High-quality looping reel of best video production work */}
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/911%20classic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Suspense fallback={<div className="h-16 bg-zinc-800 animate-pulse rounded mb-6"></div>}>
            <ScrollAnimationLite>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                GTA's Premier Video Production Agency That Converts.
            </h1>
            </ScrollAnimationLite>
          </Suspense>
          <Suspense fallback={<div className="h-8 bg-zinc-800 animate-pulse rounded mb-8 max-w-4xl mx-auto"></div>}>
            <ScrollAnimationLite delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Serving Mississauga, Toronto, and the entire GTA with data-driven video production that gets results on social media, ads, and YouTube.
              </p>
            </ScrollAnimationLite>
          </Suspense>
          <Suspense fallback={<div className="flex gap-4 justify-center"><div className="h-12 w-32 bg-zinc-800 animate-pulse rounded"></div><div className="h-12 w-40 bg-zinc-800 animate-pulse rounded"></div></div>}>
            <ScrollAnimationLite delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
                  className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md transition-all duration-200 hover:scale-105"
              onClick={scrollToCalendly}
            >
                  Work With Us
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md transition-all duration-200 hover:scale-105"
                  onClick={scrollToLeadMagnet}
                >
                  Get Your Free Content Strategy
            </Button>
              </div>
            </ScrollAnimationLite>
          </Suspense>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Why Choose INSYNC?
            </h2>
          </ScrollAnimationLite>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: "🎯",
                title: "Data-Driven Results",
                description: "Every video we create is backed by analytics and optimized for maximum engagement and conversion rates."
              },
              {
                icon: "⚡",
                title: "Lightning Fast Turnaround",
                description: "Get your content delivered in record time without compromising on quality or attention to detail."
              },
              {
                icon: "🚀",
                title: "Proven Scale Systems",
                description: "Our clients have generated over $50M in revenue using our content and lead generation strategies."
              },
              {
                icon: "🎬",
                title: "Hollywood-Quality Production",
                description: "Professional-grade equipment, editing, and storytelling that makes your brand stand out."
              },
              {
                icon: "📈",
                title: "End-to-End Service",
                description: "From strategy to execution to optimization - we handle everything so you can focus on your business."
              },
              {
                icon: "💰",
                title: "ROI-Focused Approach",
                description: "We don't just create content - we create content that drives real business results and revenue."
              }
            ].map((item, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-zinc-900 rounded-lg border border-royal-600/30 hover:border-royal-600/60 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-royal-600">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimationLite>
            ))}
              </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Video Production Services for GTA Businesses
            </h2>
          </ScrollAnimationLite>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                title: "Social Media Video Production",
                description: "High-converting video content for TikTok, Instagram, LinkedIn, and Facebook that drives engagement and leads.",
                features: ["Platform-optimized content", "Trending audio integration", "Engagement-focused editing", "Performance tracking"],
                cta: "Let's Talk Results"
              },
              {
                title: "Product & Commercial Ads",
                description: "Professional commercial videos and product showcases that convert viewers into customers and drive sales.",
                features: ["Professional cinematography", "Compelling storytelling", "Conversion optimization", "A/B testing"],
                cta: "Let's Talk Results"
              },
              {
                title: "YouTube Video Production",
                description: "Complete YouTube channel management from strategy to execution, helping you build authority and generate leads.",
                features: ["Channel strategy", "SEO optimization", "Thumbnail design", "Analytics tracking"],
                cta: "Let's Talk Results"
              }
            ].map((service, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.2}>
                <div className="bg-black p-8 rounded-lg border border-royal-600/30 hover:border-royal-600/60 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-royal-600">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-royal-600 hover:bg-royal-700 text-white transition-all duration-200 hover:scale-105"
                    onClick={scrollToCalendly}
                  >
                    {service.cta}
                  </Button>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* Most Recent Work Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Most Recent Work
            </h2>
          </ScrollAnimationLite>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {[
              {
                title: "Red Nissan GTR",
                client: "Automotive Client",
                industry: "Automotive",
                videoUrl: "/portfolio/RED NISSAN GTR.mov",
                description: "High-performance car showcase and review featuring stunning cinematography and dynamic angles",
                results: "Video reached 100K+ views in first week"
              },
              {
                title: "Porsche Showcase",
                client: "Automotive Client", 
                industry: "Automotive",
                videoUrl: "/portfolio/peekabo-porschsue.mp4",
                description: "Luxury car showcase with premium presentation and professional editing",
                results: "Generated 75K+ views and high engagement"
              }
            ].map((video, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.2}>
                <div className="bg-black rounded-lg overflow-hidden border border-royal-600/30 hover:border-royal-600/60 transition-all duration-300">
                  <div className="aspect-[4/5] relative">
                    <video
                      className="w-full h-full object-contain"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      <source src={video.videoUrl} type="video/quicktime" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-300">{video.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-royal-600 font-semibold">{video.results}</span>
                      <Button
                        size="sm"
                        className="bg-royal-600 hover:bg-royal-700 text-white"
                        onClick={() => window.open('/portfolio', '_blank')}
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Case Studies
            </h2>
          </ScrollAnimationLite>
          <div className="space-y-12 sm:space-y-16">
            {[
              {
                client: "Abu Zulof Restaurant",
                challenge: "Low social media engagement and need to showcase authentic Middle Eastern cuisine",
                solution: "Created compelling food content showcasing traditional dishes and restaurant atmosphere",
                results: [
                  { metric: "Social Media Engagement", value: "+300%", color: "text-green-500" },
                  { metric: "Restaurant Reservations", value: "+200%", color: "text-blue-500" },
                  { metric: "Brand Awareness", value: "+400%", color: "text-purple-500" }
                ],
                testimonial: "INSYNC helped us showcase our authentic cuisine beautifully. Our social media engagement tripled and reservations increased dramatically.",
                videoUrl: "/portfolio/Rooted in heritage, served with heart. Experience authentic flavors at Abu Zulof.mp4"
              },
              {
                client: "Automotive Business",
                challenge: "Low engagement on social media and poor brand awareness",
                solution: "Developed viral car meetup content strategy with community building",
                results: [
                  { metric: "Instagram Followers", value: "2K → 50K", color: "text-green-500" },
                  { metric: "Event Attendance", value: "+300%", color: "text-blue-500" },
                  { metric: "Brand Partnerships", value: "15+ deals", color: "text-purple-500" }
                ],
                testimonial: "Our car meetups went from 50 people to 500+ attendees. The content strategy completely changed our business.",
                videoUrl: "/portfolio/RED NISSAN GTR.mov"
              }
            ].map((caseStudy, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.3}>
                <div className="bg-zinc-900 rounded-lg p-8 border border-royal-600/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-royal-600">{caseStudy.client}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                          <p className="text-gray-300">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Solution:</h4>
                          <p className="text-gray-300">{caseStudy.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Results:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {caseStudy.results.map((result, idx) => (
                              <div key={idx} className="text-center">
                                <div className={`text-lg font-bold ${result.color}`}>{result.value}</div>
                                <div className="text-sm text-gray-400">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                  </div>
                    <div className="flex flex-col justify-center">
                      <blockquote className="text-lg italic text-gray-300 mb-6 leading-relaxed">
                        "{caseStudy.testimonial}"
                      </blockquote>
                      <div className="relative w-full h-48">
                        <video
                          className="w-full h-full object-cover rounded-lg"
                          muted
                          loop
                          playsInline
                          autoPlay
                          preload="metadata"
                        >
                          <source src={caseStudy.videoUrl} type="video/mp4" />
                          <source src={caseStudy.videoUrl} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tool Section */}
      <section id="lead-magnet" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900" ref={leadMagnetRef}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
              Your Free AI-Powered Content Strategy
            </h2>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Not sure where to start? Tell us about your business, and we'll instantly generate a tailored content strategy for you—free.
            </p>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.4}>
            <div className="flex justify-center">
              <Suspense fallback={<div className="w-full max-w-md h-96 bg-zinc-800 animate-pulse rounded-lg"></div>}>
                <LeadMagnetForm />
              </Suspense>
            </div>
          </ScrollAnimationLite>
        </div>
      </section>

      {/* Local Business Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Serving the Greater Toronto Area
            </h2>
          </ScrollAnimationLite>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: "Mississauga", description: "Our home base - serving local businesses with premium video production" },
              { city: "Toronto", description: "Downtown and surrounding areas - comprehensive content marketing solutions" },
              { city: "Brampton", description: "Growing businesses with scalable video marketing strategies" },
              { city: "Vaughan", description: "Professional video production for established enterprises" }
            ].map((location, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-black rounded-lg border border-royal-600/30">
                  <h3 className="text-xl font-bold mb-3 text-royal-600">{location.city}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{location.description}</p>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              About INSYNC Productions - Mississauga's Video Marketing Experts
            </h2>
          </ScrollAnimationLite>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <ScrollAnimationLite delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-royal-600">Our Story</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Based in Mississauga, Ontario, INSYNC Productions was founded by content creators who understand the unique needs of GTA businesses. We believe every business in the Greater Toronto Area deserves content that converts and drives real results.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We've worked with over 200+ entrepreneurs across Mississauga, Toronto, Brampton, Vaughan, and the entire GTA, helping them generate millions in revenue through strategic content creation and lead generation systems.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-royal-600 mb-2">200+</div>
                    <div className="text-gray-400">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-royal-600 mb-2">$50M+</div>
                    <div className="text-gray-400">Revenue Generated</div>
                  </div>
                </div>
              </div>
            </ScrollAnimationLite>
            <ScrollAnimationLite delay={0.4}>
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="INSYNC Productions Team"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </ScrollAnimationLite>
          </div>
            </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              What Our Clients Say
            </h2>
          </ScrollAnimationLite>
          <Suspense fallback={<LoadingSpinner />}>
            <TestimonialsCarouselLite />
          </Suspense>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24" ref={calendlyRef}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Ready to Scale Your Business with Content?
            </h2>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 200+ entrepreneurs who've transformed their businesses with our data-driven video production and lead generation systems.
            </p>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
              <Button
                className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-lg transition-all duration-200 hover:scale-105"
                onClick={scrollToCalendly}
              >
                Book Your Free Strategy Call
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-lg transition-all duration-200 hover:scale-105"
                onClick={scrollToLeadMagnet}
              >
                Get Free Content Strategy
              </Button>
            </div>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.6}>
            <div className="max-w-5xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border border-royal-600">
              <Suspense fallback={<div className="h-96 bg-zinc-800 animate-pulse rounded-lg"></div>}>
                <CalendlyEmbed url="https://calendly.com/contact-insyncmarketing/30min" />
              </Suspense>
          </div>
          </ScrollAnimationLite>
        </div>
      </section>

      {/* Floating CTA */}
      <Suspense fallback={null}>
      <FloatingCTA />
      </Suspense>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <Suspense fallback={null}>
          <ExitIntentPopup onClose={closeExitIntent} />
        </Suspense>
      )}
    </main>
  )
}

