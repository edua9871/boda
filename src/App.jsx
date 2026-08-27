import { useRef } from 'react'
import { config } from './config'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import { useActiveSection } from './hooks/useActiveSection'

import HeroSection      from './sections/HeroSection'
import CountdownSection from './sections/CountdownSection'
import StorySection     from './sections/StorySection'
import EventsSection    from './sections/EventsSection'
import DressCodeSection from './sections/DressCodeSection'
import GiftsSection     from './sections/GiftsSection'
import RSVPSection      from './sections/RSVPSection'
import PhotosSection    from './sections/PhotosSection'

export default function App() {
  const containerRef = useRef(null)
  const activeSection = useActiveSection(containerRef)

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed h-full overflow-hidden">
      <Header />

      <main ref={containerRef} className="app-container">
        <HeroSection      scrollTo={scrollTo} />
        {config.show.countdown && <CountdownSection />}
        {config.show.story     && <StorySection />}
        {config.show.events    && <EventsSection />}
        {config.show.dressCode && <DressCodeSection />}
        {config.show.gifts     && <GiftsSection />}
        {config.show.rsvp      && <RSVPSection />}
        {config.show.photos    && <PhotosSection />}
      </main>

      <BottomNav activeSection={activeSection} scrollTo={scrollTo} />
    </div>
  )
}
