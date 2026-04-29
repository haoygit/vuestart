export interface Project {
  id: number;
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  articleId?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    tag: 'SYSTEM_SPEC',
    title: '智慧能源可视化调度系统',
    desc: '基于 AntV X6 引擎构建的拓扑逻辑控制台。解决了超大规模节点下的实时渲染性能瓶颈，支持自动化逻辑校验与方案导出。',
    tech: ['Vue 3.x', 'AntV X6', 'TypeScript'],
    articleId: 701,
  },
  {
    id: 2,
    tag: 'PWA_ARCHITECTURE',
    title: '高性能企业级电商解决方案',
    desc: '完成了从传统 Web 向 PWA 架构的演进。集成了复杂的离线缓存策略与骨架屏优化方案，大幅提升了弱网环境下的首屏加载速度。',
    tech: ['PWA', 'Service Workers', 'Vite'],
    articleId: 702,
  },
  {
    id: 3,
    tag: 'CORE_EDITOR',
    title: '分布式协作编辑器组件库',
    desc: '设计了一套多端同步的内容协同协议。支持实时版本冲突仲裁与变更轨迹追踪，广泛应用于内部文档协作平台。',
    tech: ['WebSocket', 'PostgreSQL', 'Quill'],
    articleId: 703,
  },
];
