<template>
  <div class="about-container fade-in">
    <header class="page-header">
      <h1 class="gradient-text">关于我</h1>
      <p>一名热衷于技术创新的前端开发工程师。</p>
    </header>

    <div class="content-grid">
      <section class="bio section-block">
        <h3>个人简介</h3>
        <p>
          我有 5 年以上的前端开发经验，擅长使用 Vue 生态系统构建复杂的企业级应用。
          对前端工程化、性能优化和交互设计有深入的理解。
        </p>
        <p>
          我相信代码不仅是逻辑的堆砌，更是艺术的表达。我致力于通过技术解决复杂问题，创造简洁高效的用户体验。
        </p>
      </section>

      <section class="education section-block">
        <h3>教育背景</h3>
        <div class="item">
          <span class="year">2016 - 2020</span>
          <h4>计算机科学与技术</h4>
          <p>xx 大学 · 学士学位</p>
        </div>
      </section>

      <section class="contact section-block">
        <h3>联系方式</h3>
        <ul>
          <li><strong>Email:</strong> antigravity@example.com</li>
          <li><strong>GitHub:</strong> github.com/haoygit</li>
          <li><strong>Location:</strong> 上海, 中国</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 900px;
}

.page-header {
  margin-bottom: 64px;
}

.page-header h1 {
  font-size: 48px;
  font-weight: 800;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
}

.section-block h3 {
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--primary);
  font-weight: 700;
}

.bio p {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 24px;
}

.education .item {
  margin-bottom: 32px;
}

.education .year {
  font-size: 14px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 8px;
}

.education h4 {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 5px;
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact li {
  margin-bottom: 16px;
  color: var(--text-muted);
}

.contact strong {
  color: var(--text-main);
  margin-right: 8px;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
