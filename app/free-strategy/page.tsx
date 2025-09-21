'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollAnimationLite } from "@/components/ScrollAnimationLite"
import LeadMagnetForm from "@/components/LeadMagnetForm"
import Link from "next/link"

export default function FreeStrategyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSuccess = () => {
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            <Link href="/">
              <div className="text-2xl sm:text-3xl font-bold text-royal-600 cursor-pointer hover:scale-105 transition-transform duration-200 inline-block">
                INSYNC
              </div>
            </Link>
          </div>

          <div className="text-center">
            <ScrollAnimationLite>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                Get Your Free AI-Powered Content Strategy
              </h1>
            </ScrollAnimationLite>
            
            <ScrollAnimationLite delay={0.2}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Not sure where to start? Tell us about your business, and we'll instantly generate a tailored content strategy for you—completely free.
              </p>
            </ScrollAnimationLite>

            <ScrollAnimationLite delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
                <div className="flex items-center text-sm sm:text-base text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Takes 2 minutes
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100% Free
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant Results
                </div>
              </div>
            </ScrollAnimationLite>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 md:p-12 border border-royal-600/30">
              <ScrollAnimationLite>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
                  Get Your Personalized Strategy
                </h2>
              </ScrollAnimationLite>
              
              <ScrollAnimationLite delay={0.2}>
                <p className="text-center text-gray-300 mb-8">
                  Fill out the form below and receive your custom content strategy instantly.
                </p>
              </ScrollAnimationLite>

              <ScrollAnimationLite delay={0.4}>
                <LeadMagnetForm onSuccess={handleSuccess} />
              </ScrollAnimationLite>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
              What You'll Get in Your Strategy
            </h2>
          </ScrollAnimationLite>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: "🎯",
                title: "Platform-Specific Strategy",
                description: "Custom recommendations for YouTube, TikTok, Instagram, and LinkedIn based on your business type."
              },
              {
                icon: "📈",
                title: "Content Calendar Template",
                description: "A 30-day content calendar with specific topics and posting schedules optimized for your niche."
              },
              {
                icon: "🎥",
                title: "Video Content Ideas",
                description: "20+ video concepts tailored to your audience and business goals with engagement hooks."
              },
              {
                icon: "📊",
                title: "Performance Metrics",
                description: "Key metrics to track and benchmarks to aim for based on your industry and business size."
              },
              {
                icon: "🚀",
                title: "Growth Acceleration Tips",
                description: "Proven strategies to scale your content and reach more qualified leads faster."
              },
              {
                icon: "💰",
                title: "Monetization Roadmap",
                description: "Step-by-step guide to turn your content into revenue streams and client acquisition."
              }
            ].map((benefit, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-black rounded-lg border border-royal-600/30">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-royal-600">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
              Join 500+ Entrepreneurs Who've Transformed Their Content
            </h2>
          </ScrollAnimationLite>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                quote: "This strategy helped me go from 0 to 50K followers in 6 months and generate $100K in revenue.",
                author: "Sarah M.",
                role: "Online Coach"
              },
              {
                quote: "The content calendar was a game-changer. I finally have a clear direction and my engagement is up 300%.",
                author: "Mike R.",
                role: "Business Consultant"
              },
              {
                quote: "I was struggling with what to post. Now I have 30 days of content ideas that actually convert.",
                author: "Jessica L.",
                role: "Fitness Entrepreneur"
              }
            ].map((testimonial, index) => (
              <ScrollAnimationLite key={index} delay={index * 0.2}>
                <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg border border-royal-600/30">
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-royal-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Ready to Transform Your Content Strategy?
            </h2>
          </ScrollAnimationLite>
          
          <ScrollAnimationLite delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Get your free AI-powered content strategy in just 2 minutes. No strings attached, no hidden fees.
            </p>
          </ScrollAnimationLite>

          <ScrollAnimationLite delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-lg transition-all duration-200 hover:scale-105"
                onClick={() => {
                  const formSection = document.querySelector('form')
                  formSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get My Free Strategy Now
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </ScrollAnimationLite>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-royal-600/30">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 INSYNC Productions. All rights reserved. | 
            <Link href="/" className="text-royal-400 hover:text-royal-300 ml-1">Back to Home</Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
