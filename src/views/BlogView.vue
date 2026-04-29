<script setup lang="ts">
import { blogPosts as posts } from '@/data/blog';
</script>

<template>
  <div class="blog-container fade-in">
    <header class="page-header">
      <div class="header-meta">// LOGS: TECHNICAL_REPORTS</div>
      <h1 class="gradient-text">技术笔记索引</h1>
      <p>关于前端技术演进、架构设计与工程实践的深度复盘。</p>
    </header>

    <div class="blog-list">
      <div v-for="post in posts" :key="post.id" class="card post-row">
        <div class="post-left">
          <div class="post-ref">{{ post.ref }}</div>
          <div class="post-date">{{ post.date }}</div>
        </div>
        <div class="post-right">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <RouterLink :to="'/blog/' + post.id" class="read-btn">
            查阅技术报告 <span class="arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 80px;
}

.header-meta {
  font-family: monospace;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 8px;
}

.page-header h1 {
  font-size: 48px;
  margin-bottom: 24px;
}

.page-header p {
  color: var(--text-muted);
}

.post-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 48px;
  margin-bottom: 24px;
}

.post-row:last-child {
  margin-bottom: 0;
}

.post-ref {
  font-family: monospace;
  font-weight: 700;
  color: var(--primary);
  font-size: 14px;
  margin-bottom: 8px;
}

.post-date {
  color: var(--text-muted);
  font-size: 13px;
}

.post-title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
  transition: color 0.2s ease;
}

.post-title:hover {
  color: var(--primary);
}

.post-excerpt {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 24px;
  max-width: 700px;
}

.read-btn {
  text-decoration: none;
  font-weight: 700;
  color: var(--primary);
  font-size: 14px;
  text-transform: uppercase;
}

.read-btn:hover .arrow {
  margin-left: 8px;
}

.arrow {
  transition: margin-left 0.2s ease;
}
</style>
