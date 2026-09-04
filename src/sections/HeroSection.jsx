import { config } from '../config'

export default function HeroSection({ scrollTo }) {
  const { couple, wedding, hero } = config

  return (
    <section
      id="home"
      className="page-section relative flex flex-col items-center justify-center text-center px-margin-mobile"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={hero.backgroundImage}
          alt="Foto de portada"
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-surface-container-lowest space-y-stack-md pt-16">
        <h1 className="font-display-lg">
          {couple.name1} &amp; {couple.name2}
        </h1>
        <p className="font-label-md uppercase tracking-[0.2em] opacity-90">
          {wedding.dateDisplay}
        </p>
        <div className="pt-stack-lg">
          <button
            onClick={() => scrollTo('countdown')}
            className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-label-md hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95"
          >
            {hero.ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
