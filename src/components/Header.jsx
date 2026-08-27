import { useState, useRef } from 'react'
import { config } from '../config'
import Icon from './Icon'
import CreditModal from './CreditModal'

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const clickCount = useRef(0)
  const resetTimer = useRef(null)

  function handleHeartClick() {
    clickCount.current += 1
    clearTimeout(resetTimer.current)

    if (clickCount.current >= 5) {
      clickCount.current = 0
      setShowModal(true)
    } else {
      // Reinicia el contador si pasan más de 800ms sin otro click
      resetTimer.current = setTimeout(() => {
        clickCount.current = 0
      }, 800)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl flex justify-between items-center px-margin-mobile h-16">
        <div className="w-8" /> {/* spacer */}
        <span className="font-headline-md text-2xl text-primary">
          {config.couple.initials}
        </span>
        <button
          onClick={handleHeartClick}
          className="p-1 -mr-1"
          aria-label="Menú secreto"
        >
          <Icon
            name="favorite"
            className="text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          />
        </button>
      </header>

      {showModal && <CreditModal onClose={() => setShowModal(false)} />}
    </>
  )
}
