<script setup lang="ts">
const posts = [
  {
    id: 1,
    ref: 'DOC_001',
    date: '2024.03.20',
    title: '复杂业务场景下的 Vue 组合式函数抽象',
    excerpt:
      '研究如何通过 Composition API 构建高内聚、低耦合的业务逻辑单元，并实现组件间的逻辑复用效率最大化。',
  },
  {
    id: 2,
    ref: 'DOC_002',
    date: '2024.03.15',
    title: '前端工程化：自动化环境与质量守卫',
    excerpt:
      '详解如何配置基于 Vite 的持续集成管线，通过静态扫描与单元测试保障大型项目的交付稳定性。',
  },
  {
    id: 3,
    ref: 'DOC_003',
    date: '2024.03.01',
    title: '从零开始：构建稳定可靠的 PWA 离线体系',
    excerpt: '从 Service Worker 声明周期到 Cache Storage 策略，深度解析渐进式 Web 应用的核心实现。',
  },
];
</script>

<template>
  <div class="blog-container fade-in">
    <header class="page-header">
      <div class="header-meta">// LOGS: TECHNICAL_REPORTS</div>
      <h1 class="gradient-text">技术笔记索引</h1>
      <p>关于前端技术演进、架构设计与工程实践的深度复盘。</p>
    </header>

    <div class="blog-list">
      <div v-for="post in posts" :key="post.id" class="post-row">
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
  padding: 40px 0;
  border-bottom: 1px solid var(--glass-border);
}

.post-row:first-child {
  border-top: 1px solid var(--glass-border);
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
