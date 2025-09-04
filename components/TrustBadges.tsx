"use client"

import { motion } from 'framer-motion'
import { Shield, Award, Users, CheckCircle, Star, Zap } from 'lucide-react'
import Image from 'next/image'

const trustBadges = [
  {
    icon: Shield,
    title: 'Certified Partner',
    description: 'Google Ads & Meta Business Partner',
    color: 'text-blue-500'
  },
  {
    icon: Award,
    title: 'Award Winner',
    description: 'Best Content Agency 2024',
    color: 'text-yellow-500'
  },
  {
    icon: Users,
    title: '500+ Clients',
    description: 'Served across 25+ industries',
    color: 'text-green-500'
  },
  {
    icon: CheckCircle,
    title: '100% Satisfaction',
    description: 'Guaranteed results or money back',
    color: 'text-purple-500'
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: '4.9/5 average client rating',
    color: 'text-orange-500'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'See improvements in 30 days',
    color: 'text-red-500'
  }
]

const clientLogos = [
  { name: 'Google', logo: '/placeholder-logo.png' },
  { name: 'Meta', logo: '/placeholder-logo.png' },
  { name: 'HubSpot', logo: '/placeholder-logo.png' },
  { name: 'Mailchimp', logo: '/placeholder-logo.png' },
  { name: 'Shopify', logo: '/placeholder-logo.png' },
  { name: 'Salesforce', logo: '/placeholder-logo.png' }
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our track record speaks for itself. We've earned the trust of major platforms and hundreds of successful businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${badge.color}`}>
                <badge.icon className="w-full h-full" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-400">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-300 mb-6">
            Official Partners & Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={80}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '$50M+', label: 'Revenue Generated' },
            { number: '95%', label: 'Client Retention' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-royal-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
