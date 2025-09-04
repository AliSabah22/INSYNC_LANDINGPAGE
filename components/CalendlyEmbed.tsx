"use client"

import { useEffect, useState } from "react"

interface CalendlyEmbedProps {
  url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!url || typeof url !== "string") {
    console.error("Invalid Calendly URL provided")
    return null
  }

  return (
    <>
      {isLoaded ? (
        <div className="calendly-inline-widget" data-url={url} style={{ minWidth: "320px", height: "630px" }} />
      ) : (
        <div className="flex justify-center items-center h-[630px]">
          <p className="text-white">Loading calendar...</p>
        </div>
      )}
    </>
  )
}

