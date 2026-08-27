// Cloudflare Pages Function para manejar el formulario RSVP
// Reemplaza Netlify Forms con integración de Resend

export async function onRequestPost(context) {
  const { request, env } = context

  try {
    // DEBUG: Log del valor de RESEND_API_KEY
    console.log('=== DEBUG: RESEND_API_KEY ===')
    console.log('Valor:', env.RESEND_API_KEY)
    console.log('Tipo:', typeof env.RESEND_API_KEY)
    console.log('Longitud:', env.RESEND_API_KEY ? env.RESEND_API_KEY.length : 'undefined')
    console.log('=== FIN DEBUG ===')

    // Parsear el cuerpo de la solicitud
    const formData = await request.formData()
    const nombre = formData.get('nombre')
    const acompanantes = formData.get('acompanantes')
    const restricciones = formData.get('restricciones')
    const mensaje = formData.get('mensaje')
    const botField = formData.get('bot-field')

    // Validación de honeypot (spam protection)
    if (botField) {
      // Si el campo honeypot tiene valor, es un bot
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Validación de campos requeridos
    if (!nombre || !acompanantes) {
      return new Response(
        JSON.stringify({ error: 'Nombre y acompañantes son requeridos' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Validar que acompanantes sea un número válido
    const numAcompanantes = parseInt(acompanantes, 10)
    if (isNaN(numAcompanantes) || numAcompanantes < 1 || numAcompanantes > 10) {
      return new Response(
        JSON.stringify({ error: 'Número de acompañantes inválido' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Verificar que tenemos la API key de Resend
    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada')
      return new Response(
        JSON.stringify({
          error: 'Error de configuración del servidor',
          debug: {
            exists: !!env.RESEND_API_KEY,
            value: env.RESEND_API_KEY,
            type: typeof env.RESEND_API_KEY,
            allEnvKeys: Object.keys(env)
          }
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Preparar el email para Resend
    const emailData = {
      from: 'Invitación Boda <onboarding@resend.dev>',
      to: env.RESEND_TO_EMAIL || 'boda@ejemplo.com',
      subject: `Nueva confirmación de asistencia: ${nombre}`,
      replyTo: nombre.includes('@') ? nombre : undefined,
      html: `
        <h2>Nueva confirmación de asistencia</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Acompañantes:</strong> ${acompanantes}</p>
        <p><strong>Restricciones alimentarias:</strong> ${restricciones || 'Ninguna'}</p>
        <p><strong>Mensaje:</strong> ${mensaje || 'Sin mensaje'}</p>
        <hr>
        <p><small>Enviado desde el formulario de RSVP</small></p>
      `
    }

    // Enviar email usando Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Error al enviar email con Resend:', errorText)
      console.error('Status:', resendResponse.status)
      return new Response(
        JSON.stringify({ error: 'Error al enviar la confirmación', details: errorText }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const resendResult = await resendResponse.json()
    console.log('Email enviado exitosamente:', resendResult)

    // Respuesta exitosa
    return new Response(
      JSON.stringify({ success: true, message: 'Confirmación enviada' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error en la función contact:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Manejar método OPTIONS para CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}