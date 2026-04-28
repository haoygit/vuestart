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
          <img
            :src="article.image"
            alt="Article cover"
            @error="
              $event.target.src =
                'https://placehold.co/400x152/1e293b/94a3b8?text=Image+Load+Failed'
            "
          />
        </div>
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-desc">{{ article.desc }}</p>
          <div class="article-meta">
            <span class="meta-tag">{{ article.tag }}</span>
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
