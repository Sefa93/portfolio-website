<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const user = 'businesskutlu93'
const domain = 'gmail.com'

const openMail = () => {
  // Der Link wird erst beim Klick generiert
  window.location.href = `mailto:${user}@${domain}`
}
</script>

<template>
  <section class="contact-container">
    <div class="contact-content">
      <div class="photo-wrapper">
        <img src="@/assets/business-photo.png" alt="Business Profile" class="profile-img" />
      </div>

      <div class="info-wrapper">
        <h2 class="invite-text">{{ t('contact.invite') }}</h2>

        <div class="email-box" @click="openMail" style="cursor: pointer">
          <i class="fas fa-envelope-open-text email-icon"></i>
          <span class="email-link"> {{ user }} [at] {{ domain }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  z-index: 10;
}

.contact-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  max-width: 1100px;
  width: 100%;
}

/* Foto Styling */
.photo-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.profile-img {
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid rgba(220, 38, 38, 0.3);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(220, 38, 38, 0.2);
  transition: transform 0.5s ease;
}

.profile-img:hover {
  transform: scale(1.02);
  border-color: #dc2626;
}

/* Info Styling */
.info-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.invite-text {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.2;
  color: white;
  font-weight: bold;
}

.email-box {
  display: flex;
  align-items: center;
  gap: 20px;
}

.email-icon {
  font-size: 3rem;
  color: #dc2626;
  filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.4));
}

.email-link {
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: #ccc;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.email-link:hover {
  color: white;
  border-bottom: 2px solid #dc2626;
}

/* Mobile Optimierung */
@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .photo-wrapper {
    justify-content: center;
  }

  .profile-img {
    width: 280px;
    height: 350px;
  }

  .email-box {
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
