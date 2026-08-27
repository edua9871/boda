// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA BODA
// Edita este archivo para personalizar todo el contenido del sitio.
// ─────────────────────────────────────────────────────────────────────────────

const env = import.meta.env
import primerEncuentroImage from './image/primer_encuentro.jpg'
import elSi from './image/el si.jpg'

export const config = {

  // ── Pareja ──────────────────────────────────────────────────────────────────
  couple: {
    name1:    env.VITE_NAME1    || 'María José',
    name2:    env.VITE_NAME2    || 'Luis Eduardo',
    get initials() { return `${this.name1.split(' ')[0]} & ${this.name2.split(' ')[0]}` },
  },

  // ── Fecha ───────────────────────────────────────────────────────────────────
  wedding: {
    date:        env.VITE_WEDDING_DATE         || '2026-10-12T17:00:00',
    dateDisplay: env.VITE_WEDDING_DATE_DISPLAY || '12 · 10 · 2026',
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    backgroundImage: env.VITE_HERO_IMAGE ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAe8_YRAtuzULcTyfv-t5HfAwZuiDu1Y-wyfRMDxB5_y4YFUrfpmlQJnZCeEiH-N9UkcJxs4vpwn4np9BXo3OHPcRmv3H5V3k2qbN9dePv7BlLOuXNhBpSlaiX0lG92BWLQoeIo6oG6Sl8jGa_gRWNCdp9c4sg7D-HyfF1Vnh43oLUPLBBXEPL3mVYgqnd9WFlkh4-ALh1Oj4-YA4BtTpYMr4UoFv_XhGF9J1Fx7zvkme9mluLRvmX-WsAUVlOe3U8Ghlp5mf0PbLlT',
    ctaText: 'Ver Invitación',
  },

  // ── Countdown ───────────────────────────────────────────────────────────────
  countdown: {
    title: 'Contando los días',
    labels: { days: 'Días', hours: 'Hrs', minutes: 'Min' },
  },

  // ── Nuestra Historia ────────────────────────────────────────────────────────
  story: {
    title: 'Nuestra Historia',
    items: [
      {
        id: 1,
        date:  env.VITE_STORY1_DATE  || 'Primavera 2024',
        title: env.VITE_STORY1_TITLE || 'El Primer Encuentro',
        text:  env.VITE_STORY1_TEXT  || 'Fue una mañana cualquiera. Yo venía del dentista, sin imaginar que ese día tendría algo especial preparado para mí.\n' +
            '\n' +
            'Pasé a visitar a una tía y, sin saberlo, fue ahí donde la vi por primera vez. Conversamos, compartimos un momento y luego salimos con mi tía al centro a comprar algunas cosas. En el camino, incluso pasamos a comer unos completos.\n' +
            '\n' +
            'Hasta ese momento, parecía un día completamente normal. No había grandes señales ni nada que hiciera pensar que estaba comenzando una nueva historia.\n' +
            '\n' +
            'Pero al llegar a casa, encontré un mensaje que cambió todo:\n' +
            '\n' +
            '“¿Llegaste bien?”\n' +
            '\n' +
            'Quizás fueron solo unas palabras, un simple mensaje… pero fue ahí donde comenzó nuestra historia. Una historia que ninguno de los dos imaginaba que algún día nos llevaría hasta este momento.\n' +
            '\n' +
            'Y así, sin planearlo, sin buscarlo y en medio de un día cualquiera, comenzó nuestro primer encuentro.',
        image: env.VITE_STORY1_IMAGE ||
            primerEncuentroImage,
        reverse: false,
      },
      {
        id: 2,
        date:  env.VITE_STORY2_DATE  || 'Verano 2025',
        title: env.VITE_STORY2_TITLE || 'El "Sí"',
        text:  env.VITE_STORY2_TEXT  || 'Nuestro “Sí” tampoco fue algo planeado a la perfección… de hecho, fue bastante improvisado.\n' +
            '\n' +
            'Ya habíamos hablado alguna vez de casarnos y sabíamos que algún día daríamos ese paso. Pero una tarde, mientras estábamos recostados juntos, sentí que era el momento.\n' +
            '\n' +
            'No tenía una gran propuesta, ni un anillo preparado. Solo tenía la certeza de que quería compartir mi vida con ella. Así que, con un poco de ingenio, tomé un alambre y fabriqué una pequeña argolla.\n' +
            '\n' +
            'No era de oro, ni tenía diamantes, pero llevaba algo mucho más importante: la intención de pasar el resto de nuestras vidas juntos.\n' +
            '\n' +
            'Y así, entre risas, nervios y una argolla hecha a mano, llegó ese primer “Sí”.\n' +
            '\n' +
            'Quizás no fue la propuesta más tradicional, pero fue muy nuestra. ❤️',
        image: env.VITE_STORY2_IMAGE ||
          elSi,
        reverse: true,
      },
    ],
  },

  // ── Eventos ─────────────────────────────────────────────────────────────────
  events: {
    title: 'Eventos',
    items: [
      {
        id: 1,
        icon:   'church',
        name:   'Ceremonia',
        place:  env.VITE_CEREMONY_PLACE || 'Parroquia de San Ignacio',
        time:   env.VITE_CEREMONY_TIME  || '17:00 Hrs.',
        mapsUrl: env.VITE_CEREMONY_MAPS || 'https://maps.google.com/?q=Parroquia+de+San+Ignacio',
      },
      {
        id: 2,
        icon:   'celebration',
        name:   'Recepción',
        place:  env.VITE_RECEPTION_PLACE || 'Hacienda Las Palmeras',
        time:   env.VITE_RECEPTION_TIME  || '19:30 Hrs.',
        mapsUrl: env.VITE_RECEPTION_MAPS || 'https://maps.google.com/?q=Hacienda+Las+Palmeras',
      },
    ],
  },

  // ── Dress Code ──────────────────────────────────────────────────────────────
  dressCode: {
    title: 'Dress Code',
    men: {
      label: 'Caballeros',
      text: env.VITE_DRESSCODE_MEN || 'Traje Formal / Smoking',
    },
    women: {
      label: 'Damas',
      text: env.VITE_DRESSCODE_WOMEN || 'Vestido Largo de Gala',
    },
    colorNote: env.VITE_DRESSCODE_COLORS || 'Colores sugeridos: Tonos tierra, champagne y oscuros.',
  },

  // ── Regalos ─────────────────────────────────────────────────────────────────
  // Las variables VITE_ son públicas en el navegador. Usa solo datos bancarios
  // destinados a recibir transferencias; nunca agregues claves o credenciales.
  gifts: {
    eyebrow: env.VITE_GIFTS_EYEBROW || 'Un detalle con cariño',
    title: env.VITE_GIFTS_TITLE || 'El mejor regalo es compartir este día',
    message: env.VITE_GIFTS_MESSAGE || 'Su presencia es lo más importante para nosotros. Si además desean hacernos un obsequio, pueden ayudarnos a comenzar esta nueva etapa con un aporte voluntario.',
    closing: env.VITE_GIFTS_CLOSING || 'Gracias por acompañarnos con tanto cariño.',
    cardLabel: env.VITE_GIFTS_CARD_LABEL || 'Aporte voluntario',
    cardTitle: env.VITE_GIFTS_CARD_TITLE || 'Datos para transferencia',
    emptyMessage: env.VITE_GIFTS_EMPTY_MESSAGE || 'Los datos para transferencia estarán disponibles muy pronto.',
    note: env.VITE_GIFTS_NOTE || 'Si realizas una transferencia, puedes incluir tu nombre en el mensaje para poder agradecerte personalmente.',
    copySuccess: env.VITE_GIFTS_COPY_SUCCESS || '{field} copiado correctamente.',
    copyError: env.VITE_GIFTS_COPY_ERROR || 'No fue posible copiar el dato. Puedes seleccionarlo manualmente.',
    details: [
      { label: env.VITE_GIFTS_BANK_LABEL || 'Banco', value: env.VITE_GIFTS_BANK || 'Banco de ejemplo', copyable: false },
      { label: env.VITE_GIFTS_ACCOUNT_TYPE_LABEL || 'Tipo de cuenta', value: env.VITE_GIFTS_ACCOUNT_TYPE || 'Cuenta corriente', copyable: false },
      { label: env.VITE_GIFTS_ACCOUNT_NUMBER_LABEL || 'Número de cuenta', value: env.VITE_GIFTS_ACCOUNT_NUMBER || '0000 0000 0000', copyable: true },
      { label: env.VITE_GIFTS_HOLDER_LABEL || 'Titular', value: env.VITE_GIFTS_HOLDER || `${env.VITE_NAME1 || 'María José'} & ${env.VITE_NAME2 || 'Luis Eduardo'}`, copyable: false },
      { label: env.VITE_GIFTS_ID_LABEL || 'Documento', value: env.VITE_GIFTS_ID || 'XX.XXX.XXX-X', copyable: true },
      { label: env.VITE_GIFTS_EMAIL_LABEL || 'Correo', value: env.VITE_GIFTS_EMAIL || 'regalos@ejemplo.com', copyable: true },
    ],
  },

  // ── RSVP ────────────────────────────────────────────────────────────────────
  rsvp: {
    title: 'Confirma tu Asistencia',
    subtitle: `Por favor, confirma antes del ${env.VITE_RSVP_DEADLINE || '15 de Septiembre'}.`,
    maxGuests: Number(env.VITE_RSVP_MAX_GUESTS) || 2,
    submitText: 'Enviar Confirmación',
    successTitle: '¡Gracias por confirmar!',
    successText: 'Ya anotamos tu asistencia. ¡Te esperamos con mucho cariño! 🤍',
  },

  // ── Fotos ────────────────────────────────────────────────────────────────────
  photos: {
    title: 'Nuestros Momentos',
    subtitle: 'Comparte tus recuerdos con nosotros 🤍',
    instruction: 'Toca el botón para subir tus fotos a nuestra carpeta compartida en Drive.',
    driveUrl: env.VITE_DRIVE_URL || 'https://drive.google.com/drive/folders/REEMPLAZA_CON_TU_ID',
    uploadText: 'Subir Fotos',
  },

  // ── Visibilidad de secciones ─────────────────────────────────────────────────
  // Controla desde .env (VITE_SHOW_*=false para ocultar). Por defecto todas visibles.
  show: {
    countdown: import.meta.env.VITE_SHOW_COUNTDOWN !== 'false',
    story:     import.meta.env.VITE_SHOW_STORY     !== 'false',
    events:    import.meta.env.VITE_SHOW_EVENTS    !== 'false',
    dressCode: import.meta.env.VITE_SHOW_DRESSCODE !== 'false',
    gifts:     import.meta.env.VITE_SHOW_GIFTS     !== 'false',
    rsvp:      import.meta.env.VITE_SHOW_RSVP      !== 'false',
    photos:    import.meta.env.VITE_SHOW_PHOTOS    !== 'false',
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    thankYouText: 'Gracias por ser parte de este día tan especial.',
    year: '2026',
  },

  // ── Navegación ───────────────────────────────────────────────────────────────
  nav: [
    { id: 'home',   icon: 'home',            label: 'Inicio'   },
    { id: 'story',  icon: 'auto_stories',    label: 'Historia'  },
    { id: 'events', icon: 'event',           label: 'Eventos' },
    { id: 'gifts',  icon: 'redeem',          label: 'Regalos', visible: import.meta.env.VITE_SHOW_GIFTS !== 'false' },
    { id: 'rsvp',   icon: 'event_available', label: 'Confirmar'   },
    { id: 'photos', icon: 'photo_library',   label: 'Fotos'  },
  ],
}
