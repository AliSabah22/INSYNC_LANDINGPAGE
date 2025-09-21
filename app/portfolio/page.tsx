'use client'

import { Button } from "@/components/ui/button"
import { useRef, useState, Suspense, lazy, useEffect } from "react"
import Link from "next/link"
import { useExitIntent } from "@/hooks/useExitIntent"
import { X } from "lucide-react"

// Dynamic imports for better performance
const ScrollAnimationLite = lazy(() => import("@/components/ScrollAnimationLite").then(module => ({ default: module.ScrollAnimationLite })))
const StickyNavigationLite = lazy(() => import("@/components/StickyNavigationLite"))
const ScrollProgressBar = lazy(() => import("@/components/ScrollProgressBar"))
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"))


const portfolioVideos = [
  {
    id: 1,
    title: "Turkish Cuisine",
    client: "Istanbul Pasha Kebab",
    industry: "Restaurant",
    videoUrl: "/portfolio/turkish-cuisine.mp4",
    description: "Showcasing authentic Turkish cuisine with sizzling sac kavurma preparation",
    results: "Increased social media engagement by 300%"
  },
  {
    id: 2,
    title: "Heritage Restaurant",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/Rooted in heritage, served with heart. Experience authentic flavors at Abu Zulof.mp4",
    description: "Highlighting the restaurant's heritage and authentic flavors",
    results: "Generated 50K+ views and 200+ reservations"
  },
  {
    id: 3,
    title: "Night Experience",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/One thing about usWe don't do regular nights.We do unforgettable chaos, good music, better food,.mp4",
    description: "Creating an atmosphere of unforgettable nights with music and food",
    results: "Boosted event bookings by 150%"
  },
  {
    id: 4,
    title: "F1 Week Special",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/Fuel your appetite like an F1 engine 🏎️🔥 This F1 Week, shift gears and race to Abu El Zulof fo.mp4",
    description: "F1-themed promotional content during race week",
    results: "Increased foot traffic by 200% during F1 week"
  },
  {
    id: 5,
    title: "Grilled Fillet Mignon",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/Feasting on perfection- Grilled fillet mignon at Abu El Zulof. A taste of luxury on every bite! .mp4",
    description: "Premium dish showcase highlighting luxury dining experience",
    results: "Premium dish sales increased by 180%"
  },
  {
    id: 6,
    title: "Family Events",
    client: "Restaurant Beroya",
    industry: "Event Venue",
    videoUrl: "/portfolio/Découvrez le lieu idéal pour célébrer vos événements familiaux - le Restaurant Beroya. Nous vous.mp4",
    description: "Promoting family event hosting capabilities",
    results: "Event bookings increased by 120%"
  },
  {
    id: 7,
    title: "Eggplant Moutabal",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/Crispy on the outside, smoky and creamy on the inside — our eggplant moutabal is not just a dip,.mp4",
    description: "Authentic Middle Eastern appetizer preparation",
    results: "Appetizer orders increased by 90%"
  },
  {
    id: 8,
    title: "Bassar Cocktails",
    client: "Bassar Bar",
    industry: "Bar & Lounge",
    videoUrl: "/portfolio/bassar-cocktails.mp4",
    description: "Signature cocktail showcase with elegant presentation",
    results: "Cocktail sales increased by 250%"
  },
  {
    id: 9,
    title: "Unforgettable Night",
    client: "Abu Zulof Restaurant",
    industry: "Fine Dining",
    videoUrl: "/portfolio/An unforgettable night filled with delicious food, vibrant dancing, and incredible energy! 🍽️💃.mp4",
    description: "Capturing the vibrant atmosphere and entertainment",
    results: "Weekend reservations increased by 300%"
  },
  {
    id: 10,
    title: "La Notte Restaurant",
    client: "La Notte Restaurant",
    industry: "Italian Restaurant",
    videoUrl: "/portfolio/A delicious dish and an amazing vibe at La Notte! 😋✨🍝 The perfect spot for a night to remember.mp4",
    description: "Italian dining experience with perfect ambiance",
    results: "Customer retention increased by 150%"
  },
  {
    id: 11,
    title: "Contest Promotion",
    client: "Restaurant Beroya",
    industry: "Event Venue",
    videoUrl: "/portfolio/🎁 💫CONCOURS EN COURS💫🎁🎁Le Cadeau le Plus Savoureux de la Semaine !\"Thé chaud, saveurs fraîc.mp4",
    description: "French contest promotion for customer engagement",
    results: "Social media followers increased by 400%"
  },
  {
    id: 12,
    title: "Istanbul Pasha Kebab",
    client: "Istanbul Pasha Kebab",
    industry: "Restaurant",
    videoUrl: "/portfolio/✨ Now Open- Istanbul Pasha Kebab ✨Get ready to experience the authentic flavors of Turkey in the.mp4",
    description: "Grand opening announcement with authentic Turkish flavors",
    results: "Opening week sales exceeded expectations by 200%"
  },
  {
    id: 13,
    title: "Red Nissan GTR",
    client: "Automotive Client",
    industry: "Automotive",
    videoUrl: "/portfolio/RED NISSAN GTR.mov",
    description: "High-performance car showcase and review",
    results: "Video reached 100K+ views in first week"
  },
  {
    id: 14,
    title: "Porsche Showcase",
    client: "Automotive Client",
    industry: "Automotive",
    videoUrl: "/portfolio/peekabo-porschsue.mp4",
    description: "Luxury car showcase with premium presentation",
    results: "Generated 75K+ views and high engagement"
  }
]

