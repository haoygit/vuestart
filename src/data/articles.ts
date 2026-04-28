export interface Article {
  id: number;
  category: string;
  image: string;
  title: string;
  desc: string;
  tag: string;
  author: string;
  time: string;
  content: string;
}

export const articles: Article[] = [
  // HTML5
  {
    id: 101,
    category: 'html5',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
    title: 'HTML5 语义化标签的最佳实践',
    desc: '合理使用 header, nav, article 等标签不仅利于 SEO，更能提升代码可读性与无障碍体验。',
    tag: 'Web基础',
    author: '前端老兵',
    time: '1天前',
    content:
      '<h1>HTML5 语义化标签</h1><p>在HTML5中，语义化标签取代了原本充斥页面的大量 div。使用 article、section、nav 和 aside 等元素能让页面结构更加清晰...</p><p>这对于爬虫解析和屏幕阅读器支持至关重要。</p>',
  },
  {
    id: 102,
    category: 'html5',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&q=80',
    title: 'Canvas 动画从入门到进阶',
    desc: '深入探讨 HTML5 Canvas API，从绘制基础图形到实现高性能的 2D 粒子动画。',
    tag: '图形渲染',
    author: 'Canvas大师',
    time: '2天前',
    content:
      '<h1>Canvas 动画</h1><p>Canvas 提供了直接操作像素的能力，非常适合做游戏和复杂的可视化。通过 requestAnimationFrame，我们可以实现丝滑的动画效果。</p>',
  },
  {
    id: 103,
    category: 'html5',
    image: 'https://images.unsplash.com/photo-1627398246334-5d5f150535a2?w=400&q=80',
    title: 'Web Storage API 深度解析',
    desc: '对比 LocalStorage、SessionStorage 和 IndexedDB，选择最适合你的本地存储方案。',
    tag: '浏览器存储',
    author: '存储专家',
    time: '3天前',
    content:
      '<h1>Web Storage</h1><p>LocalStorage 和 SessionStorage 提供了简单的键值对存储，而 IndexedDB 则是功能完整的客户端数据库，支持索引和事务。</p>',
  },
  {
    id: 104,
    category: 'html5',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&q=80',
    title: 'HTML5 离线缓存与 PWA',
    desc: '利用 Service Worker 和 Manifest 让你的网页应用具备原生 App 的离线访问能力。',
    tag: 'PWA架构',
    author: '架构师',
    time: '4天前',
    content:
      '<h1>PWA 离线缓存</h1><p>Service Worker 充当了网络代理，可以拦截请求并返回缓存的内容。配合 CacheStorage，可以实现完全的离线可用。</p>',
  },
  {
    id: 105,
    category: 'html5',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
    title: '探秘 Web Worker 的多线程',
    desc: '在浏览器中运行复杂计算而不阻塞 UI 线程？Web Worker 是你必须掌握的利器。',
    tag: '性能优化',
    author: '性能狂魔',
    time: '5天前',
    content:
      '<h1>Web Worker</h1><p>通过 Web Worker，我们可以将耗时的 CPU 密集型任务剥离到后台线程运行，主线程则专注于 UI 渲染，从而保证动画和交互的流畅。</p>',
  },

  // CSS3
  {
    id: 201,
    category: 'css3',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=400&q=80',
    title: 'Flexbox 布局完全指南',
    desc: '全面解析弹性盒模型，解决一维布局中的对齐、分布与空间分配难题。',
    tag: '布局',
    author: 'CSS魔法师',
    time: '1天前',
    content:
      '<h1>Flexbox 布局</h1><p>Flexbox 是 CSS 中划时代的布局模块。它可以轻松实现水平垂直居中、等分布局以及自适应调整。</p>',
  },
  {
    id: 202,
    category: 'css3',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    title: 'CSS Grid 布局实战',
    desc: '从网格线到区域划分，掌握二维布局王者 CSS Grid 的终极技巧。',
    tag: '布局',
    author: '网格设计师',
    time: '2天前',
    content:
      '<h1>CSS Grid</h1><p>不同于 Flexbox 的一维布局，Grid 原生支持行与列的二维排版，是构建复杂仪表盘和杂志布局的完美工具。</p>',
  },
  {
    id: 203,
    category: 'css3',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80',
    title: '深入理解 CSS3 动画与过渡',
    desc: '利用 transition 和 animation 制作引人注目的微交互，提升用户体验。',
    tag: '交互动效',
    author: '动效工程师',
    time: '3天前',
    content:
      '<h1>CSS 动画</h1><p>合理使用 keyframes 和 cubic-bezier 缓动函数，配合 transform 和 opacity，能实现高性能硬件加速的丝滑动画。</p>',
  },
  {
    id: 204,
    category: 'css3',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&q=80',
    title: 'CSS 变量 (Custom Properties) 高级用法',
    desc: '实现动态主题切换、简化媒体查询与响应式设计的必备武器。',
    tag: '主题工程',
    author: '架构师',
    time: '4天前',
    content:
      '<h1>CSS 变量</h1><p>CSS 变量允许我们在运行时通过 JavaScript 修改样式，这使得一键切换暗黑模式、动态换肤变得异常简单。</p>',
  },
  {
    id: 205,
    category: 'css3',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=400&q=80',
    title: '现代 CSS 响应式设计技巧',
    desc: '超越媒体查询：容器查询 (Container Queries) 和 clamp() 带来的响应式革命。',
    tag: '响应式',
    author: '响应式先锋',
    time: '5天前',
    content:
      '<h1>现代响应式</h1><p>Container Queries 让组件的样式可以基于其容器的尺寸变化，而非视口尺寸，这彻底改变了组件库的开发范式。</p>',
  },

  // JavaScript
  {
    id: 301,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    title: '深入浅出 JavaScript 闭包',
    desc: '拨开云雾，理解作用域链、变量生命周期以及闭包在实际开发中的妙用。',
    tag: '核心原理',
    author: 'JS忍者',
    time: '1周前',
    content:
      '<h1>闭包 (Closure)</h1><p>闭包是函数和声明该函数的词法环境的组合。它允许函数访问其外部作用域的变量，常用于数据私有化和柯里化。</p>',
  },
  {
    id: 302,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=400&q=80',
    title: 'ES6+ 核心特性全览',
    desc: '解构赋值、箭头函数、可选链等现代 JS 语法如何改变了我们的代码风格。',
    tag: '现代语法',
    author: '语法狂人',
    time: '1周前',
    content:
      '<h1>ES6+ 新特性</h1><p>可选链 (?.) 和双空位合并 (??) 极大简化了深层嵌套对象的安全访问，让代码更加优雅简洁。</p>',
  },
  {
    id: 303,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&q=80',
    title: '彻底搞懂 Promise 与 Async/Await',
    desc: '从回调地狱到优雅的异步流控制，解析微任务队列的运行机制。',
    tag: '异步编程',
    author: '异步行者',
    time: '2周前',
    content:
      '<h1>异步与 Promise</h1><p>Async/Await 是 Promise 的语法糖，它允许我们以同步的方式编写异步代码。理解事件循环 (Event Loop) 是掌握它的关键。</p>',
  },
  {
    id: 304,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=400&q=80',
    title: 'JavaScript 内存管理与垃圾回收',
    desc: '理解标记清除算法，防范常见的内存泄漏场景。',
    tag: '性能优化',
    author: '内存猎手',
    time: '2周前',
    content:
      '<h1>内存回收</h1><p>JS 使用自动垃圾回收。最常见的内存泄漏包括意外的全局变量、被遗忘的定时器或回调函数，以及脱离 DOM 的引用。</p>',
  },
  {
    id: 305,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
    title: 'V8 引擎解析：JS 是如何运行的？',
    desc: '从解析器到 JIT 编译器，深入探究 JavaScript 在浏览器底层的执行过程。',
    tag: '底层原理',
    author: '引擎解码器',
    time: '3周前',
    content:
      '<h1>V8 引擎</h1><p>V8 通过 Ignition 解释器生成字节码，再利用 TurboFan 将热点代码编译为优化的机器码，从而实现惊人的执行速度。</p>',
  },

  // TypeScript
  {
    id: 401,
    category: 'typescript',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80',
    title: 'TypeScript 泛型的高级技巧',
    desc: '从基础到条件类型、映射类型，写出真正类型安全的复用组件。',
    tag: '类型体操',
    author: 'TS推导者',
    time: '1天前',
    content:
      '<h1>TypeScript 泛型</h1><p>泛型就像类型的变量。通过 extends 约束和 infer 推导，我们可以实现极为复杂的类型体操。</p>',
  },
  {
    id: 402,
    category: 'typescript',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=400&q=80',
    title: '装饰器 (Decorators) 原理与应用',
    desc: '深入元数据编程，理解依赖注入与类元数据背后的装饰器机制。',
    tag: '高级特性',
    author: 'AOP专家',
    time: '2天前',
    content:
      '<h1>装饰器</h1><p>装饰器提供了一种在类和类成员定义时添加元数据或修改行为的机制，是 Angular 和 Nest.js 的核心支柱。</p>',
  },
  {
    id: 403,
    category: 'typescript',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80',
    title: '巧用 Utility Types 简化类型',
    desc: 'Partial, Pick, Omit, Record 等内置工具类型的实战场景剖析。',
    tag: '工具类型',
    author: '类型达人',
    time: '3天前',
    content:
      '<h1>Utility Types</h1><p>无需重写接口，利用 Omit 剔除不需要的属性，或使用 Record 快速定义字典类型，极大提升开发效率。</p>',
  },
  {
    id: 404,
    category: 'typescript',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&q=80',
    title: 'Interfaces 与 Type Aliases 的抉择',
    desc: '接口和类型别名到底有什么区别？在真实项目中该如何规范使用？',
    tag: '规范设计',
    author: '架构师',
    time: '4天前',
    content:
      '<h1>Interface vs Type</h1><p>Interface 支持声明合并，适合定义库的暴露 API；Type 可以使用联合类型和映射，更适合复杂的类型推导。</p>',
  },
  {
    id: 405,
    category: 'typescript',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80',
    title: 'tsconfig.json 最佳配置指南',
    desc: '解析 strict 模式、路径别名、模块解析策略等关键编译选项。',
    tag: '工程配置',
    author: '基建狂魔',
    time: '5天前',
    content:
      '<h1>TSConfig 配置</h1><p>开启 strict: true 是保障类型安全的基础。配合 path alias，可以彻底告别繁琐的 ../../../ 相对路径引入。</p>',
  },

  // Vue
  {
    id: 501,
    category: 'vue',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80',
    title: 'Vue 3 Composition API 深度解析',
    desc: '抛弃 Options API，体验高内聚的逻辑复用模式与 setup 语法糖。',
    tag: '核心机制',
    author: '尤雨溪粉丝',
    time: '1天前',
    content:
      '<h1>Composition API</h1><p>Composition API 允许我们按逻辑关注点组织代码，配合定制化的 Hooks，可以实现极高程度的逻辑复用。</p>',
  },
  {
    id: 502,
    category: 'vue',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80',
    title: '响应式原理揭秘：Proxy 的魔力',
    desc: '从 Object.defineProperty 到 Proxy，彻底理解 Vue 3 的响应式重构。',
    tag: '底层源码',
    author: '源码剖析者',
    time: '2天前',
    content:
      '<h1>Proxy 响应式</h1><p>Proxy 克服了 Vue 2 无法拦截对象属性添加和数组索引赋值的缺陷，同时提升了响应式系统的初始化性能。</p>',
  },
  {
    id: 503,
    category: 'vue',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    title: 'Pinia 状态管理实战',
    desc: '为何 Pinia 会取代 Vuex？体验轻量级、无 mutations 的新一代状态库。',
    tag: '状态管理',
    author: '全栈开发',
    time: '3天前',
    content:
      '<h1>Pinia</h1><p>Pinia 提供了极致的 TypeScript 支持，移除了繁琐的 mutations，让状态管理回归纯粹的 Store 函数化体验。</p>',
  },
  {
    id: 504,
    category: 'vue',
    image: 'https://images.unsplash.com/photo-1531297172867-4f500bdce29b?w=400&q=80',
    title: 'Vue Router 4 进阶路由守卫',
    desc: '动态路由、权限拦截、异步数据预取，打通复杂单页应用的导航流。',
    tag: '路由管控',
    author: '导航员',
    time: '4天前',
    content:
      '<h1>Vue Router</h1><p>利用 router.beforeEach 进行全局权限校验，结合动态 addRoute，可以轻松实现后台管理系统的动态权限菜单。</p>',
  },
  {
    id: 505,
    category: 'vue',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    title: 'Vue 3 性能优化指南',
    desc: 'v-memo、按需加载、树摇 (Tree-shaking) 等让你的 Vue 应用飞起来的秘诀。',
    tag: '性能优化',
    author: '性能狂魔',
    time: '5天前',
    content:
      '<h1>Vue 性能优化</h1><p>在超长列表中使用 v-memo 可以缓存节点，结合虚拟滚动组件，能轻松应对十万级数据的渲染挑战。</p>',
  },

  // React
  {
    id: 601,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
    title: 'React Hooks 的心智模型',
    desc: '从闭包陷阱到依赖数组，真正理解 useEffect 的渲染逻辑与执行时机。',
    tag: '核心机制',
    author: 'Hooks布道师',
    time: '1天前',
    content:
      '<h1>React Hooks</h1><p>理解 Hooks 的关键在于理解"每次渲染都有自己的 Props 和 State"。切勿撒谎对待依赖数组。</p>',
  },
  {
    id: 602,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1555066932-4365d14bab8c?w=400&q=80',
    title: '深入理解 React Fiber 架构',
    desc: '时间切片、优先级调度与可中断渲染，React 是如何保持页面流畅的？',
    tag: '底层源码',
    author: '源码剖析者',
    time: '2天前',
    content:
      '<h1>React Fiber</h1><p>Fiber 将渲染工作拆分为一个个小单元，允许 React 在主线程空闲时执行渲染，一旦有高优先级交互便能迅速中断响应。</p>',
  },
  {
    id: 603,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    title: 'Redux Toolkit 现代状态管理',
    desc: '告别样板代码，体验 RTK Query 带来的数据流与 API 缓存革命。',
    tag: '状态管理',
    author: '数据流大师',
    time: '3天前',
    content:
      '<h1>Redux Toolkit</h1><p>RTK 内置了 Immer 和 Redux Thunk，极大精简了 Redux 的冗长模板代码，并提供了开箱即用的数据获取层 RTK Query。</p>',
  },
  {
    id: 604,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80',
    title: 'React 性能优化：useMemo 与 useCallback',
    desc: '什么时候该用？什么时候不用？避免过度优化带来的性能负担。',
    tag: '性能优化',
    author: '性能狂魔',
    time: '4天前',
    content:
      '<h1>性能优化</h1><p>不要滥用 useMemo。只有在向子组件传递引用类型且子组件经过 React.memo 包裹时，或者存在高开销计算时，才需要使用。</p>',
  },
  {
    id: 605,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    title: 'Next.js 14 App Router 解析',
    desc: 'Server Components、Streaming 与服务端渲染的未来演进。',
    tag: '全栈架构',
    author: '全栈领袖',
    time: '5天前',
    content:
      '<h1>Next.js App Router</h1><p>React Server Components 允许组件在服务端渲染并保留交互能力，同时不再向客户端发送该组件的 JS 打包代码，彻底颠覆了传统的同构渲染。</p>',
  },
];
