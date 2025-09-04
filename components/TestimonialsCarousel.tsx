"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Quote, Star } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  videoUrl?: string
  quote: string
  rating: number
  results: {
    metric: string
    value: string
    color: string
  }[]
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Elite Properties Group',
    image: '/placeholder-user.jpg',
    videoUrl: '/assets/911 classic.mp4',
    quote: 'InSync transformed our YouTube presence from zero to hero. We\'re now generating 50+ qualified leads monthly and our revenue has increased by 320% in just 6 months!',
    rating: 5,
    results: [
      { metric: 'Lead Generation', value: '+450%', color: 'text-green-500' },
      { metric: 'Revenue Growth', value: '+320%', color: 'text-blue-500' },
      { metric: 'Brand Authority', value: '+600%', color: 'text-purple-500' }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Strategic Growth Partners',
    image: '/placeholder-user.jpg',
    quote: 'The team at InSync is simply amazing. They\'ve helped us create engaging content that resonates with our audience and drives real results. Our consulting business has scaled to $2M+ annually.',
    rating: 5,
    results: [
      { metric: 'Client Inquiries', value: '+280%', color: 'text-green-500' },
      { metric: 'Average Deal Size', value: '+150%', color: 'text-blue-500' },
      { metric: 'Content Output', value: '+300%', color: 'text-purple-500' }
    ]
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    role: 'Marketing Director',
    company: 'TechGear Pro',
    image: '/placeholder-user.jpg',
    quote: 'Working with InSync has been a game-changer for our marketing efforts. Their end-to-end process ensures high-quality content and measurable ROI. We\'ve seen conversion rates increase by 180%.',
    rating: 5,
    results: [
      { metric: 'Conversion Rate', value: '+180%', color: 'text-green-500' },
      { metric: 'ROAS', value: '8.5x', color: 'text-blue-500' },
      { metric: 'Customer LTV', value: '+220%', color: 'text-purple-500' }
    ]
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Display */}
          <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-royal-600/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left Side - Image/Video */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover w-full h-full"
                  />
                  {testimonials[currentIndex].videoUrl && (
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-royal-400 mx-auto md:mx-0 mb-4" />
                  
                  <blockquote className="text-lg md:text-xl text-white mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-royal-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {testimonials[currentIndex].results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold ${result.color}`}>
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-royal-600 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to See These Results for Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom content strategy that drives real results for your business.
          </p>
          <button className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105">
            Book Your Free Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
