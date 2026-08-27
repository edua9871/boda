import { config } from '../config'
import Icon from '../components/Icon'

export default function EventsSection() {
  const { events } = config

  return (
    <section
      id="events"
      className="page-section bg-surface flex flex-col justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-margin-mobile w-full">
        <h2 className="font-headline-md text-primary text-center mb-stack-xl">
          {events.title}
        </h2>

        <div className="space-y-stack-lg">
          {events.items.map(({ id, icon, name, place, time, mapsUrl }) => (
            <div
              key={id}
              className="glass p-stack-lg rounded-xl border border-outline-variant/30"
            >
              <Icon name={icon} className="text-secondary mb-4" />
              <h3 className="font-headline-md text-2xl text-primary mb-2">
                {name}
              </h3>
              <p className="font-body-md mb-4 text-on-surface-variant">
                {place}, {time}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-label-md underline decoration-secondary underline-offset-4"
              >
                Ver ubicación
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
