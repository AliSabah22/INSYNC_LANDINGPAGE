"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, TrendingUp, Users, DollarSign, Eye } from 'lucide-react'
import Image from 'next/image'

interface PortfolioItem {
  id: string
  title: string
  client: string
  industry: string
  thumbnail: string
  results: {
    metric: string
    value: string
    icon: any
    color: string
  }[]
  description: string
  services: string[]
  duration: string
  budget: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'real-estate-youtube',
    title: 'Real Estate YouTube Channel Transformation',
    client: 'Elite Properties Group',
    industry: 'Real Estate',
    thumbnail: '/placeholder.jpg',
    results: [
      { metric: 'Subscriber Growth', value: '+847%', icon: TrendingUp, color: 'text-green-500' },
      { metric: 'Monthly Views', value: '+1,200%', icon: Eye, color: 'text-blue-500' },
      { metric: 'Lead Generation', value: '+450%', icon: Users, color: 'text-purple-500' },
      { metric: 'Revenue Increase', value: '+320%', icon: DollarSign, color: 'text-yellow-500' }
    ],
    description: 'Transformed a dormant YouTube channel into a lead generation powerhouse.',
    services: ['Video Production', 'Content Strategy', 'Channel Optimization'],
    duration: '6 months',
    budget: '$25K - $50K'
  },
  {
    id: 'consulting-content',
    title: 'High-Ticket Consulting Content Machine',
    client: 'Strategic Growth Partners',
    industry: 'Consulting',
    thumbnail: '/placeholder.jpg',
    results: [
      { metric: 'Content Output', value: '+300%', icon: TrendingUp, color: 'text-green-500' },
      { metric: 'Client Inquiries', value: '+280%', icon: Users, color: 'text-purple-500' },
      { metric: 'Average Deal Size', value: '+150%', icon: DollarSign, color: 'text-yellow-500' }
    ],
    description: 'Built a comprehensive content marketing system that positions the firm as thought leaders.',
    services: ['Content Strategy', 'Video Production', 'Social Media'],
    duration: '4 months',
    budget: '$10K - $25K'
  }
]

export default function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.industry.toLowerCase() === filter.toLowerCase())

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Portfolio of Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses with our proven content creation strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-royal-600/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedItem(item)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-royal-600/80 text-white">
                    {item.industry}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-royal-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {item.client} • {item.duration}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {item.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-lg font-bold ${result.color}`}>
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-500">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-400">
                  Budget: <span className="text-royal-400">{item.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 text-lg">
            Book Your Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
