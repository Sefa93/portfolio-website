<template>
  <div class="portfolio-container">
    <AppHeader @navigate="handleNav" />

    <div class="main-wrapper">
      <AppContent v-if="activeTab === 'home'" />
      <AppSkills v-if="activeTab === 'skills'" />
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppSkills from './components/AppSkills.vue'
import AppFooter from './components/AppFooter.vue'

const activeTab = ref('home')

const handleNav = (tab: string) => {
  activeTab.value = tab
}
</script>

<style scoped>
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

.main-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
