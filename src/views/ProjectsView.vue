<script setup lang="ts">
import { useRouter } from 'vue-router';
import { projects } from '@/data/projects';

const router = useRouter();

const goToArticle = (articleId?: number) => {
  if (articleId) {
    router.push(`/article/${articleId}`);
  }
};
</script>

<template>
  <div class="projects-container fade-in">
    <header class="page-header">
      <div class="header-meta">代码搬运工</div>
      <h1 class="gradient-text">项目案例库</h1>
      <p>记录了在大型系统开发中沉淀的技术方案与架构实践。</p>
    </header>

    <div class="projects-list">
      <div
        v-for="p in projects"
        :key="p.id"
        class="card project-item"
        :class="{ clickable: p.articleId }"
        @click="goToArticle(p.articleId)"
      >
        <div class="item-id">[{{ p.tag }}]</div>
        <div class="item-header">
          <h3>{{ p.title }}</h3>
          <span v-if="p.articleId" class="view-doc-hint">查看技术文档 →</span>
        </div>
        <p class="description">{{ p.desc }}</p>
        <div class="tech-row">
          <span v-for="t in p.tech" :key="t" class="tech-tag">{{ t }}</span>
        </div>
        <div class="item-footer">
          <span class="status-dot"></span>
          <span class="status-text">DEPLOIED_SUCCESS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 64px;
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
  font-size: 18px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-item {
  border-left: 4px solid var(--primary); /* 侧边蓝色强调条 */
  padding: 32px;
}

.project-item.clickable {
  cursor: pointer;
}

.project-item.clickable:hover h3 {
  color: var(--primary);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.view-doc-hint {
  font-size: 13px;
  color: var(--primary);
  font-weight: 700;
  opacity: 0;
  transition: all 0.2s ease;
  transform: translateX(-10px);
}

.project-item:hover .view-doc-hint {
  opacity: 1;
  transform: translateX(0);
}

.item-id {
  font-family: monospace;
  font-size: 13px;
  color: var(--primary);
  margin-bottom: 12px;
  opacity: 0.8;
}

h3 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
}

.description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 24px;
  max-width: 800px;
}

.tech-row {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.tech-tag {
  background: var(--primary-light);
  color: var(--primary);
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 700;
  font-family: monospace;
}

.item-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid var(--glass-border);
  padding-top: 16px;
  font-family: monospace;
  font-size: 11px;
  color: var(--text-muted);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #52c41a;
}
</style>
