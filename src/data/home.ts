export interface HomeArticle {
  id: number;
  image: string;
  title: string;
  desc: string;
  tag: string;
  author: string;
  time: string;
}

export const homeArticles: HomeArticle[] = [
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
  {
    id: 701,
    image: '/projects/smart_energy.png',
    title: '智慧能源可视化调度系统：架构设计与实现',
    desc: '深度解析基于 AntV X6 与 Vue 3 构建的大规模能源拓扑调度系统的核心技术点。',
    tag: '系统架构',
    author: '架构师',
    time: '刚刚',
  },
];
