<template>
  <div class="about-container fade-in">
    <div class="white-card">
      <header class="page-header">
        <h1 class="gradient-text">关于我</h1>
        <p class="subtitle">一名热衷于技术创新的前端开发工程师。</p>
      </header>

      <div class="content-grid">
        <section class="bio section-block">
          <h3>个人简介</h3>
          <p>
            我有 8 年以上的前端开发经验，擅长使用 Vue 生态系统构建复杂的企业级应用。
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
            <p>xx 大学</p>
          </div>
        </section>

        <section class="contact section-block">
          <h3>联系方式</h3>
          <ul>
            <li><strong>Email:</strong> antigravity@example.com</li>
            <li><strong>GitHub:</strong> github.com/haoygit</li>
            <li><strong>Location:</strong> 深圳, 中国</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 900px;
  margin: 0 auto;
}

.white-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 64px;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  color: #333;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.white-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.8);
}

.page-header {
  margin-bottom: 56px;
  text-align: center;
}

.page-header h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  /* 如果之前的 gradient-text 在浅色背景下看不清，这里用主题色覆盖 */
  background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header .subtitle {
  color: #64748b;
  font-size: 20px;
  font-weight: 500;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
}

.section-block h3 {
  font-size: 22px;
  margin-bottom: 24px;
  color: var(--primary);
  font-weight: 700;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 12px;
}

.bio p {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.education .item {
  margin-bottom: 32px;
  position: relative;
  padding-left: 20px;
}

.education .item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 4px;
  height: calc(100% - 6px);
  background: var(--primary);
  border-radius: 4px;
}

.education .year {
  font-size: 14px;
  color: #94a3b8;
  display: inline-block;
  margin-bottom: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.education h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #1e293b;
}

.education p {
  color: #64748b;
  font-size: 15px;
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact li {
  margin-bottom: 16px;
  color: #475569;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.contact strong {
  color: #0f172a;
  width: 80px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .white-card {
    padding: 32px;
  }
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
