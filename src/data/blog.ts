export interface BlogPost {
  id: number;
  ref: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    ref: 'DOC_001',
    date: '2024.03.20',
    title: '复杂业务场景下的 Vue 组合式函数抽象',
    excerpt:
      '研究如何通过 Composition API 构建高内聚、低耦合的业务逻辑单元，并实现组件间的逻辑复用效率最大化。',
    category: 'ARCH_DEV',
    content:
      '本文档详细记录了在處理超大型表单系统时，如何利用 Vue 3 的 Composition API 进行跨组件的逻辑切片与封装。 \n\n我们采用了“逻辑仓库”模式，将所有的副作用处理、校验规则与数据格式化逻辑从视图层完全剥离。 \n\n结论：该架构将单个业务组件的代码量降低了 60% 以上，并大幅提升了逻辑的可测试性。',
  },
  {
    id: 2,
    ref: 'DOC_002',
    date: '2024.03.15',
    title: '前端工程化：自动化环境与质量守卫',
    excerpt:
      '详解如何配置基于 Vite 的持续集成管线，通过静态扫描与单元测试保障大型项目的交付稳定性。',
    category: 'ENG_QA',
    content:
      '本报告探讨了在分布式团队开发环境下，如何通过强约束的 Linter、Git Hooks 以及自动化 CI 脚本来控制代码递交质量。 \n\n主要实践包括：基于 Vite 的预构建优化、模块依赖图谱分析、以及关键路径的单元测试覆盖率强制要求。',
  },
  {
    id: 3,
    ref: 'DOC_003',
    date: '2024.03.01',
    title: '从零开始：构建稳定可靠的 PWA 离线体系',
    excerpt: '从 Service Worker 声明周期到 Cache Storage 策略，深度解析渐进式 Web 应用的核心实现。',
    category: 'PERF_OPT',
    content:
      '本文档记录了 PWA 方案在正式环境下的部署全过程。 \n\n核心关注点在于对 Cache Storage 的离线版本回滚机制。我们通过 Service Worker 拦截请求，并实现了一套基于优先级的缓存查找算法，确保用户在弱网环境下依然能获得稳定的访问体验。',
  },
  {
    id: 702,
    ref: 'DOC_004',
    date: '2024.04.29',
    title: '高性能企业级电商 PWA 演进之路',
    excerpt: '从传统单页应用到 PWA 架构，揭秘如何通过 Service Worker 打造极致的购物体验。',
    category: 'PWA_ARCH',
    content:
      '本报告详细记录了电商系统 PWA 化的完整历程。重点解决了首屏加载、离线支付预热以及跨平台推送等核心难题。',
  },
  {
    id: 703,
    ref: 'DOC_005',
    date: '2024.04.29',
    title: '分布式协作编辑器：协同算法与冲突处理',
    excerpt: '深入探讨基于 WebSocket 与多端同步协议构建的实时协作编辑器的底层原理。',
    category: 'DIST_COLLAB',
    content:
      '本文档分析了在多人实时编辑场景下，CRDT 算法相比传统 OT 算法在网络抖动和离线编辑场景下的优势。',
  },
];
