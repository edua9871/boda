// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA BODA
// Edita este archivo para personalizar todo el contenido del sitio.
// ─────────────────────────────────────────────────────────────────────────────

const env = import.meta.env

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
        date:  env.VITE_STORY1_DATE  || 'Otoño 2018',
        title: env.VITE_STORY1_TITLE || 'El Primer Encuentro',
        text:  env.VITE_STORY1_TEXT  || 'Un café en el centro, una charla que duró horas y el inicio de un viaje que nunca imaginamos. Lo que comenzó como una coincidencia se convirtió en nuestro destino.',
        image: env.VITE_STORY1_IMAGE ||
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAFqGnEvqagMZmvTsz97_59QyG5YWpSW4i_PgfWb7y4mtg4-J-HPAB6N7u3p-0Zk1tggBLGtmkeDH8N0wAi9D3IPAIkpGEabo_ScDQdHa0FvB0_8GbIkeuFWAUwhS-7tlhz53pkSbYhpDNhtRBBXHwzuax5bPfQQlGI7sBtRkATzvTu6MENpc42BfAEfvqIKtkSYJsi5GwWNviUuaTIeEcheyFIRCi6pwCquVLSTzdAGHkAtvNyzgEjLmpRPySRfVjdXVfLTz4oYYHX',
        reverse: false,
      },
      {
        id: 2,
        date:  env.VITE_STORY2_DATE  || 'Verano 2023',
        title: env.VITE_STORY2_TITLE || 'El "Sí"',
        text:  env.VITE_STORY2_TEXT  || 'Bajo las estrellas y frente al mar, decidimos que queríamos caminar juntos el resto de nuestras vidas. Fue el momento más honesto y feliz que hemos compartido.',
        image: env.VITE_STORY2_IMAGE ||
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBpDE0GvucXOuKbhuHyEPoPrVHP0S3Pi5KxxxGJ_0l8eeUVFWfIB8BHNjqTvLa8RGUGNYNPQ368TYccJh-KCIgob8k4OvwzrJWWhtC7mMQsTMTo2YG-zBI6ZwhhjJZIvpqdQM88RMthzh_AleuOgYtVycCyCQgorlhLvgLkmlwnCbBT90pHI2yT5MtHtp2i_-uJv0zbTar3rawUYQrqE9xFm0_Rxfu6LqOvUT-DW-9j8u1WVhk0mOnMPWRqqAU_VVCDwY-uByNwJJWH',
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

  // ── RSVP ────────────────────────────────────────────────────────────────────
  rsvp: {
    title: 'Confirma tu Asistencia',
    subtitle: `Por favor, confirma antes del ${env.VITE_RSVP_DEADLINE || '15 de Septiembre'}.`,
    maxGuests: Number(env.VITE_RSVP_MAX_GUESTS) || 5,
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
    { id: 'home',   icon: 'home',            label: 'Home'   },
    { id: 'story',  icon: 'auto_stories',    label: 'Story'  },
    { id: 'events', icon: 'event',           label: 'Eventos' },
    { id: 'rsvp',   icon: 'event_available', label: 'RSVP'   },
    { id: 'photos', icon: 'photo_library',   label: 'Fotos'  },
  ],
}
