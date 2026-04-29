<script setup lang="ts">
import { useRouter } from 'vue-router';
import { homeArticles as articles } from '@/data/home';

const router = useRouter();

const goToDetail = (id: number) => {
  router.push(`/article/${id}`);
};
</script>

<template>
  <div class="home-container fade-in">
    <div class="articles-col">
      <div
        v-for="article in articles"
        :key="article.id"
        class="article-card card clickable"
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

@media (max-width: 1024px) {
  .articles-col {
    max-width: 100%;
  }
}
</style>
