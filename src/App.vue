<template>
  <div class="portfolio-container">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'
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
</style>
