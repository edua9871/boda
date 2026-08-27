import { useEffect, useRef, useState } from 'react'
import { config } from '../config'

/**
 * Returns the id of the section currently most visible in the scroll container.
 * @param {React.RefObject} containerRef - ref to the scroll container
 */
export function useActiveSection(containerRef) {
  const [active, setActive] = useState(config.nav[0].id)
  const observerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: container, threshold: 0.55 }
    )

    const sections = container.querySelectorAll('.page-section')
    sections.forEach((s) => observerRef.current.observe(s))

    return () => observerRef.current?.disconnect()
  }, [containerRef])

  return active
}
