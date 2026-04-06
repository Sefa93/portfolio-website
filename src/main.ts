import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
  /** ENGLISH */
  en: {
    nav: { home: 'Home', skills: 'Skills', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Hi, I am Sefa Kutlu',
      subtitle: 'Software Developer',
      cta: 'Learn more about me',
    },
    copyright: '© 2026 Sefa Kutlu. All rights reserved',
    search_placeholder: 'Search technologies',
    about: {
      birth: {
        title: 'Birth',
        desc: ['Born into this wonderful world.'],
      },
      school: {
        title: 'Primary School',
        desc: ['First steps in education.'],
      },
      middle: {
        title: 'Middle School',
        desc: ['Initial interest in science'],
      },
      gymnasium: {
        title: 'High School',
        desc: ['Graduated with a focus on math'],
      },
      uni: {
        title: 'Computer Science – University of Duisburg-Essen',
        desc: [
          'Deep dive into Software Engineering.',
          'Graduated with a GPA of 2.5',
          'Development of a fitness application using Java',
          'Implementation of digital interaction rooms for creating Botpress chatbots using React and React Flow',
          "Development of a hand gesture recording app using React Native for my Bachelor's thesis",
        ],
      },
      job1: {
        title: 'Working Student – Embedded Developer (C/C++)',
        desc: [
          'Employer: ichó systems GmbH, Duisburg',
          'Assembly & configuration of dementia therapy balls',
          'Programming applications for dementia therapy balls in C/C++',
        ],
      },
      job2: {
        title: 'Software Developer',
        desc: [
          'Employer: adesso SE, Dortmund',
          'Frontend development with TypeScript and Angular',
          'Coordination and task distribution as Frontend Lead Developer',
          'Implementation of customer requirements',
          'Contributing to DevOps tasks (Docker, Jenkins, Ansible)',
          'Software documentation and maintenance',
          'Writing and executing software tests',
        ],
      },
    },
    contact: {
      invite: "Don't hesitate and feel free to contact me!",
      email: 'Send me an email',
    },
  },
  /** DEUTSCH */
  de: {
    nav: { home: 'Start', skills: 'Fähigkeiten', about: 'Über mich', contact: 'Kontakt' },
    hero: {
      title: 'Hallo, ich bin Sefa Kutlu',
      subtitle: 'Software Entwickler',
      cta: 'Erfahre mehr über mich',
    },
    copyright: '© 2026 Sefa Kutlu. Alle Rechte vorbehalten.',
    search_placeholder: 'Technologien suchen',
    about: {
      birth: { title: 'Geburt', desc: ['In diese wunderbare Welt hineingeboren.'] },
      school: { title: 'Grundschule', desc: ['Erste Schritte in der Bildungslaufbahn.'] },
      middle: { title: 'Mittelstufe', desc: ['Erste Interesse an Naturwissenschaften'] },
      gymnasium: { title: 'Gymnasium', desc: ['Abschluss der allgemeinen Hochschulreife.'] },
      uni: {
        title: 'Informatik - Universität Duisburg-Essen',
        desc: [
          'Vertiefung in Software Engineering.',
          'Abgeschlossen mit der Note 2.5',
          'Entwicklung einer Fitness Andwendung mit Java',
          'Umsetzung digitalen Interaction Rooms zur Erstellung von Botpress Chatbots mit React und React Flow',
          'Entwicklung einer App zu Aufzeichnung von Hand Gesten während meiner Bachelorarbeit mit React Native',
        ],
      },
      job1: {
        title: 'Werkstudent - Embedded Developer C/C++',
        desc: [
          'Arbeitgeber: ichó systems GmbH, Duisburg',
          'Zusammenbau & Konfigurationen von Demenz Therapie Bällen',
          'Programmieren von Anwendungen für Demenz Therapie Bälle in C/C++',
        ],
      },
      job2: {
        title: 'Software Entwickler',
        desc: [
          'Arbeitgeber: adesso SE, Dortmund',
          'Frontend-Entwicklung mit TypeScript und Angular',
          'Koordinerung und Aufgabenverteilung als Frontend Lead Developer',
          'Umsetzung von Kundenanforderungen',
          'Mitwirken bei DevOps Aufgaben (Docker, Jenkins, Ansible)',
          'Dokumentation und Pflege von Software',
          'Schreiben und durchführen von Software Tests',
        ],
      },
    },
    contact: {
      invite: 'Zögere nicht und fühle dich frei, mich zu kontaktieren!',
      email: 'Schreib mir eine E-Mail',
    },
  },
  /** TÜRKÇE */
  tr: {
    nav: { home: 'Anasayfa', skills: 'Yetkinlikler', about: 'Hakkımda', contact: 'İletişim' },
    hero: {
      title: 'Merhaba, ben Sefa Kutlu',
      subtitle: 'Yazılım geliştiricisi',
      cta: 'Hakkımda daha fazla bilgi edinin',
    },
    copyright: '© 2026 Sefa Kutlu. Tüm hakları saklıdır.',
    search_placeholder: 'Teknolojileri ara',
    about: {
      birth: { title: 'Doğum', desc: ['Bu harika dünyaya gözlerimi açtım.'] },
      school: { title: 'İlkokul', desc: ['Eğitim hayatının ilk adımları.'] },
      middle: { title: 'Ortaokul', desc: ['Fen bilimlerine duyulan ilk ilgi'] },
      gymnasium: { title: 'Lise', desc: ['Fen bilimleri odaklı lise mezuniyeti.'] },
      uni: {
        title: 'Bilgisayar Bilimi – Duisburg-Essen Üniversitesi',
        desc: [
          '2.5 ortalama ile mezun oldum',
          'Yazılım Mühendisliği eğitimi.',
          'Java ile bir fitness uygulaması geliştirilmesi',
          'React ve React Flow kullanarak Botpress chatbot oluşturmaya yönelik dijital etkileşim odalarının uygulanması',
          'Lisans tezim kapsamında React Native ile el hareketlerini kaydeden bir uygulama geliştirilmesi',
        ],
      },
      job1: {
        title: 'Çalışan öğrenci – Gömülü Sistemler (C/C++)',
        desc: [
          'İşveren: ichó systems GmbH, Duisburg',
          'Demans terapi toplarının montajı ve konfigürasyonu',
          'Demans terapi topları için C/C++ tabanlı uygulama geliştirme',
        ],
      },
      job2: {
        title: 'Yazılım geliştiricisi',
        desc: [
          'İşveren: adesso SE, Dortmund',
          'TypeScript ve Angular ile Frontend geliştirme',
          'Frontend Lead Developer olarak koordinasyon ve görev dağılımı',
          'Müşteri gereksinimlerinin uygulanması',
          'DevOps süreçlerine katkı sağlanması (Docker, Jenkins, Ansible)',
          'Yazılım dokümantasyonu ve bakımı',
          'Yazılım testlerinin yazılması ve yürütülmesi',
        ],
      },
    },
    contact: {
      invite: 'Benimle iletişime geçmekten çekinmeyin!',
      email: 'Bana e-posta gönder',
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
