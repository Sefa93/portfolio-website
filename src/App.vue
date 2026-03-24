<template>
  <div class="portfolio-container">
    <header class="animated-header-footer">
      <div class="header-main">
        <h1 class="logo">PORTFOLIO</h1>

        <div class="header-actions">
          <div class="custom-dropdown">
            <button @click="isLangDropdownOpen = !isLangDropdownOpen" class="dropdown-trigger">
              <img :src="languages.find((l) => l.code === locale)?.flagUrl" class="flag-img" />
              <i class="fas fa-chevron-down icon-small"></i>
            </button>
            <transition name="slide-fade">
              <div v-if="isLangDropdownOpen" class="dropdown-menu">
                <div
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  class="dropdown-item"
                >
                  <img :src="lang.flagUrl" class="flag-img-small" />
                  <span>{{ lang.name }}</span>
                </div>
              </div>
            </transition>
          </div>

          <button
            class="hamburger"
            @click="toggleMobileMenu"
            :class="{ 'is-active': isMobileMenuOpen }"
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </div>

        <nav class="nav-links desktop-only">
          <a href="#">{{ t('nav.home') }}</a>
          <a href="#">{{ t('nav.projects') }}</a>
          <a href="#">{{ t('nav.contact') }}</a>
        </nav>
      </div>

      <transition name="mobile-slide">
        <nav v-if="isMobileMenuOpen" class="mobile-nav">
          <a href="#" @click="closeMobileMenu">{{ t('nav.home') }}</a>
          <a href="#" @click="closeMobileMenu">{{ t('nav.projects') }}</a>
          <a href="#" @click="closeMobileMenu">{{ t('nav.contact') }}</a>
        </nav>
      </transition>
    </header>

    <main class="content-area">
      <div class="bg-animation">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>

      <section class="hero-text">
        <h2 class="typing-header">
          {{ displayTextHeader }}
          <span v-if="showHeaderCursor" class="cursor">|</span>
        </h2>
        <p class="subtitle typing-subtitle">
          {{ displayTextSubtitle }}
          <span v-if="showSubtitleCursor" class="cursor">|</span>
        </p>
        <transition name="fade">
          <button v-if="isTypingFinished" class="cta-button">
            {{ t('hero.cta') }}
          </button>
        </transition>
      </section>
    </main>
    <footer class="animated-header-footer">
      <div class="social-icons">
        <a href="#" class="icon wa"><i class="fab fa-whatsapp"></i></a>
        <a href="#" class="icon tw"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon fb"><i class="fab fa-facebook"></i></a>
        <a href="#" class="icon ig"><i class="fab fa-instagram"></i></a>
        <a href="#" class="icon li"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="icon xi"><i class="fab fa-xing"></i></a>
      </div>
      <p class="copyright">© 2024 Dein Name. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isDropdownOpen = ref(false)

// 1. Reactive Variablen für die Anzeige
const displayTextHeader: Ref<string> = ref('')
const displayTextSubtitle: Ref<string> = ref('')
const isTypingFinished: Ref<boolean> = ref(false)
const showHeaderCursor: Ref<boolean> = ref(true)
const showSubtitleCursor: Ref<boolean> = ref(false)

const typingSpeed: number = 60
const pauseBetweenLines: number = 800

// Zustände für die Dropdowns
const isLangDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

// Verfügbare Sprachen mit Flaggen-Emojis (oder Icons)
const languages = [
  { code: 'de', name: 'Deutsch', flagUrl: 'https://flagcdn.com/w40/de.png' },
  { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w40/us.png' },
  { code: 'tr', name: 'Türkçe', flagUrl: 'https://flagcdn.com/w40/tr.png' },
]

// Hilfsfunktion zum Löschen des Textes vor neuem Tippen
const resetTyping = () => {
  displayTextHeader.value = ''
  displayTextSubtitle.value = ''
  isTypingFinished.value = false
  showHeaderCursor.value = true
  showSubtitleCursor.value = false
}

// Funktion zum Wechseln der Sprache
const changeLanguage = (code: string) => {
  locale.value = code
  isDropdownOpen.value = false
}

const typeText = async (text: string, refTarget: Ref<string>): Promise<void> => {
  for (let i = 0; i <= text.length; i++) {
    refTarget.value = text.substring(0, i)
    await new Promise((resolve) => setTimeout(resolve, typingSpeed))
  }
}

const runAnimation = async () => {
  resetTyping()
  // Hole die aktuellen Texte aus den Übersetzungen
  await typeText(t('hero.title'), displayTextHeader)

  showHeaderCursor.value = false
  showSubtitleCursor.value = true
  await new Promise((resolve) => setTimeout(resolve, pauseBetweenLines))

  await typeText(t('hero.subtitle'), displayTextSubtitle)

  showSubtitleCursor.value = false
  isTypingFinished.value = true
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Schließen beim Klick auf einen Link (für Mobile)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Überwachung: Wenn die Sprache wechselt, starte Animation neu
watch(locale, () => {
  runAnimation()
})

onMounted(() => {
  runAnimation()
})
</script>

<style scoped>
/* DEINE BESTEHENDEN GLOBALEN STYLES (:global...) BITTE BEIBEHALTEN */

/* DEINE BESTEHENDEN STYLES FÜR CONTAINER, HEADER, FOOTER, BLobs... (Bleiben gleich) */

.portfolio-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}

:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
}