export default function PortfolioPage() {
  const calendlyRef = useRef<HTMLDivElement>(null)
  const { showExitIntent, closeExitIntent } = useExitIntent()
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioVideos[0] | null>(null)
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set())
  const [videoLoading, setVideoLoading] = useState<Set<number>>(new Set())

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const openVideoPopup = (video: typeof portfolioVideos[0]) => {
    setSelectedVideo(video)
  }

  const closeVideoPopup = () => {
    setSelectedVideo(null)
  }

  const handleVideoError = (videoId: number) => {
    setVideoErrors(prev => new Set(prev).add(videoId))
    setVideoLoading(prev => {
      const newSet = new Set(prev)
      newSet.delete(videoId)
      return newSet
    })
  }

  const handleVideoLoadStart = (videoId: number) => {
    setVideoLoading(prev => new Set(prev).add(videoId))
  }

  const handleVideoCanPlay = (videoId: number) => {
    setVideoLoading(prev => {
      const newSet = new Set(prev)
      newSet.delete(videoId)
      return newSet
    })
  }

  // Handle keyboard events for popup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedVideo) {
        closeVideoPopup()
      }
    }

    if (selectedVideo) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

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

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationLite>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              Our Portfolio
            </h1>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              See our latest work in action. Vertical videos optimized for social media engagement.
            </p>
          </ScrollAnimationLite>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {portfolioVideos.map((video, index) => (
              <ScrollAnimationLite key={video.id} delay={index * 0.1}>
                <div className="group cursor-pointer" onClick={() => openVideoPopup(video)}>
                  <div className="relative aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden border border-royal-600/30 hover:border-royal-600 transition-all duration-300 hover:scale-105">
                    {videoErrors.has(video.id) ? (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                        <div className="text-center text-gray-400">
                          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <p className="text-sm">Video unavailable</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <video
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onLoadStart={() => handleVideoLoadStart(video.id)}
                          onCanPlay={() => handleVideoCanPlay(video.id)}
                          onError={() => handleVideoError(video.id)}
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                          <source src={video.videoUrl} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                        {videoLoading.has(video.id) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-royal-600"></div>
                          </div>
                        )}
                      </>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                        {video.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 rounded-full p-2">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationLite>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900" ref={calendlyRef}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationLite>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Ready to Create Your Success Story?
            </h2>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can create engaging vertical content that drives results for your business.
            </p>
          </ScrollAnimationLite>
          <ScrollAnimationLite delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md transition-all duration-200 hover:scale-105"
                onClick={scrollToCalendly}
              >
                Book Your Strategy Session
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md transition-all duration-200 hover:scale-105"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </ScrollAnimationLite>
        </div>
      </section>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideoPopup()
            }
          }}
        >
          <div className="bg-zinc-900 rounded-lg max-w-5xl w-full max-h-[85vh] overflow-hidden border border-royal-600/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Video Section */}
              <div className="lg:w-1/2 p-4 lg:p-6 flex items-center justify-center bg-black/20">
                <div className="relative w-full max-w-xs sm:max-w-sm bg-black rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-auto object-contain"
                    controls
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => {
                      console.error(`Failed to load video: ${selectedVideo.videoUrl}`)
                    }}
                  >
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    <source src={selectedVideo.videoUrl} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Client Information Section */}
              <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col justify-between">
                {/* Header with close button */}
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h2 className="text-xl lg:text-2xl font-bold text-royal-600">{selectedVideo.title}</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeVideoPopup}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4 lg:space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Client</h3>
                    <p className="text-gray-300">{selectedVideo.client}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Industry</h3>
                    <p className="text-gray-300">{selectedVideo.industry}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Project Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedVideo.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                    <p className="text-green-400 font-medium">{selectedVideo.results}</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <Button
                    className="w-full bg-royal-600 hover:bg-royal-700 text-white py-3 text-lg rounded-lg transition-all duration-200 hover:scale-105"
                    onClick={scrollToCalendly}
                  >
                    Get Similar Results for Your Business
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <Suspense fallback={null}>
          <ExitIntentPopup onClose={closeExitIntent} />
        </Suspense>
      )}
    </main>
  )
}
