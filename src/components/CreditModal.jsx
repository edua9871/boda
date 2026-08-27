import { useState, useEffect, useRef, useCallback } from 'react'

const GAME_DURATION = 10 // segundos

export default function CreditModal({ onClose }) {
  // ── Estado del juego ───────────────────────────────────────────────
  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [heartPos, setHeartPos] = useState({ x: 50, y: 50 })
  const [showBest, setShowBest] = useState(false)
  const timerRef = useRef(null)
  const bestRef = useRef(Number(localStorage.getItem('creditBest') || 0))

  const randomPos = useCallback(() => ({
    x: Math.floor(Math.random() * 80) + 10,
    y: Math.floor(Math.random() * 70) + 10,
  }), [])

  function startGame() {
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setHeartPos(randomPos())
    setShowBest(false)
    setGameActive(true)
  }

  function tapHeart() {
    if (!gameActive) return
    setScore(s => s + 1)
    setHeartPos(randomPos())
  }

  // Countdown
  useEffect(() => {
    if (!gameActive) return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          setGameActive(false)
          setShowBest(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [gameActive])

  // Guardar mejor puntaje
  useEffect(() => {
    if (!showBest) return
    if (score > bestRef.current) {
      bestRef.current = score
      localStorage.setItem('creditBest', score)
    }
  }, [showBest, score])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-t-3xl sm:rounded-3xl px-8 py-8 w-full max-w-sm shadow-2xl text-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Crédito */}
        <span
          className="material-symbols-outlined text-primary text-5xl mb-3 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
        <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
          Diseñado &amp; desarrollado por
        </p>
        <h2 className="font-headline-md text-2xl text-on-surface mb-0.5">
          Danny Espinoza
        </h2>
        <p className="text-xs text-on-surface-variant mb-5">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>

        {/* Separador */}
        <div className="border-t border-outline-variant mb-4" />

        {/* Mini juego */}
        {!gameActive && !showBest && (
          <button
            onClick={startGame}
            className="px-6 py-2 rounded-full bg-primary text-on-primary text-sm font-medium"
          >
            Jugar
          </button>
        )}

        {gameActive && (
          <div className="relative w-full rounded-2xl bg-primary-fixed/20 overflow-hidden select-none" style={{ height: 140 }}>
            {/* HUD */}
            <div className="absolute top-2 left-3 text-xs font-bold text-on-surface">
              ❤ {score}
            </div>
            <div className="absolute top-2 right-3 text-xs font-bold text-on-surface">
              {timeLeft}s
            </div>
            {/* Corazón volador */}
            <button
              onClick={tapHeart}
              className="absolute transition-none text-primary text-3xl leading-none -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${heartPos.x}%`, top: `${heartPos.y}%` }}
              aria-label="Toca el corazón"
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </button>
          </div>
        )}

        {showBest && (
          <div className="text-center">
            <p className="text-on-surface font-medium mb-0.5">
              Puntuación: <span className="text-primary font-bold">{score}</span>
            </p>
            <p className="text-xs text-on-surface-variant mb-3">
              Mejor marca: {bestRef.current} ❤
            </p>
            <button
              onClick={startGame}
              className="px-6 py-2 rounded-full bg-primary text-on-primary text-sm font-medium"
            >
              Reintentar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
