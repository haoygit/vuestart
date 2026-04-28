<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { articles } from '@/data/articles';

const route = useRoute();
const router = useRouter();

const articleId = computed(() => Number(route.params.id));
const article = computed(() => articles.find((a) => a.id === articleId.value));

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="detail-container fade-in">
    <div class="detail-col">
      <button class="back-btn" @click="goBack">
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
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        返回
      </button>

      <div v-if="article" class="card article-detail">
        <img :src="article.image" alt="Cover" class="detail-cover" />

        <div class="detail-header">
          <div class="meta-tag">{{ article.tag }}</div>
          <h1 class="detail-title">{{ article.title }}</h1>

          <div class="detail-meta">
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
          </div>
        </div>

        <div class="detail-content" v-html="article.content"></div>
      </div>

      <div v-else class="card article-detail empty-state">
        <h3>未找到对应的文章</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  display: flex;
  align-items: flex-start;
  min-height: 80vh;
}

.detail-col {
  flex: 1;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.back-btn {
  background: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--text-main);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  align-self: flex-start;
}

.back-btn:hover {
  transform: translateX(-4px);
  color: var(--primary);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.article-detail {
  padding: 0;
  overflow: hidden;
}

.detail-cover {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.detail-header {
  padding: 32px 32px 0;
}

.meta-tag {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
}

.detail-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.4;
  margin-bottom: 24px;
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--text-muted);
  font-size: 14px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--glass-border);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-content {
  padding: 32px;
  line-height: 1.8;
  font-size: 16px;
  color: var(--text-main);
}

.detail-content :deep(h1) {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--primary);
}

.detail-content :deep(p) {
  margin-bottom: 16px;
}

.empty-state {
  padding: 64px;
  text-align: center;
  color: var(--text-muted);
}
</style>
