import { useEffect, useState } from 'react'
import FloatingStickers from './FloatingStickers'
import './HeroSection.css'

const HeroSection = () => {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const flakes = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 3,
    }))
    setSnowflakes(flakes)
  }, [])

  const handleScrollClick = () => {
    document.querySelector('.message-section')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="images/hero-yana.png"
            alt="Yana" 
            className="hero-image"
          />
        </div>
        <h1 className="hero-title">Merry Christmas!</h1>
      </div>
      <div className="hero-bottom">
        <button className="scroll-button" onClick={handleScrollClick} aria-label="Scroll to message">
          <span className="scroll-arrow">↓</span>
        </button>
      </div>
      <div className="snowflakes">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
      <FloatingStickers />
    </section>
  )
}

export default HeroSection
