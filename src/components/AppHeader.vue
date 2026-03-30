<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isLangDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

const languages = [
  { code: 'de', name: 'Deutsch', flagUrl: 'https://flagcdn.com/w40/de.png' },
  { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w40/us.png' },
  { code: 'tr', name: 'Türkçe', flagUrl: 'https://flagcdn.com/w40/tr.png' },
]

const changeLanguage = (code: string) => {
  locale.value = code
  isLangDropdownOpen.value = false
}
</script>

<template>
  <header class="animated-header-footer">
    <div class="header-main">
      <h1 class="logo">Sefa Kutlu</h1>

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
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :class="{ 'is-active': isMobileMenuOpen }"
        >
          <span class="line"></span><span class="line"></span><span class="line"></span>
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
        <a href="#" @click="isMobileMenuOpen = false">{{ t('nav.home') }}</a>
        <a href="#" @click="isMobileMenuOpen = false">{{ t('nav.projects') }}</a>
        <a href="#" @click="isMobileMenuOpen = false">{{ t('nav.contact') }}</a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
/* Hier die CSS-Regeln für .animated-header-footer, .logo, .nav-links, .custom-dropdown,
.hamburger, .mobile-nav einfügen */
.animated-header-footer {
  background: linear-gradient(-45deg, #000000, #450a0a, #1a0505, #000000);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* RESPONSIVE (Optimiert) */
@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
  .animated-header-footer {
    justify-content: center;
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
  gap: 0.93rem;
  margin-left: auto;
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

.mobile-nav a:hover {
  background: #450a0a;
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
