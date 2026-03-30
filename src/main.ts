import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { home: 'Home', skills: 'Skills', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Hi, I am Sefa Kutlu',
      subtitle: 'Software Developer',
      cta: 'See my work',
    },
    copyright: '© 2026 Sefa Kutlu. All rights reserved',
    search_placeholder: 'Search technologies',
  },
  de: {
    nav: { home: 'Start', skills: 'Fähigkeiten', about: 'Über mich', contact: 'Kontakt' },
    hero: {
      title: 'Hallo, ich bin Sefa Kutlu',
      subtitle: 'Software Entwickler',
      cta: 'Meine Arbeit sehen',
    },
    copyright: '© 2026 Sefa Kutlu. Alle Rechte vorbehalten.',
    search_placeholder: 'Technologien suchen',
  },
  tr: {
    nav: { home: 'Anasayfa', skills: 'Yetkinlikler', about: 'Hakkımda', contact: 'İletişim' },
    hero: {
      title: 'Merhaba, ben Sefa Kutlu',
      subtitle: 'Yazılım geliştiricisi',
      cta: 'Çalışmalarımı gör',
    },
    copyright: '© 2026 Sefa Kutlu. Tüm hakları saklıdır.',
    search_placeholder: 'Teknolojileri ara',
  },
}

const i18n = createI18n({
  legacy: false, // Wichtig für Composition API (script setup)
  locale: 'de',
  fallbackLocale: 'en',
  messages,
})
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// In app.use(i18n) einbinden
app.use(i18n)

app.mount('#app')
