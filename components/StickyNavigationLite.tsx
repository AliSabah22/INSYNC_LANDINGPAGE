"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'

export default function StickyNavigationLite() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Free Strategy', id: 'lead-magnet' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-royal-600/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl md:text-3xl font-bold text-royal-600 cursor-pointer hover:scale-105 transition-transform duration-200">
              INSYNC
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <Link key={item.name} href={item.href}>
                  <button className="text-white hover:text-royal-400 transition-colors duration-200 font-medium hover:-translate-y-0.5">
                    {item.name}
                  </button>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-white hover:text-royal-400 transition-colors duration-200 font-medium hover:-translate-y-0.5"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-200"
              onClick={() => scrollToSection('lead-magnet')}
            >
              Free Strategy
            </Button>
            <Button
              className="bg-royal-600 hover:bg-royal-700 text-white px-6 py-2 transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-royal-600/30 transition-all duration-300">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                item.href ? (
                  <Link key={item.name} href={item.href}>
                    <button
                      className="block w-full text-left text-white hover:text-royal-400 transition-colors duration-200 px-4 py-2 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id!)}
                    className="block w-full text-left text-white hover:text-royal-400 transition-colors duration-200 px-4 py-2 font-medium"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-4 border-t border-royal-600/30 space-y-3 px-4">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                  onClick={() => scrollToSection('lead-magnet')}
                >
                  Free Strategy
                </Button>
                <Button
                  className="w-full bg-royal-600 hover:bg-royal-700 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Book Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
