"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LeadMagnetFormProps {
  variant?: "default" | "compact"
  onSuccess?: () => void
}

export default function LeadMagnetForm({ variant = "default", onSuccess }: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    niche: "",
    notes: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      console.log("Form submitted successfully:", result)
      
      setIsSubmitted(true)
      onSuccess?.()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Strategy Submitted!</h3>
        <p className="text-gray-300 mb-4">
          Thank you for your submission! You'll receive your personalized content strategy within 1 day via email.
        </p>
        <Button
          className="bg-royal-600 hover:bg-royal-700 text-white"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", businessType: "", niche: "", notes: "" })
          }}
        >
          Generate Another Strategy
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${variant === "compact" ? "max-w-md" : "max-w-lg"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-white">Name *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-black/50 border-royal-600 text-white placeholder-gray-400 focus:border-royal-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-white">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-black/50 border-royal-600 text-white placeholder-gray-400 focus:border-royal-400"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white">Business Type *</Label>
        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
          <SelectTrigger className="bg-black/50 border-royal-600 text-white focus:border-royal-400">
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent className="bg-black border-royal-600">
            <SelectItem value="coach" className="text-white hover:bg-royal-600">Online Coach</SelectItem>
            <SelectItem value="consultant" className="text-white hover:bg-royal-600">Business Consultant</SelectItem>
            <SelectItem value="agency" className="text-white hover:bg-royal-600">Marketing Agency</SelectItem>
            <SelectItem value="ecommerce" className="text-white hover:bg-royal-600">E-commerce</SelectItem>
            <SelectItem value="saas" className="text-white hover:bg-royal-600">SaaS/Software</SelectItem>
            <SelectItem value="real-estate" className="text-white hover:bg-royal-600">Real Estate</SelectItem>
            <SelectItem value="healthcare" className="text-white hover:bg-royal-600">Healthcare</SelectItem>
            <SelectItem value="fitness" className="text-white hover:bg-royal-600">Fitness/Wellness</SelectItem>
            <SelectItem value="finance" className="text-white hover:bg-royal-600">Finance/Investment</SelectItem>
            <SelectItem value="other" className="text-white hover:bg-royal-600">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="niche" className="text-white">Your Niche/Industry *</Label>
        <Input
          id="niche"
          type="text"
          required
          value={formData.niche}
          onChange={(e) => handleInputChange("niche", e.target.value)}
          className="bg-black/50 border-royal-600 text-white placeholder-gray-400 focus:border-royal-400"
          placeholder="e.g., Personal Development, Tech, Real Estate"
        />
      </div>
      
      <div>
        <Label htmlFor="notes" className="text-white">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
          className="bg-black/50 border-royal-600 text-white placeholder-gray-400 focus:border-royal-400 resize-none"
          placeholder="Tell us more about your business goals, current challenges, or specific content needs..."
          rows={3}
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-royal-600 hover:bg-royal-700 text-white py-3 text-lg font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
      >
        {isSubmitting ? "Generating Your Strategy..." : "Get My Free AI Strategy"}
      </Button>
      
      <p className="text-xs text-gray-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}
