<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { articles } from '@/data/articles';

const route = useRoute();
const router = useRouter();

// Retrieve category from route name (e.g. 'html5', 'css3')
const category = computed(() => (route.name as string) || 'html5');

const categoryArticles = computed(() => {
  return articles.filter((a) => a.category === category.value);
});

const goToDetail = (id: number) => {
  router.push(`/article/${id}`);
};
</script>

<template>
  <div class="home-container fade-in">
    <div class="articles-col">
      <div
        v-for="article in categoryArticles"
        :key="article.id"
        class="article-card card"
        @click="goToDetail(article.id)"
      >
        <div class="article-image">
          <img :src="article.image" alt="Article cover" />
        </div>
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-desc">{{ article.desc }}</p>
          <div class="article-meta">
            <span class="meta-tag">{{ article.tag }}</span>
            <span class="meta-item"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {{ article.author }}</span
            >
            <span class="meta-item"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {{ article.time }}</span
            >
            <span class="meta-action">详情 &gt;</span>
          </div>
        </div>
      </div>

      <div v-if="categoryArticles.length === 0" class="empty-state card">
        <h3>暂无文章</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  align-items: flex-start;
  min-height: 80vh;
  margin-bottom: 20px;
}

.articles-col {
  flex: 1;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.empty-state {
  text-align: center;
  padding: 48px;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .articles-col {
    max-width: 100%;
  }
}
</style>
