<script setup lang="ts">
// Keine spezielle Logik nötig, da Links statisch sind
</script>

<template>
  <footer class="animated-header-footer">
    <div class="social-icons">
      <a href="#" class="icon wa"><i class="fab fa-whatsapp"></i></a>
      <a href="#" class="icon tw"><i class="fab fa-twitter"></i></a>
      <a href="#" class="icon fb"><i class="fab fa-facebook"></i></a>
      <a href="#" class="icon ig"><i class="fab fa-instagram"></i></a>
      <a href="#" class="icon li"><i class="fab fa-linkedin"></i></a>
      <a href="#" class="icon xi"><i class="fab fa-xing"></i></a>
    </div>
    <p class="copyright">© 2026 Sefa Kutlu. Alle Rechte vorbehalten.</p>
  </footer>
</template>

<style scoped>
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

/* Hier die CSS-Regeln für footer, .social-icons, .icon, .copyright einfügen */
footer.animated-header-footer {
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
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
</style>
