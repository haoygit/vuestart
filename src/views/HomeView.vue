<script setup lang="ts">
const articles = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop',
    title: '创新结合当前的科技公司园区地理结构技术公司',
    desc: 'Documentation is deeply integrated into the modern workspace infrastructure, providing a stable backbone for...',
    tag: '前端前沿',
    author: '架构师',
    time: '2天前',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
    title: '按硬件设备划分公司层发现的技术型文章将...',
    desc: 'It essentially enables building robust virtual platforms and helps developers keep track of operations efficiently...',
    tag: '系统架构',
    author: '前端大牛',
    time: '3天前',
  },
];
</script>

<template>
  <div class="home-container fade-in">
    <div class="articles-col">
      <div v-for="article in articles" :key="article.id" class="article-card card">
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
