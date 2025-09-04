"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'
import { Download, Calendar, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface LeadFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  budget: string
  projectType: string
  timeline: string
  description: string
  leadMagnet: string
  newsletter: boolean
  strategyCall: boolean
}

export default function LeadCaptureForm({ 
  variant = 'hero',
  title = "Get Your Custom Content Strategy",
  subtitle = "Download our free guide and book a strategy call",
  ctaText = "Get Started Now"
}: {
  variant?: 'hero' | 'sidebar' | 'popup'
  title?: string
  subtitle?: string
  ctaText?: string
}) {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    budget: '',
    projectType: '',
    timeline: '',
    description: '',
    leadMagnet: 'strategy-guide',
    newsletter: true,
    strategyCall: true
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const leadMagnets = [
    {
      id: 'strategy-guide',
      title: 'Content Strategy Guide',
      description: '5-step framework to scale your business with content',
      icon: Download
    },
    {
      id: 'case-studies',
      title: 'Client Case Studies',
      description: 'Real results from our top-performing clients',
      icon: Download
    },
    {
      id: 'content-calendar',
      title: 'Content Calendar Template',
      description: '90-day content planning framework',
      icon: Calendar
    }
  ]

  const handleInputChange = (field: keyof LeadFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Handle form submission
      console.log('Form submitted:', formData)
      
      // Show success state
      setIsSuccess(true)
      toast.success('Thank you! Check your email for your free resources.')
      
      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          budget: '',
          projectType: '',
          timeline: '',
          description: '',
          leadMagnet: 'strategy-guide',
          newsletter: true,
          strategyCall: true
        })
      }, 5000)
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-4">
          Your free resources are on their way to your email.
        </p>
        <p className="text-gray-400 text-sm">
          We'll also reach out within 24 hours to schedule your strategy call.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`${
        variant === 'hero' 
          ? 'max-w-2xl mx-auto bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-royal-600/30'
          : variant === 'sidebar'
          ? 'bg-zinc-900 rounded-lg p-6 border border-royal-600/30'
          : 'bg-white text-black rounded-lg p-6 shadow-xl'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
          variant === 'popup' ? 'text-black' : 'text-white'
        }`}>
          {title}
        </h2>
        <p className={`text-lg ${
          variant === 'popup' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Lead Magnet Selection */}
        <div>
          <label className={`block text-sm font-medium mb-3 ${
            variant === 'popup' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Choose Your Free Resource
          </label>
          <div className="grid gap-3">
            {leadMagnets.map((magnet) => (
              <label
                key={magnet.id}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                  formData.leadMagnet === magnet.id
                    ? 'border-royal-600 bg-royal-600/10'
                    : variant === 'popup'
                    ? 'border-gray-200 hover:border-royal-400'
                    : 'border-gray-600 hover:border-royal-400'
                }`}
              >
                <input
                  type="radio"
                  name="leadMagnet"
                  value={magnet.id}
                  checked={formData.leadMagnet === magnet.id}
                  onChange={(e) => handleInputChange('leadMagnet', e.target.value)}
                  className="mr-3"
                />
                <magnet.icon className={`w-5 h-5 mr-3 ${
                  variant === 'popup' ? 'text-royal-600' : 'text-royal-400'
                }`} />
                <div className="text-left">
                  <div className={`font-medium ${
                    variant === 'popup' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {magnet.title}
                  </div>
                  <div className={`text-sm ${
                    variant === 'popup' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {magnet.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Input
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
              <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                <SelectItem value="50k+">$50K+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
              <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                <SelectValue placeholder="Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-2-months">1-2 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-months+">6+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Tell us about your project and goals..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={3}
            className="bg-white/10 border-gray-600 text-white placeholder-gray-400 resize-none"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <Checkbox
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
              className="border-gray-600 data-[state=checked]:bg-royal-600"
            />
            <span className="text-sm text-gray-300">
              Send me weekly content marketing tips and industry insights
            </span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer">
            <Checkbox
              checked={formData.strategyCall}
              onCheckedChange={(checked) => handleInputChange('strategyCall', checked as boolean)}
              className="border-gray-600 data-[state=checked]:bg-royal-600"
            />
            <span className="text-sm text-gray-300">
              Schedule a free 30-minute strategy call to discuss my project
            </span>
          </label>
        </div>

        {/* CTA Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-royal-600 hover:bg-royal-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </motion.div>
  )
}
