import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
    hero: {
      title: 'Hi, I am Max Mustermann',
      subtitle: 'Frontend Developer & Designer',
      cta: 'See my work',
    },
  },
  de: {
    nav: { home: 'Start', projects: 'Projekte', contact: 'Kontakt' },
    hero: {
      title: 'Hallo, ich bin Max Mustermann',
      subtitle: 'Frontend Entwickler & Designer',
      cta: 'Meine Arbeit sehen',
    },
  },
  tr: {
    nav: { home: 'Anasayfa', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      title: 'Merhaba, ben Max Mustermann',
      subtitle: 'Önyüz Geliştirici & Tasarımcı',
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
