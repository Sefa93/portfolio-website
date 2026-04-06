<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const events = computed(() => [
  {
    id: 1,
    date: '30.06.1993',
    title: t('about.birth.title'),
    descriptions: tm('about.birth.desc') as string[],
  },
  {
    id: 2,
    date: '1999 - 2003',
    title: t('about.school.title'),
    descriptions: tm('about.school.desc') as string[],
  },
  {
    id: 3,
    date: '2003 - 2009',
    title: t('about.middle.title'),
    descriptions: tm('about.middle.desc') as string[],
  },
  {
    id: 4,
    date: '2009 - 2013',
    title: t('about.gymnasium.title'),
    descriptions: tm('about.gymnasium.desc') as string[],
  },
  {
    id: 5,
    date: '2014 - 2025',
    title: t('about.uni.title'),
    descriptions: tm('about.uni.desc') as string[],
  },
  {
    id: 6,
    date: '2019 - 2022',
    title: t('about.job1.title'),
    descriptions: tm('about.job1.desc') as string[],
  },
  {
    id: 7,
    date: '2022 - 2025',
    title: t('about.job2.title'),
    descriptions: tm('about.job2.desc') as string[],
  },
])

const eventsReversed = computed(() => {
  return [...events.value].reverse()
})

const activeId = ref<number | null>(null)

onMounted(() => {
  // Observer-Optionen: Das Element gilt als "im Fokus", wenn es in der Mitte (rootMargin) ist
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0% -40% 0%', // Nur der mittlere Bereich des Bildschirms triggert den Fokus
    threshold: 0.3,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = Number(entry.target.getAttribute('data-id'))
        activeId.value = id
      }
    })
  }, observerOptions)

  // Alle Timeline-Elemente beobachten
  const elements = document.querySelectorAll('.timeline-item')
  elements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="about-container">
    <div class="timeline-wrapper">
      <div class="vertical-line"></div>

      <div
        v-for="event in eventsReversed"
        :key="event.id"
        :data-id="event.id"
        class="timeline-item"
        :class="{ 'is-active': activeId === event.id }"
      >
        <div class="node" style="margin-top: 2rem"></div>

        <div class="content">
          <span class="date">{{ event.date }}</span>
          <h3 class="title">{{ event.title }}</h3>

          <li class="description" v-for="(desc, i) in event.descriptions" :key="'key' + i">
            {{ desc }}
          </li>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-container {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  background: transparent;
  min-height: 150vh; /* Genug Platz zum Scrollen */
}

.timeline-wrapper {
  position: relative;
  max-width: 800px;
  width: 100%;
  /* Erhöhe das Padding oben, damit das erste Element
     beim Scrollen in die Bildschirmmitte wandern kann */
  padding-top: 30vh;
  padding-bottom: 30vh;
}

/* Weiße Linie */
.vertical-line {
  position: absolute;
  left: 20px; /* Position des Knotens */
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2); /* Dezent im Hintergrund */
  z-index: 1;
}

.timeline-item {
  position: relative;
  margin-bottom: 150px; /* Abstand zwischen Ereignissen */
  padding-left: 60px;
  display: flex;
  align-items: flex-start;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.2; /* Inaktive sind durchsichtig */
  transform: scale(0.9);
  z-index: 2;
}

/* Aktiver Zustand (Mitte des Bildschirms) */
.timeline-item.is-active {
  opacity: 1;
  transform: scale(1.1); /* Größer im Fokus */
}

/* Der weiße Knotenpunkt */
.node {
  position: absolute;
  left: 14px; /* Mittig auf der Linie (20px - halbe Breite) */
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: all 0.4s ease;
}

.timeline-item.is-active .node {
  box-shadow: 0 0 15px 5px rgba(220, 38, 38, 0.6); /* Roter Glow beim aktiven Punkt */
  transform: scale(1.3);
  background-color: #dc2626; /* Punkt wird rot im Fokus */
}

/* Text-Inhalt */
.content {
  color: white;
  text-align: left;
}

.date {
  font-family: monospace;
  color: #dc2626;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 5px;
}

.title {
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

.description {
  color: #aaa;
  margin-top: 10px;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .title {
    font-size: 1.4rem;
  }
  .timeline-item {
    margin-bottom: 100px;
  }
}
</style>
