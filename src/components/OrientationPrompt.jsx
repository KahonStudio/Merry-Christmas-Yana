import { useState, useEffect } from 'react'
import './OrientationPrompt.css'

const OrientationPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      // Check if device is mobile/tablet
      const isMobile = window.innerWidth <= 768
      const isPortrait = window.innerHeight > window.innerWidth
      
      if (isMobile && isPortrait) {
        setShowPrompt(true)
      } else {
        setShowPrompt(false)
      }
    }

    // Check on mount
    checkOrientation()

    // Check on resize/orientation change
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

  if (!showPrompt) return null

  return (
    <div className="orientation-prompt-overlay">
      <div className="orientation-prompt">
        <div className="orientation-icon">📱</div>
        <h3>Please Rotate Your Device</h3>
        <p>For the best experience, please rotate your device to landscape mode.</p>
        <div className="orientation-arrow">↻</div>
      </div>
    </div>
  )
}

export default OrientationPrompt

