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
        <img
          :src="article.image"
          alt="Cover"
          class="detail-cover"
          @error="
            $event.target.src = 'https://placehold.co/800x400/1e293b/94a3b8?text=Image+Load+Failed'
          "
        />

        <div class="detail-header">
          <div class="meta-tag">{{ article.tag }}</div>
          <h1 class="detail-title">{{ article.title }}</h1>

          <div class="detail-meta"></div>
        </div>

        <div class="detail-content" v-html="article.content"></div>

        <div v-if="article.implementationPlan" class="implementation-section">
          <div class="section-divider">
            <span class="divider-text">具体实现方案</span>
          </div>
          <div class="implementation-content" v-html="article.implementationPlan"></div>
        </div>
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

.detail-content :deep(h1),
.detail-content :deep(h2) {
  font-size: 22px;
  margin-top: 24px;
  margin-bottom: 16px;
  color: var(--primary);
  font-weight: 700;
}

.detail-content :deep(p) {
  margin-bottom: 16px;
  color: var(--text-main);
}

.detail-content :deep(ul) {
  margin-bottom: 16px;
  padding-left: 20px;
}

.detail-content :deep(li) {
  margin-bottom: 10px;
  line-height: 1.6;
}

.detail-content :deep(strong) {
  font-weight: 600;
  color: #111;
}

.detail-content :deep(code) {
  background: var(--bg-dark);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: #d32f2f;
}

.implementation-section {
  padding: 0 32px 48px;
}

.section-divider {
  display: flex;
  align-items: center;
  margin: 40px 0 32px;
}

.divider-text {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
  background: var(--primary-light);
  padding: 8px 24px;
  border-radius: 8px;
  position: relative;
}

.divider-text::after {
  content: '';
  position: absolute;
  right: -60px;
  top: 50%;
  width: 50px;
  height: 2px;
  background: linear-gradient(to right, var(--primary), transparent);
}

.implementation-content {
  background: #f8fafc;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #e2e8f0;
}

.implementation-content :deep(h3) {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
  margin-top: 0;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.implementation-content :deep(h3)::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.implementation-content :deep(p) {
  margin-bottom: 24px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.7;
}

.implementation-content :deep(p):last-child {
  margin-bottom: 0;
}

.empty-state {
  padding: 64px;
  text-align: center;
  color: var(--text-muted);
}
</style>
