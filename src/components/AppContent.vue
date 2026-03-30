<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const displayTextHeader = ref('')
const displayTextSubtitle = ref('')
const isTypingFinished = ref(false)
const showHeaderCursor = ref(true)
const showSubtitleCursor = ref(false)

const typeText = async (text: string, refTarget: Ref<string>) => {
  for (let i = 0; i <= text.length; i++) {
    refTarget.value = text.substring(0, i)
    await new Promise((resolve) => setTimeout(resolve, 70))
  }
}

const runAnimation = async () => {
  displayTextHeader.value = ''
  displayTextSubtitle.value = ''
  isTypingFinished.value = false
  showHeaderCursor.value = true
  await typeText(t('hero.title'), displayTextHeader)
  showHeaderCursor.value = false
  showSubtitleCursor.value = true
  await new Promise((r) => setTimeout(r, 500))
  await typeText(t('hero.subtitle'), displayTextSubtitle)
  showSubtitleCursor.value = false
  isTypingFinished.value = true
}

watch(locale, runAnimation)
onMounted(runAnimation)
</script>

<template>
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
        <button v-if="isTypingFinished" class="cta-button">{{ t('hero.cta') }}</button>
      </transition>
    </section>
  </main>
</template>

<style scoped>
/* Hier die CSS-Regeln für .content-area, .bg-animation, .blob,
.hero-text, .typing-header, .cursor, .cta-button einfügen */

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

@media (max-width: 600px) {
  .hero-text h2 {
    font-size: 2.2rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}
</style>
