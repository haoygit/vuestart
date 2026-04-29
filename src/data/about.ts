export interface AboutData {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  education: {
    year: string;
    major: string;
    school: string;
  }[];
  contact: {
    label: string;
    value: string;
    link?: string;
  }[];
}

export const aboutData: AboutData = {
  name: 'Antigravity',
  title: '关于我',
  subtitle: '一名热衷于技术创新的前端开发工程师。',
  bio: [
    '我有 8 年以上的前端开发经验，擅长使用 Vue 生态系统构建复杂的企业级应用。对前端工程化、性能优化和交互设计有深入的理解。',
    '我相信代码不仅是逻辑的堆砌，更是艺术的表达。我致力于通过技术解决复杂问题，创造简洁高效的用户体验。',
  ],
  education: [
    {
      year: '2016 - 2020',
      major: '计算机科学与技术',
      school: 'xx 大学',
    },
  ],
  contact: [
    { label: 'Email', value: 'antigravity@example.com' },
    { label: 'GitHub', value: 'github.com/haoygit', link: 'https://github.com/haoygit' },
    { label: 'Location', value: '深圳, 中国' },
  ],
};
