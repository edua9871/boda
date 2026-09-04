import { useState } from 'react'
import { config } from '../config'
import Icon from '../components/Icon'

export default function GiftsSection() {
  const { gifts } = config
  const [copiedField, setCopiedField] = useState('')
  const availableDetails = gifts.details.filter(({ value }) => value)

  async function copyValue(label, value) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(label)
      window.setTimeout(() => setCopiedField(''), 1800)
    } catch {
      setCopiedField('error')
      window.setTimeout(() => setCopiedField(''), 1800)
    }
  }

  const allDetailsText = availableDetails
    .map(({ label, value }) => `${label}: ${value}`)
    .join('\n')

  function copyAllDetails() {
    return copyValue('Todos los datos', allDetailsText)
  }

  return (
    <section
      id="gifts"
      className="page-section relative isolate overflow-hidden bg-surface-container-low flex flex-col justify-center py-24"
    >
      <div className="absolute -top-24 -right-24 size-72 rounded-[999px] bg-primary-fixed/35 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-20 size-80 rounded-[999px] bg-secondary-fixed/45 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-margin-mobile w-full">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14">
          <div className="text-center md:text-left">
            <span className="font-label-md uppercase tracking-[0.24em] text-secondary">
              {gifts.eyebrow}
            </span>
            <h2 className="font-headline-lg text-primary mt-3 mb-stack-md">
              {gifts.title}
            </h2>
            <p className="font-body-lg text-on-surface-variant whitespace-pre-line">
              {gifts.message}
            </p>
            {gifts.closing && (
              <p className="font-headline-md text-xl italic text-primary mt-6">
                {gifts.closing}
              </p>
            )}
          </div>

          <div className="glass rounded-2xl border border-white/50 shadow-[0_24px_70px_rgba(92,22,30,0.10)] overflow-hidden">
            <div className="bg-primary px-6 py-5 text-on-primary flex items-center gap-4">
              <span className="size-11 rounded-[999px] bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="volunteer_activism" className="text-secondary-fixed text-[26px]" />
              </span>
              <div>
                <p className="font-label-md uppercase tracking-widest text-primary-fixed-dim">
                  {gifts.cardLabel}
                </p>
                <h3 className="font-headline-md text-2xl">{gifts.cardTitle}</h3>
              </div>
            </div>

            {availableDetails.length > 0 ? (
              <div className="divide-y divide-outline-variant/40 px-6">
                {availableDetails.map(({ label, value, copyable }) => (
                  <div key={label} className="flex items-center gap-4 py-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                        {label}
                      </p>
                      <p className="font-body-md text-on-surface mt-1 break-words">
                        {value}
                      </p>
                    </div>
                    {copyable && (
                      <button
                        type="button"
                        onClick={() => copyValue(label, value)}
                        className="size-10 rounded-[999px] border border-outline-variant/60 text-primary flex items-center justify-center shrink-0 transition-transform hover:bg-primary-fixed/50 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-label={`Copiar ${label}`}
                      >
                        <Icon
                          name={copiedField === label ? 'check' : 'content_copy'}
                          className="text-[19px]"
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-8 py-10 text-center">
                <Icon name="schedule" className="text-secondary text-4xl mb-3" />
                <p className="font-body-md text-on-surface-variant">
                  {gifts.emptyMessage}
                </p>
              </div>
            )}

            {availableDetails.length > 0 && (
              <div className="px-6 pt-2 pb-4">
                <button
                  type="button"
                  onClick={copyAllDetails}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-label-md uppercase tracking-widest text-on-primary transition-transform hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Copiar todos los datos bancarios"
                >
                  <Icon
                    name={copiedField === 'Todos los datos' ? 'check' : 'content_copy'}
                    className="text-[18px]"
                  />
                  Copiar datos bancarios
                </button>
              </div>
            )}

            {gifts.note && (
              <div className="mx-6 mb-6 mt-2 rounded-xl bg-secondary-fixed/45 px-4 py-3 flex items-start gap-3">
                <Icon name="favorite" className="text-primary text-[18px] mt-0.5" />
                <p className="font-body-md text-sm text-on-secondary-fixed-variant">
                  {gifts.note}
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {copiedField === 'error'
            ? gifts.copyError
            : copiedField
              ? gifts.copySuccess.replace('{field}', copiedField)
              : ''}
        </p>
      </div>
    </section>
  )
}
