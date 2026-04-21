<script setup lang="ts">
const projects = [
  {
    id: 1,
    tag: 'SYSTEM_SPEC',
    title: '智慧能源可视化调度系统',
    desc: '基于 AntV X6 引擎构建的拓扑逻辑控制台。解决了超大规模节点下的实时渲染性能瓶颈，支持自动化逻辑校验与方案导出。',
    tech: ['Vue 3.x', 'AntV X6', 'TypeScript'],
  },
  {
    id: 2,
    tag: 'PWA_ARCHITECTURE',
    title: '高性能企业级电商解决方案',
    desc: '完成了从传统 Web 向 PWA 架构的演进。集成了复杂的离线缓存策略与骨架屏优化方案，大幅提升了弱网环境下的首屏加载速度。',
    tech: ['PWA', 'Service Workers', 'Vite'],
  },
  {
    id: 3,
    tag: 'CORE_EDITOR',
    title: '分布式协作编辑器组件库',
    desc: '设计了一套多端同步的内容协同协议。支持实时版本冲突仲裁与变更轨迹追踪，广泛应用于内部文档协作平台。',
    tech: ['WebSocket', 'PostgreSQL', 'Quill'],
  },
];
</script>

<template>
  <div class="projects-container fade-in">
    <header class="page-header">
      <div class="header-meta">代码搬运工</div>
      <h1 class="gradient-text">项目案例库</h1>
      <p>记录了在大型系统开发中沉淀的技术方案与架构实践。</p>
    </header>

    <div class="projects-list">
      <div v-for="p in projects" :key="p.id" class="card project-item">
        <div class="item-id">[{{ p.tag }}]</div>
        <h3>{{ p.title }}</h3>
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
