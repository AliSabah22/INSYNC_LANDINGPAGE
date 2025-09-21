import { useState, useEffect } from 'react'

export function useExitIntent() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    let hasShownExitIntent = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShownExitIntent) {
        hasShownExitIntent = true
        setShowExitIntent(true)
      }
    }

    const handleBeforeUnload = () => {
      if (!hasShownExitIntent) {
        hasShownExitIntent = true
        setShowExitIntent(true)
      }
    }

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const closeExitIntent = () => {
    setShowExitIntent(false)
  }

  return {
    showExitIntent,
    closeExitIntent
  }
}
