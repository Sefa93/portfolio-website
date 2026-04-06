<template>
  <div class="portfolio-container source-code-pro-font">
    <AppHeader @navigate="handleNav" :activeTab="activeTab" />

    <div class="main-wrapper">
      <AppContent v-if="activeTab === '/'" />
      <AppContent v-if="activeTab === 'home'" @navigate="handleNav" />
      <AppSkills v-if="activeTab === 'skills'" />
      <AppAbout v-if="activeTab === 'about'" />
      <AppContact v-if="activeTab === 'contact'" />
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
import AppAbout from './components/AppAbout.vue'
import AppContact from './components/AppContact.vue'

const activeTab = ref('home')

const handleNav = (tab: string) => {
  activeTab.value = tab
}
</script>

<style scoped>
.source-code-pro-font {
  font-family: 'Source Code Pro', monospace;
  font-optical-sizing: auto;
  font-weight: 250;
  font-style: normal;
}

.portfolio-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: white;
  /*font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;*/
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
