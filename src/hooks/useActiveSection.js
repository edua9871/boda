import { useEffect, useRef, useState } from 'react'
import { config } from '../config'

/**
 * Devuelve el id de la sección más visible en el viewport de la página.
 */
export function useActiveSection() {
  const [active, setActive] = useState(config.nav[0].id)
  const observerRef = useRef(null)

  useEffect(() => {
    const ratios = new Map()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })
        if (bestId) setActive(bestId)
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    const sections = document.querySelectorAll('.page-section')
    sections.forEach((s) => observerRef.current.observe(s))

    return () => observerRef.current?.disconnect()
  }, [])

  return active
}
