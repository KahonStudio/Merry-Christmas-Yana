import { useState } from 'react'
import './FloatingStickers.css'

const STICKERS = [
  { id: 3, image: 'stickers/yana-love.png', position: { left: '2%', top: '10%' }, delay: 1 },
  { id: 4, image: 'stickers/yana-pasko1.png', position: { right: '2%', top: '10%' }, delay: 1.5 },
  { id: 7, image: 'stickers/yana-pasko2.png', position: { left: '2%', top: '60%' }, delay: 3 },
  { id: 8, image: 'stickers/yana-selfie.png', position: { right: '2%', top: '60%' }, delay: 3.5 }
]

const FloatingStickers = () => {
  const [clickedStickers, setClickedStickers] = useState(new Set())
  const [hoveredSticker, setHoveredSticker] = useState(null)

  const handleStickerClick = (id) => {
    setClickedStickers((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="sticker-container">
      {STICKERS.map((sticker) => {
        const isClicked = clickedStickers.has(sticker.id)
        const isHovered = hoveredSticker === sticker.id
        const hoverTransform = isHovered && !isClicked ? ' scale(1.2) rotate(10deg)' : ''
        
        return (
          <div
            key={sticker.id}
            className={`sticker sticker-${sticker.id} ${isClicked ? 'clicked' : ''}`}
            style={{
              ...sticker.position,
              animationDelay: `${sticker.delay}s`,
              transform: hoverTransform,
              zIndex: isHovered ? 101 : 100,
            }}
            onClick={() => handleStickerClick(sticker.id)}
            onMouseEnter={() => setHoveredSticker(sticker.id)}
            onMouseLeave={() => setHoveredSticker(null)}
          >
            <img 
              src={sticker.image} 
              alt={`Sticker ${sticker.id}`}
              className="sticker-image"
            />
          </div>
        )
      })}
    </div>
  )
}

export default FloatingStickers