.animated-header-footer {
  background: linear-gradient(-45deg, #000000, #450a0a, #1a0505, #000000);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer.animated-header-footer {
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.logo {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}
.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: #ff4d4d;
}

.content-area {
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.bg-animation {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: #7f1d1d;
  top: -100px;
  left: -100px;
  animation: pulse 8s infinite alternate;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: #450a0a;
  bottom: -150px;
  right: -150px;
  animation: moveAround 12s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes moveAround {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100px, 50px);
  }
}

/* HERO TEXT & TYPING ANIMATION STYLES */
.hero-text {
  position: relative;
  z-index: 10;
  text-align: center;
  /* Feste Höhe für den Text, damit der Button nicht 'springt' */
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Wichtig: Verhindert, dass der Name umbricht, während er getippt wird */
.typing-header {
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 0.5rem;
  font-weight: bold;
  white-space: pre-wrap; /* Bewahrt Leerzeichen und erlaubt Umbrüche */
}

/* Wir stylen "Max Mustermann" direkt im JavaScript-Text, indem wir es aufteilen (siehe unten für eine Option, falls du Rot willst) */
/* Hier eine einfache CSS Lösung, um nur das 'Max Mustermann' Teil rot zu machen, wenn es fertig ist */
/* (Besser wäre die JS-Option unten, aber das ist einfacher) */
.highlight {
  color: #dc2626;
}

.typing-subtitle {
  font-size: 1.3rem;
  color: #ccc;
  min-height: 1.5em; /* Behält Platz bei */
}

/* Der Cursor */
.cursor {
  font-weight: 200;
  color: #dc2626; /* Cursorfarbe in Rot */
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Button & Transition */
.cta-button {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background: #991b1b;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition:
    transform 0.3s,
    background 0.3s,
    box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(153, 27, 27, 0.4);
  /* Verhindert das Umspringen beim Einblenden */
  width: fit-content;
  align-self: center;
}
.cta-button:hover {
  transform: scale(1.05);
  background: #b91c1c;
  box-shadow: 0 6px 20px rgba(185, 28, 28, 0.6);
}

/* Fade Transition für den Button */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* SOCIAL ICONS & COPYRIGHT (Bleiben gleich) */
.social-icons {
  display: flex;
  gap: 20px;
  font-size: 1.5rem;
  justify-content: center;
}
.icon {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}
.wa:hover {
  color: #25d366;
}
.tw:hover {
  color: #1da1f2;
}
.fb:hover {
  color: #4267b2;
}
.ig:hover {
  color: #e1306c;
}
.li:hover {
  color: #0077b5;
}
.xi:hover {
  color: #007575;
}

.copyright {
  font-size: 0.8rem;
  color: #666;
  margin: 0;
}

/* RESPONSIVE (Optimiert) */
@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
  .animated-header-footer {
    justify-content: center;
  }
  .hero-text h2 {
    font-size: 2.2rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-dropdown {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(220, 38, 38, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-family: inherit;
}

.lang-dropdown option {
  background: #1a0505;
  color: white;
}

.lang-dropdown:hover {
  border-color: #dc2626;
}

.custom-dropdown {
  position: relative;
  z-index: 100;
}

.dropdown-trigger {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.4);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.dropdown-trigger:hover {
  background: rgba(220, 38, 38, 0.2);
  border-color: #dc2626;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #1a0505;
  border: 1px solid #450a0a;
  border-radius: 8px;
  min-width: 140px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.dropdown-item {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #450a0a;
}

.dropdown-item.active {
  background: rgba(220, 38, 38, 0.3);
}

.flag-icon {
  font-size: 1.2rem;
}
.lang-name {
  font-size: 0.9rem;
  color: #ddd;
}

/* Animation für das Menü */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.flag-img {
  width: 24px;
  height: auto;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.flag-img-small {
  width: 20px;
  height: auto;
  border-radius: 2px;
}

.q {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(220, 38, 38, 0.3);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.icon-small {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Der Rest deines Dropdown-Styles bleibt gleich */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #1a0505; /* Dunkelrotes Schwarz */
  border: 1px solid #450a0a;
  border-radius: 8px;
  z-index: 1000;
  min-width: 140px;
}

/* HEADER BASIS */
.header-main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* DESKTOP LINKS */
.desktop-only {
  display: flex;
}

/* HAMBURGER STYLES */
.hamburger {
  display: none; /* Standardmäßig versteckt */
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.hamburger .line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

/* MOBILE NAV MENU */
.mobile-nav {
  display: none; /* Wird nur per Vue eingeblendet */
  flex-direction: column;
  background: #1a0505;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px 0;
  border-bottom: 2px solid #450a0a;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .desktop-only {
    display: none; /* Desktop Links verstecken */
  }

  .hamburger {
    display: flex; /* Hamburger zeigen */
  }

  .mobile-nav {
    display: flex;
    z-index: 100;
    cursor: pointer;
  }

  .animated-header-footer {
    position: relative; /* Wichtig für absolute Positionierung des Menüs */
  }
}

/* HAMBURGER ANIMATION (Optional: Kreuz-Effekt) */
.hamburger.is-active .line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* MOBILE SLIDE ANIMATION */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.4s ease;
}
.mobile-slide-enter-from,
.mobile-slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
