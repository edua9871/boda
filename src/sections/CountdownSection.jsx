import { useEffect, useState } from 'react'
import { config } from '../config'
import Icon from '../components/Icon'

function pad(n) {
  return Math.max(0, n).toString().padStart(2, '0')
}

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00' }
  const days    = Math.floor(diff / 86400000)
  const hours   = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000)  / 60000)
  return { days: pad(days), hours: pad(hours), minutes: pad(minutes) }
}

export default function CountdownSection() {
  const { countdown, wedding } = config
  const [time, setTime] = useState(() => getTimeLeft(wedding.date))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(wedding.date)), 1000)
    return () => clearInterval(id)
  }, [wedding.date])

  return (
    <section
      id="countdown"
      className="page-section flex flex-col items-center justify-center bg-surface"
    >
      <div className="max-w-4xl mx-auto px-margin-mobile text-center">
        <h2 className="font-headline-md text-primary mb-stack-lg">
          {countdown.title}
        </h2>

        <div className="flex justify-center gap-stack-md md:gap-stack-xl">
          {[
            { value: time.days,    label: countdown.labels.days,    delay: '0s'   },
            { value: time.hours,   label: countdown.labels.hours,   delay: '0.5s' },
            { value: time.minutes, label: countdown.labels.minutes, delay: '1s'   },
          ].map(({ value, label, delay }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="font-display-lg text-5xl text-primary pulse-soft tabular-nums"
                style={{ animationDelay: delay }}
              >
                {value}
              </span>
              <span className="font-label-md text-on-surface-variant uppercase tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-stack-xl text-primary/40">
          <Icon name="expand_more" />
        </div>
      </div>
    </section>
  )
}
