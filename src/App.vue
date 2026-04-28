<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app-wrapper">
    <header>
      <nav class="nav-links">
        <RouterLink to="/html5">HTML5</RouterLink>
        <RouterLink to="/css3">CSS3</RouterLink>
        <RouterLink to="/javascript">JavaScript</RouterLink>
        <RouterLink to="/typescript">TypeScript</RouterLink>
        <RouterLink to="/vue">Vue</RouterLink>
        <RouterLink to="/react">React</RouterLink>
      </nav>

      <div class="header-right">
        <RouterLink to="/about" class="hot-articles">关于我</RouterLink>
        <button class="search-btn">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <RouterLink to="/projects" class="tools-btn">技术工具</RouterLink>
      </div>
    </header>

    <main class="fade-in">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hot-articles {
  font-weight: 600;
  color: var(--text-main);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}

.hot-articles:hover {
  color: var(--primary);
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.search-btn:hover {
  color: var(--primary);
}

.tools-btn {
  background: var(--primary);
  color: #fff;
  padding: 10px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
  transition: all 0.2s;
}

.tools-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 93, 255, 0.3);
}

main {
  padding: 0;
  min-height: calc(100vh - 100px);
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
