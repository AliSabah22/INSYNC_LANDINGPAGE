"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Calendar, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show floating CTA after scrolling 50% of the page
      if (scrollY > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setIsExpanded(false)
    }
  }

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly')
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' })
      setIsExpanded(false)
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40"
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="collapsed"
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 bg-royal-600 hover:bg-royal-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="w-6 h-6" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            className="bg-black/95 backdrop-blur-sm rounded-2xl p-6 border border-royal-600/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Get Started Today</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={scrollToCalendly}
                className="w-full bg-royal-600 hover:bg-royal-700 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Strategy Call
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-royal-600 text-royal-400 hover:bg-royal-600 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Custom Quote
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 text-center mt-3">
              No commitment required
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
