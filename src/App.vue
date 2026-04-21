<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import BackgroundEffects from './components/BackgroundEffects.vue';

const scrollProgress = ref(0);

const updateScroll = () => {
  const h = document.documentElement;
  const b = document.body;
  const st = 'scrollTop';
  const sh = 'scrollHeight';
  scrollProgress.value = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});
</script>

<template>
  <div class="app-wrapper">
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    <BackgroundEffects />

    <header>
      <div class="logo-container">
        <RouterLink to="/" class="site-logo">
          <span class="gradient-text">技术存档</span>
        </RouterLink>
      </div>

      <nav class="nav-links">
        <RouterLink to="/">概览</RouterLink>
        <RouterLink to="/projects">案例库</RouterLink>
        <RouterLink to="/blog">技术笔记</RouterLink>
        <RouterLink to="/about">档案</RouterLink>
      </nav>
    </header>

    <main class="fade-in">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer>
      <p class="footer-text">
        DOCUMENT_CONTROL // REF: {{ new Date().getFullYear() }} // CONFIDENTIAL
      </p>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--primary);
  z-index: 9999;
  transition: width 0.1s ease;
}

.logo-container {
  font-size: 20px;
  font-weight: 800;
}

.site-logo {
  text-decoration: none;
}

main {
  padding: 48px 32px;
  min-height: calc(100vh - 160px);
}

footer {
  text-align: center;
  padding: 64px 32px;
  border-top: 1px solid var(--glass-border);
  background: #fff;
}

.footer-text {
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 1px;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
