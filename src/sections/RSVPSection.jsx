import { useState } from 'react'
import { config } from '../config'
import Icon from '../components/Icon'

export default function RSVPSection() {
  const { rsvp } = config

  const [form, setForm] = useState({
    nombre: '',
    acompanantes: '1',
    restricciones: '',
    mensaje: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const formData = new FormData()
      formData.append('nombre', form.nombre)
      formData.append('acompanantes', form.acompanantes)
      formData.append('restricciones', form.restricciones)
      formData.append('mensaje', form.mensaje)
      formData.append('bot-field', '') // Honeypot field

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-primary focus:border-b-2 bg-transparent py-4 font-body-md transition-all duration-300 outline-none'

  return (
    <section
      id="rsvp"
      className="page-section bg-surface-dim flex flex-col justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-margin-mobile bg-surface-container-lowest rounded-xl shadow-xl p-stack-lg md:p-stack-xl w-full">
        {status === 'success' ? (
          <div className="text-center space-y-stack-md py-stack-lg">
            <Icon name="favorite" className="text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }} />
            <h3 className="font-headline-md text-primary">{rsvp.successTitle}</h3>
            <p className="font-body-md text-on-surface-variant">{rsvp.successText}</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-stack-xl">
              <h2 className="font-headline-md text-primary mb-stack-sm">
                {rsvp.title}
              </h2>
              <p className="font-body-md text-on-surface-variant">{rsvp.subtitle}</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-stack-md"
            >
            {/* Honeypot field para spam protection - oculto para usuarios */}
            <div style={{ display: 'none' }}>
              <input
                name="bot-field"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-secondary">Nombre Completo</label>
              <input
                required
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={set('nombre')}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="space-y-2">
                <label className="font-label-md text-secondary">Acompañantes</label>
                <select
                  name="acompanantes"
                  value={form.acompanantes}
                  onChange={set('acompanantes')}
                  className={inputClass}
                >
                  {Array.from({ length: rsvp.maxGuests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Persona' : 'Personas'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-secondary">
                  Restricciones Alimentarias
                </label>
                <input
                  type="text"
                  name="restricciones"
                  placeholder="Ej. Vegetariano"
                  value={form.restricciones}
                  onChange={set('restricciones')}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-secondary">Mensaje (opcional)</label>
              <input
                type="text"
                name="mensaje"
                placeholder="Un mensaje para los novios…"
                value={form.mensaje}
                onChange={set('mensaje')}
                className={inputClass}
              />
            </div>

            <div className="pt-stack-lg">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-on-primary py-5 rounded-xl font-label-md uppercase tracking-widest hover:opacity-90 transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando…' : rsvp.submitText}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-center font-body-md text-error">
                Ocurrió un error. Por favor intenta de nuevo.
              </p>
            )}
          </form>
          </>
        )}
      </div>
    </section>
  )
}
