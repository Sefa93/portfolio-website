import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { home: 'Home', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      title: 'Hi, I am Sefa Kutlu',
      subtitle: 'Software Developer',
      cta: 'See my work',
    },
  },
  de: {
    nav: { home: 'Start', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt' },
    hero: {
      title: 'Hallo, ich bin Sefa Kutlu',
      subtitle: 'Software Entwickler',
      cta: 'Meine Arbeit sehen',
    },
  },
  tr: {
    nav: { home: 'Anasayfa', skills: 'Yetkinlikler', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      title: 'Merhaba, ben Sefa Kutlu',
      subtitle: 'Yazılım geliştiricisi',
      cta: 'Çalışmalarımı gör',
    },
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
