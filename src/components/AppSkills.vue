<script setup lang="ts">
import { ref, computed } from 'vue'

const searchTerm = ref('')

const allTechnologies = [
  {
    id: 1,
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    id: 2,
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    id: 3,
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: 4,
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    id: 5,
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: 6,
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    id: 7,
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
]

const filteredTechnologies = computed(() => {
  return allTechnologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )
})
</script>

<template>
  <section class="wissen-container">
    <div class="search-box">
      <i class="fas fa-search search-icon"></i>
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Technologie suchen..."
        class="search-input"
      />
    </div>

    <div class="tech-grid">
      <div v-for="tech in filteredTechnologies" :key="tech.id" class="tech-card">
        <img :src="tech.logo" :alt="tech.name" class="tech-logo" />
        <span class="tech-name">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wissen-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  outline: none;
}

.search-input:focus {
  border-color: #dc2626;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.tech-card:hover {
  opacity: 1;
  border-color: #dc2626;
  background: rgba(220, 38, 38, 0.05);
  transform: translateY(-5px);
}

.tech-logo {
  width: 50px;
  filter: grayscale(100%);
  transition: 0.3s;
  margin-bottom: 10px;
}

.tech-card:hover .tech-logo {
  filter: grayscale(0%);
}
</style>
