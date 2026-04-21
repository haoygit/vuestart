<script setup lang="ts">
const skills = [
  { name: 'Vue 3 Ecosystem', info: '// Reactive state management' },
  { name: 'TypeScript', info: '// Static type checking' },
  { name: 'Vite', info: '// Next generation tooling' },
  { name: 'Node.js', info: '// Backend orchestration' },
  { name: 'Architecture', info: '// Systems design' },
];
</script>

<template>
  <div class="home-container">
    <section class="hero fade-in">
      <div class="doc-tag">// ID: FRONTEND_ARCHITECT</div>
      <h1 class="hero-title">
        <span class="gradient-text">技术文档说明</span>
      </h1>
      <p class="hero-subtitle">
        专注于构建高性能、可扩展的 Web 系统架构。 本份档案记录了在前端工程化、混合开发及 PWA
        领域的实践成果。
      </p>
      <div class="cta-group">
        <RouterLink to="/projects" class="btn btn-primary">进入案例库</RouterLink>
        <RouterLink to="/about" class="btn btn-outline">查阅档案</RouterLink>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="section-title"><span class="gradient-text">核心能力项</span></h2>
      <div class="skills-list">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-name">{{ skill.name }}</div>
          <div class="skill-info">{{ skill.info }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.doc-tag {
  color: var(--primary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  margin-bottom: 16px;
  font-weight: 700;
}

.hero {
  max-width: 800px;
}

.hero-title {
  font-size: 56px;
  line-height: 1.2;
  margin-bottom: 32px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 48px;
  border-left: 4px solid var(--primary-light);
  padding-left: 24px;
}

.cta-group {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 12px 32px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: #0045bb;
}

.btn-outline {
  border: 1px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary-light);
}

.section-title {
  font-size: 32px;
  margin-bottom: 40px;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.skill-item {
  padding: 24px;
  border: 1px solid var(--glass-border);
  background: #fff;
}

.skill-name {
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 8px;
}

.skill-info {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--text-muted);
}
</style>
