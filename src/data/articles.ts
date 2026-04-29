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
  implementationPlan?: string;
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
    content: `
      <h2>引言</h2>
      <p>在过去的网页开发中，开发者习惯使用大量的 <code>&lt;div&gt;</code> 来构建页面，这导致了“div地狱”，不仅代码难以维护，机器也难以理解页面结构。HTML5 引入了一系列语义化标签，彻底改变了这一现状。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>提升可读性与可维护性：</strong> 使用 <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> 能够让开发者在阅读源码时一眼看出页面结构，降低团队协作成本。</li>
        <li><strong>SEO 友好 (搜索引擎优化)：</strong> 爬虫可以通过 <code>&lt;article&gt;</code> 和 <code>&lt;section&gt;</code> 准确识别网页的核心内容区域，从而给予更高的搜索权重。</li>
        <li><strong>无障碍访问 (A11y)：</strong> 屏幕阅读器等辅助设备依赖语义化标签来为视障用户提供准确的页面导航。例如，<code>&lt;nav&gt;</code> 明确告知这里是导航区域。</li>
        <li><strong>常见标签正确用法：</strong> <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code> 用于包裹图片及图注；<code>&lt;time&gt;</code> 用于机器可读的时间格式；<code>&lt;aside&gt;</code> 用于侧边栏或补充内容。</li>
      </ul>
      <h2>总结</h2>
      <p>写出语义化的 HTML 是现代前端开发者的基本素养。它不仅是对代码整洁度的追求，更是对搜索引擎和所有受众群体（包括残障人士）的尊重。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Canvas 提供了一个通过 JavaScript 和 HTML 绘制图形的便捷方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等领域。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>上下文获取与基础绘制：</strong> 通过 <code>canvas.getContext('2d')</code> 获取渲染上下文。掌握 <code>fillRect</code>, <code>strokeRect</code>, <code>beginPath</code>, <code>arc</code> 等基础 API 来绘制几何图形。</li>
        <li><strong>动画循环 (Animation Loop)：</strong> 抛弃 <code>setInterval</code>，使用 <code>requestAnimationFrame</code> 来实现平滑的动画循环，它可以与浏览器的刷新率同步，并在标签页后台时自动暂停以节省 CPU 资源。</li>
        <li><strong>状态保存与恢复：</strong> 熟练使用 <code>ctx.save()</code> 和 <code>ctx.restore()</code>。在进行矩阵变换（平移、旋转、缩放）前保存状态，避免影响后续的绘制。</li>
        <li><strong>离屏渲染 (Offscreen Canvas) 与性能优化：</strong> 对于复杂的静态背景或图层，可以使用离屏 Canvas 预先绘制，然后直接将画面 <code>drawImage</code> 到主画布上，大幅提升渲染帧率。</li>
      </ul>
      <h2>总结</h2>
      <p>Canvas 是前端图形渲染的利器，深入掌握其 API 配合合理的数学物理模型（如粒子系统中的速度与加速度），能创造出极其惊艳的视觉动效。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>现代 Web 应用越来越像桌面软件，离线能力和本地数据持久化变得至关重要。HTML5 提供了丰富的客户端存储方案，彻底取代了容量极小的 Cookie。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>LocalStorage 与 SessionStorage：</strong> 两者都提供简单的键值对存储，容量一般在 5MB 左右。区别在于 LocalStorage 永久有效，而 SessionStorage 在页面会话结束（关闭标签页）时被清除。</li>
        <li><strong>IndexedDB 事务型数据库：</strong> 这是一个运行在浏览器上的非关系型数据库。它支持索引、游标和事务，可以存储大量的结构化数据甚至二进制文件 (Blob)。</li>
        <li><strong>异步与性能：</strong> Web Storage API 是同步的，读写大数据会阻塞主线程；而 IndexedDB 是异步的，不会阻塞 UI 渲染，适合复杂应用的存储需求。</li>
        <li><strong>安全与跨域限制：</strong> 所有本地存储都遵循同源策略。切记不要在本地存储中保存敏感信息（如明文密码或高权限 Token），以防范 XSS 攻击。</li>
      </ul>
      <h2>总结</h2>
      <p>对于简单的偏好设置，使用 LocalStorage；对于单次会话状态，使用 SessionStorage；对于大量数据或离线应用的缓存，果断转向 IndexedDB。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>PWA (Progressive Web App) 模糊了网页和原生应用之间的界限。通过结合 HTML5 最新的 API，网页现在可以被安装到桌面，并在无网环境下正常运行。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>Web App Manifest：</strong> 这是一个 JSON 文件，用于配置应用被添加到主屏幕时的图标、名称、启动画面和显示模式（如全屏沉浸式 <code>display: standalone</code>）。</li>
        <li><strong>Service Worker 生命周期：</strong> 理解 <code>install</code>, <code>activate</code>, <code>fetch</code> 事件。Service Worker 运行在独立线程中，充当了网页与网络之间的代理服务器。</li>
        <li><strong>Cache API 缓存策略：</strong> 在 <code>fetch</code> 事件中拦截网络请求，实现诸如“缓存优先 (Cache First)”、“网络优先 (Network First)”、“Stale-While-Revalidate”等高级缓存策略。</li>
        <li><strong>后台同步与推送通知：</strong> 利用 Background Sync 确保离线时的操作（如发送消息）在恢复网络后自动提交；利用 Push API 实现类似原生 App 的消息推送。</li>
      </ul>
      <h2>总结</h2>
      <p>PWA 代表了 Web 的未来。即便不完全拥抱 PWA，仅仅引入 Service Worker 进行静态资源的缓存拦截，也能使首屏加载速度产生质的飞跃。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>JavaScript 是一门单线程语言，这意味着如果在主线程进行大量数学计算或数据处理，会导致页面假死、动画卡顿。Web Worker 为前端带来了多线程能力。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>独立运行环境：</strong> Worker 运行在与主线程隔离的后台线程中，没有 <code>window</code> 或 <code>document</code> 对象，无法直接操作 DOM，但可以使用网络请求 (fetch) 和 IndexedDB。</li>
        <li><strong>消息通信机制：</strong> 主线程和 Worker 之间通过 <code>postMessage()</code> 发送数据，通过 <code>onmessage</code> 事件监听数据。通信过程是深拷贝传值，而非共享内存。</li>
        <li><strong>SharedArrayBuffer 与共享内存：</strong> 对于极高性能要求的场景，可以使用 <code>SharedArrayBuffer</code> 配合 <code>Atomics</code> 实现多线程共享内存，避免数据深拷贝的开销。</li>
        <li><strong>应用场景：</strong> 适用于图像/视频处理（如像素级滤镜）、海量数据解析（如解析大型 CSV/JSON 文件）、复杂加密算法或前端机器学习推理。</li>
      </ul>
      <h2>总结</h2>
      <p>Web Worker 是解救主线程的超级英雄。将 CPU 密集型任务放心地交给 Worker，主线程只需专注响应用户的每一次丝滑交互。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Flexbox（弹性盒子）是 CSS3 中革命性的布局模式。它一举消灭了曾经困扰前端多年的 <code>float</code> 清除浮动和 <code>vertical-align</code> 的黑魔法。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>主轴与交叉轴：</strong> 理解 <code>flex-direction</code> (row/column)。主轴决定了子元素的排列方向，而交叉轴则垂直于主轴。</li>
        <li><strong>对齐与分布：</strong> <code>justify-content</code> 控制主轴上的空间分布（如 <code>space-between</code>）；<code>align-items</code> 控制交叉轴上的对齐（如神奇的 <code>center</code> 实现垂直居中）。</li>
        <li><strong>弹性空间的分配：</strong> <code>flex-grow</code> 决定如何瓜分剩余空间，<code>flex-shrink</code> 决定空间不足时如何收缩，<code>flex-basis</code> 设定基准尺寸。简写属性 <code>flex: 1</code> 是最常用的均分技巧。</li>
        <li><strong>换行与多行对齐：</strong> 通过 <code>flex-wrap: wrap</code> 允许换行，此时可使用 <code>align-content</code> 控制多行在交叉轴上的整体对齐方式。</li>
      </ul>
      <h2>总结</h2>
      <p>Flexbox 完美解决了一维线性布局问题（无论是横向还是纵向）。它是目前最主流、最稳定的布局方案，必须形成肌肉记忆。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>如果说 Flexbox 是为了排列一行或一列而生，那么 CSS Grid 就是真正的二维布局系统。它允许我们同时在行和列上进行精确的网格划分。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>网格轨道定义：</strong> 掌握 <code>grid-template-columns</code> 和 <code>grid-template-rows</code>。使用 <code>fr</code> (fraction) 单位来按比例分配可用空间。</li>
        <li><strong>网格线与跨度：</strong> 子元素可以通过 <code>grid-column: 1 / 3</code>（从第一条网格线跨越到第三条）来横跨多列，实现复杂的杂志排版。</li>
        <li><strong>网格区域 (Grid Areas)：</strong> 这是 Grid 最直观的特性。通过 <code>grid-template-areas</code> 像拼图一样命名区域（如 <code>"header header" "sidebar main"</code>），布局一目了然。</li>
        <li><strong>自适应黑魔法：</strong> <code>repeat(auto-fit, minmax(200px, 1fr))</code>，这一行代码就能实现无需媒体查询的完美响应式卡片网格布局。</li>
      </ul>
      <h2>总结</h2>
      <p>遇到整体页面架构、复杂的仪表盘或画廊布局时，请毫不犹豫地使用 Grid。它能极大减少 HTML 中的嵌套容器（wrapper div）。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>优秀的动效不是炫技，而是为用户提供清晰的视觉反馈和状态指引。CSS3 原生提供的动画能力已经足以覆盖 90% 的前端微交互场景。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>Transition 过渡：</strong> 适用于状态改变（如 hover 或类名切换）。必须明确指出 <code>transition-property</code>, <code>transition-duration</code>, <code>transition-timing-function</code>。</li>
        <li><strong>Animation 与 Keyframes：</strong> 适用于复杂的、无需触发条件自动播放的多步骤动画。通过 <code>@keyframes</code> 定义关键帧的百分比状态。</li>
        <li><strong>硬件加速 (GPU Acceleration)：</strong> 为了保证动画的 60fps 丝滑流畅，尽量只对 <code>transform</code> (translate, scale, rotate) 和 <code>opacity</code> 属性做动画，避免引发浏览器的 Layout (重排) 和 Paint (重绘)。</li>
        <li><strong>缓动函数 (Easing)：</strong> 抛弃生硬的 <code>linear</code>。使用 <code>cubic-bezier</code> 贝塞尔曲线，或者 <code>ease-in-out</code>，让运动符合物理世界的惯性规律。</li>
      </ul>
      <h2>总结</h2>
      <p>克制而优雅地使用 CSS 动画。记住黄金法则：动画时间不宜超过 300ms，且切勿对宽高、外边距等几何属性进行过渡。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Sass/Less 等预处理器的变量在编译后就固化了，而 CSS 变量（CSS Custom Properties）是浏览器原生支持的，存在于 DOM 树中，可动态修改。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>作用域与继承：</strong> 定义在 <code>:root</code> 下的变量全局有效；定义在特定类下的变量仅在其子元素生效。CSS 变量完全遵循层叠与继承规则。</li>
        <li><strong>一键暗黑模式：</strong> 利用媒体查询 <code>@media (prefers-color-scheme: dark)</code> 重新覆写 <code>:root</code> 下的颜色变量，即可无缝实现暗黑主题，无需修改任何组件代码。</li>
        <li><strong>与 JavaScript 交互：</strong> 这是 CSS 变量最强大的地方。通过 <code>element.style.setProperty('--x', value)</code> 可以轻松将 JS 中的坐标、滚动进度实时传递给 CSS，实现酷炫特效。</li>
        <li><strong>回退机制 (Fallback)：</strong> 使用 <code>var(--primary-color, #000)</code> 提供默认值，提升代码健壮性。</li>
      </ul>
      <h2>总结</h2>
      <p>CSS 变量彻底打通了 CSS 与 JS 之间的壁垒，是构建现代组件库、设计系统 (Design System) 的核心基石。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>我们已经习惯了使用 <code>@media</code> 根据屏幕宽度来做响应式，但这使得组件与页面上下文深度耦合。现代 CSS 引入了更强大的自适应利器。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>容器查询 (Container Queries)：</strong> 通过 <code>container-type: inline-size</code> 定义容器，子元素使用 <code>@container (min-width: 400px)</code>。这意味着组件的布局取决于它所在的父容器宽度，实现了真正的“组件级响应式”。</li>
        <li><strong>数学函数 <code>clamp()</code>：</strong> <code>clamp(MIN, VAL, MAX)</code>。例如 <code>font-size: clamp(16px, 4vw, 24px)</code>，使得字体在特定区间内随屏幕宽度平滑缩放，无需断点。</li>
        <li><strong>逻辑属性 (Logical Properties)：</strong> 抛弃 <code>margin-left</code>，使用 <code>margin-inline-start</code>。它能根据页面的书写模式 (如阿拉伯语的 RTL) 自动翻转布局，提升国际化能力。</li>
        <li><strong><code>aspect-ratio</code> 纵横比：</strong> 原生控制元素的宽高比，不再需要 <code>padding-bottom</code> 的黑魔法，非常适合图片和视频的占位。</li>
      </ul>
      <h2>总结</h2>
      <p>响应式设计不再局限于视口宽度。借助容器查询和现代流体排版函数，我们能够构建出扔在任何布局槽中都能完美呈现的超强自适应组件。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>闭包（Closure）是 JavaScript 中最难懂但也最重要的概念之一。它无处不在，尤其是在异步编程、事件监听和模块化开发中。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>词法作用域 (Lexical Scoping)：</strong> 函数在定义时就决定了它的作用域。闭包就是：一个函数记住了其外部词法环境的引用，即使该函数在其他地方被执行。</li>
        <li><strong>数据私有化：</strong> 利用闭包封装变量，外部无法直接访问，只能通过暴露的函数去操作（如实现一个计数器或状态工厂），这是早期 JS 模块化的基础。</li>
        <li><strong>防抖与节流 (Debounce & Throttle)：</strong> 经典的闭包应用场景。通过闭包保存定时器的引用 <code>timer</code>，在多次触发时清除或判定状态。</li>
        <li><strong>内存泄漏风险：</strong> 闭包会导致外部变量被强引用，无法被垃圾回收。如果滥用闭包保存巨大的 DOM 对象或数据结构，可能造成严重的内存泄漏。</li>
      </ul>
      <h2>总结</h2>
      <p>理解闭包的关键是理解 JS 的执行上下文栈和词法环境链。不要畏惧闭包，善用它来实现高阶函数和柯里化（Currying）。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>自 ES2015 (ES6) 以来，JavaScript 迎来了爆发式的进化，每年都有新特性加入。这些语法糖大幅提升了代码的表达力与简洁度。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>解构赋值与展开运算符 (Spread/Rest)：</strong> <code>const { a, b: alias } = obj</code> 以及 <code>[...arr1, ...arr2]</code> 极大简化了对象和数组的提取与合并。</li>
        <li><strong>箭头函数 (Arrow Functions)：</strong> 不仅语法更短，更重要的是它没有自己的 <code>this</code> 绑定，它继承外层作用域的 <code>this</code>，完美解决了回调函数中 <code>that = this</code> 的痛点。</li>
        <li><strong>可选链 (Optional Chaining <code>?.</code>) 与空值合并 (Nullish Coalescing <code>??</code>)：</strong> 彻底告别了 <code>if (a && a.b && a.b.c)</code> 这种面条代码。<code>??</code> 比 <code>||</code> 更严谨，只判定 null 或 undefined。</li>
        <li><strong>ES Modules：</strong> 官方标准的模块化方案 <code>import / export</code>，支持静态分析，是现代化构建工具（Webpack/Vite）实现 Tree-Shaking 的核心前提。</li>
      </ul>
      <h2>总结</h2>
      <p>现代 JS 语法不再是可选项，而是标准规范。熟练掌握这些特性，能让你的代码更像艺术品般简洁优雅。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>网络请求、文件读取、定时器……前端充满了异步操作。从回调函数 (Callback) 到 Promise，再到 Async/Await，JavaScript 的异步编程范式完成了华丽的转身。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>Promise 状态机：</strong> Promise 有三种不可逆状态：Pending（进行中）、Fulfilled（已成功）、Rejected（已失败）。<code>.then()</code> 会返回一个新的 Promise，从而支持链式调用。</li>
        <li><strong>Async/Await 的本质：</strong> 它是 Generator 的语法糖。<code>await</code> 关键字会暂停当前 <code>async</code> 函数的执行，交出线程控制权，直到 Promise 决议后再恢复执行。这让异步代码看起来像同步一样易读。</li>
        <li><strong>错误处理：</strong> 在 Async 函数中，使用 <code>try...catch</code> 代码块捕获错误；对于全局未捕获的 Promise 错误，需监听 <code>unhandledrejection</code> 事件。</li>
        <li><strong>并发控制：</strong> 善用 <code>Promise.all()</code> 实现多任务并行，用 <code>Promise.race()</code> 实现超时控制，用 <code>Promise.allSettled()</code> 等待所有任务完成（不论成功失败）。</li>
      </ul>
      <h2>总结</h2>
      <p>Async/Await 终结了回调地狱。但要记住，滥用 await 会导致本可并行的任务变成串行（阻塞执行），一定要区分串行和并发的场景。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>虽然 JavaScript 拥有自动垃圾回收机制 (Garbage Collection)，但这不意味着开发者可以随心所欲。在复杂单页应用 (SPA) 中，内存泄漏是导致页面崩溃的头号杀手。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>可达性与标记清除 (Mark-and-Sweep)：</strong> JS 引擎假定有一个“根”（全局对象 window）。垃圾回收器会定期从根开始向下搜索，所有不可达（无法访问到）的对象将被标记并回收。</li>
        <li><strong>V8 分代回收策略：</strong> V8 将内存分为新生代和老生代。新生代存放生命周期短的对象，使用 Scavenge 算法（频繁快速）；老生代存放长寿对象，使用标记整理算法。</li>
        <li><strong>四大常见内存泄漏：</strong> 
          1. 意外的全局变量（忘记写 let/const）；
          2. 未清除的定时器 (setInterval) 或事件监听器；
          3. 闭包保存了无用的巨大变量；
          4. 脱离 DOM 的引用（DOM 节点已从文档移除，但 JS 仍保留引用）。
        </li>
        <li><strong>WeakMap / WeakSet：</strong> 这两者的键是“弱引用”。如果键对象在外部被销毁，它们不会阻止垃圾回收，是存储 DOM 节点元数据的完美选择。</li>
      </ul>
      <h2>总结</h2>
      <p>每次组件卸载（如 Vue 的 onUnmounted）时，务必养成清除事件监听、销毁定时器、解绑第三方库实例的好习惯。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>JavaScript 是如何从一行行字符串变成 CPU 能够执行的机器码的？Google Chrome 和 Node.js 背后的核心引擎 V8 为此付出了极为精妙的工程设计。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>解析 (Parsing) 与 AST：</strong> V8 首先将源码经过词法分析和语法分析，转换成抽象语法树 (AST)，这是 Babel、ESLint 等工具工作的核心数据结构。</li>
        <li><strong>解释器 Ignition：</strong> V8 首先使用 Ignition 将 AST 转换为字节码 (Bytecode) 并执行。字节码跨平台且体积小，启动速度快。</li>
        <li><strong>JIT 编译器 TurboFan：</strong> 运行时，V8 会收集代码执行的类型信息。如果一段代码被频繁执行（热点代码 Hot Code），TurboFan 会将其直接编译为高度优化的底层机器码，大幅提升速度。</li>
        <li><strong>隐藏类 (Hidden Classes) 与内联缓存 (Inline Caches)：</strong> 动态类型的 JS 本质上很慢。V8 通过在后台偷偷为对象创建 C++ 结构体般的“隐藏类”，利用内存偏移量直接访问属性，实现了媲美静态语言的属性访问速度。</li>
      </ul>
      <h2>总结</h2>
      <p>了解 V8 的原理能指导我们写出更高性能的代码：例如，始终以相同的顺序初始化对象属性，避免动态添加删除属性，以维持隐藏类的稳定。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>如果说类型声明是 TypeScript 的基础，那么“泛型 (Generics)”和“类型推导”就是 TS 的灵魂。掌握泛型，才能真正写出灵活且类型严密的库级代码。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>泛型基础与约束 (extends)：</strong> 使用 <code>&lt;T&gt;</code> 捕获类型。通过 <code>T extends HTMLElement</code> 可以约束泛型必须满足特定的结构，避免滥用。</li>
        <li><strong>条件类型 (Conditional Types)：</strong> <code>T extends U ? X : Y</code>，类似三元表达式。结合泛型，可以实现根据传入类型动态返回新类型的能力。</li>
        <li><strong> infer 关键字：</strong> 在条件类型中，使用 <code>infer</code> 可以提取嵌套的类型。例如提取函数返回值的类型 (<code>ReturnType</code> 源码)，或者提取 Promise 内部的泛型参数。</li>
        <li><strong>映射类型 (Mapped Types)：</strong> 配合 <code>keyof</code> 操作符，遍历一个对象的所有键并修改其值类型或修饰符（如批量添加只读 <code>readonly</code> 或可选 <code>?</code>）。</li>
      </ul>
      <h2>总结</h2>
      <p>不要在业务代码中过度追求“类型体操”导致代码不可读。但理解这些高级技巧，将极大有助于你读懂开源库的源码和 d.ts 声明文件。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>在 Angular、NestJS 或 TypeORM 中，<code>@Injectable()</code> 这样的语法随处可见。这就是装饰器，它是面向切面编程 (AOP) 和元数据编程的基石。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>装饰器本质：</strong> 装饰器其实就是一个返回函数的函数。它可以用来修饰类、类的方法、访问器、属性以及方法参数。</li>
        <li><strong>执行时机：</strong> 装饰器在文件首次被解析时（类定义阶段）执行，而不是在类实例化时执行。</li>
        <li><strong>类装饰器与方法装饰器：</strong> 类装饰器可以劫持构造函数，向原型注入属性；方法装饰器可以获取方法的 <code>descriptor</code>，从而实现诸如方法耗时统计、权限校验、错误捕获拦截等切面逻辑。</li>
        <li><strong>Reflect Metadata：</strong> 配合 <code>reflect-metadata</code> 库，装饰器可以在运行时保存和读取类型元数据，这是实现依赖注入 (IoC 容器) 最核心的技术。</li>
      </ul>
      <h2>总结</h2>
      <p>随着 ECMAScript 装饰器提案进入 Stage 3，TS 5.0 已经原生支持了标准装饰器。掌握它，能大幅提升 Node后端及大型框架代码的优雅度。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>在日常开发中，我们经常遇到这样的场景：更新接口需要的类型与查询接口几乎一样，但有些字段变为可选，有些字段被剔除。此时重新定义 Interface 极其冗余。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong><code>Partial&lt;T&gt;</code> & <code>Required&lt;T&gt;</code>：</strong> 将类型 T 的所有属性批量设为可选，或批量设为必填。极为适合处理更新(Update)请求的 payload。</li>
        <li><strong><code>Pick&lt;T, K&gt;</code> & <code>Omit&lt;T, K&gt;</code>：</strong> 精准控制。Pick 用于从巨大接口中提取需要的几个字段；Omit 则反之，剔除掉敏感字段（如 password、id）后生成新类型。</li>
        <li><strong><code>Record&lt;K, T&gt;</code>：</strong> 快速构造字典类型。例如 <code>Record&lt;string, UserInfo&gt;</code>，替代繁琐的 <code>{ [key: string]: UserInfo }</code>。</li>
        <li><strong><code>Exclude&lt;T, U&gt;</code> & <code>Extract&lt;T, U&gt;</code>：</strong> 专门针对联合类型 (Union) 进行过滤和提取。</li>
      </ul>
      <h2>总结</h2>
      <p>熟记并组合使用内置的 Utility Types，可以让你的类型定义 DRY (Don't Repeat Yourself)，并且与源类型保持严格的联动关系。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>在 TS 中定义对象结构，到底是用 <code>interface User {}</code> 还是 <code>type User = {}</code>？这是每个新手甚至老手都会纠结的问题。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>声明合并 (Declaration Merging)：</strong> 只有 Interface 支持声明合并。如果定义了两个同名的 interface，它们会自动合并属性。这是给全局 Window 或第三方库编写扩展声明的唯一方式。</li>
        <li><strong>高级类型操作：</strong> Type Alias 可以表达基本类型别名、联合类型 (Union <code>A | B</code>)、元组以及利用条件类型做复杂的类型推导，而 Interface 仅能描述对象/函数结构。</li>
        <li><strong>性能差异：</strong> 在非常复杂的巨型项目中，Interface 的缓存解析性能通常比交叉类型 (<code>TypeA & TypeB</code>) 更好。</li>
        <li><strong>错误提示：</strong> Interface 的错误提示通常更加直观，直接指向接口名称，而复杂的 Type 推导可能会抛出极长的结构展开错误。</li>
      </ul>
      <h2>总结</h2>
      <p>业内推荐规范：对于描述数据的普通实体对象结构，首选 <code>interface</code>；对于定义联合类型、复杂的泛型推导逻辑，使用 <code>type</code>。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p><code>tsconfig.json</code> 控制着 TypeScript 编译器的行为。一套严谨合理的配置，是保证团队代码质量、类型安全和编译性能的地基。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong><code>strict: true</code>：</strong> 毫无商量余地，必须开启。它涵盖了 <code>noImplicitAny</code>（禁止隐式 any）和 <code>strictNullChecks</code>（严格的空值检查）等，是防范运行时报错的终极保护伞。</li>
        <li><strong><code>target</code> 与 <code>module</code>：</strong> 决定了编译后的 JS 版本和模块规范。现代前端配合 Vite 等工具，通常设置 <code>target: "ESNext"</code> 和 <code>module: "ESNext"</code>，交由构建工具去处理降级。</li>
        <li><strong><code>paths</code> 与 <code>baseUrl</code>：</strong> 配置路径别名（如 <code>"@/*": ["src/*"]</code>），彻底告别 <code>../../../../utils</code> 这种地狱级别的相对路径引入。</li>
        <li><strong><code>isolatedModules</code>：</strong> 确保每个文件都能安全地被 Babel 或 esbuild 等单文件转译工具处理。</li>
      </ul>
      <h2>总结</h2>
      <p>不要害怕报错。TypeScript 的报错是在帮你提前发现 bug，越严格的 TSConfig，项目在后期的维护成本就越低。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Vue 3 带来的最大变革就是 Composition API (组合式 API)。它打破了 Vue 2 依据 <code>data, methods, computed</code> 分类放置代码的束缚。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>逻辑关注点内聚：</strong> 在复杂的组件中，相关联的业务逻辑（状态、计算属性、侦听器）现在可以紧凑地写在一块，阅读代码时无需上下反复横跳。</li>
        <li><strong>极致的逻辑复用 (Composables)：</strong> 取代了易造成命名冲突和来源不明的 Mixins。通过提取 <code>useXXX()</code> 函数，状态与逻辑可以像拼图一样被安全地引入任意组件。</li>
        <li><strong><code>&lt;script setup&gt;</code> 语法糖：</strong> 抛弃繁琐的 <code>export default { setup() { return {...} } }</code>。顶层变量自动暴露给模板，极大幅度减少了样板代码，并天生具备优秀的 TS 类型推导。</li>
        <li><strong>响应式宏 (Macros)：</strong> <code>defineProps</code> 和 <code>defineEmits</code> 提供了编译器宏级别的支持，让组件间的接口定义清晰且类型安全。</li>
      </ul>
      <h2>总结</h2>
      <p>Composition API 并非是为了取代 Options API，而是为了应对中大型项目维护痛点。思维转换是痛苦的，但习惯后你将再也回不去。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Vue 框架的核心就是数据驱动视图。Vue 3 将底层响应式引擎从 <code>Object.defineProperty</code> 彻底替换为了 ES6 的 <code>Proxy</code>。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>defineProperty 的局限：</strong> Vue 2 必须递归遍历对象的所有属性去劫持 getter/setter。它无法检测对象属性的动态添加与删除，也无法完美监听数组的索引修改，因此衍生了 <code>$set</code> 等补丁方案。</li>
        <li><strong>Proxy 全面拦截：</strong> Proxy 可以代理整个对象，拦截包括读取、赋值、属性删除 (delete)、键遍历等多达 13 种底层操作。从此告别 <code>Vue.$set</code>。</li>
        <li><strong>按需深度响应 (Lazy Evaluation)：</strong> Vue 3 只有在深层属性被访问到时，才会将其包装为 Proxy。这种惰性代理机制极大提升了首屏初始化含有巨型数据对象时的性能。</li>
        <li><strong><code>ref</code> vs <code>reactive</code>：</strong> Proxy 只能代理对象，无法代理基本数据类型（数字、字符串）。因此 Vue 提供了 <code>ref</code>，本质上是对值封装了一层拥有 <code>.value</code> 属性的对象拦截。</li>
      </ul>
      <h2>总结</h2>
      <p>理解 Proxy 的拦截机制，能让你彻底弄懂为什么解构 <code>reactive</code> 对象会丢失响应式，以及如何正确使用 <code>toRefs</code>。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Pinia 已经正式成为 Vue 的官方状态管理库，取代了曾经的 Vuex。它更加轻量、直观，并且对 TypeScript 支持极佳。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>移除 Mutations：</strong> 这是最爽的改进！直接在 Actions 中书写同步或异步逻辑并修改 state，消除了 Vuex 中繁琐冗长的 commit 模板代码。</li>
        <li><strong>极致的 TypeScript 支持：</strong> Pinia 的 API 设计使其天生具备完整的类型推导，不再需要像 Vuex 那样手写复杂的类型声明，自动补全丝滑体验。</li>
        <li><strong>扁平化架构 (No Nested Modules)：</strong> 放弃了 Vuex 复杂的嵌套模块架构。在 Pinia 中，每一个 Store 都是独立的，它们可以通过直接引入 (import) 互相调用，灵活性极高。</li>
        <li><strong>Setup Store 语法：</strong> 支持类似 Composition API 的写法定义 Store，允许在 Store 内部自由使用 <code>watch</code>、<code>computed</code> 以及注入其他的 Composables。</li>
      </ul>
      <h2>总结</h2>
      <p>Pinia 就是更简单、更现代的 Vuex 5。无论是小型项目还是企业级中台，Pinia 都是 Vue 生态状态管理的首选。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>路由是单页应用 (SPA) 的骨架。Vue Router 4 不仅支持了 Vue 3，还提供了更为强大的导航守卫和动态路由能力。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>全局路由守卫 (beforeEach)：</strong> 是实现登录拦截、页面级权限控制 (RBAC) 和改变文档标题 (document.title) 的核心枢纽。</li>
        <li><strong>动态路由 (addRoute / removeRoute)：</strong> 配合后端接口，可以在用户登录后，动态注入其拥有权限的菜单路由。这是实现后台管理系统动态菜单的基石。</li>
        <li><strong>组件内守卫 (beforeRouteEnter)：</strong> 在组件被复用或进入前执行逻辑，可用于提前获取数据避免页面闪烁，或者处理从列表页到详情页的滚动位置恢复。</li>
        <li><strong>RouterView 与 KeepAlive：</strong> 结合 <code>&lt;router-view v-slot&gt;</code>、<code>&lt;KeepAlive&gt;</code> 和 <code>&lt;Transition&gt;</code>，实现页面级别的缓存和丝滑的切换动效。</li>
      </ul>
      <h2>总结</h2>
      <p>安全严谨的路由守卫是一个成熟 Web 系统的第一道防线。合理管控路由权限，不要将敏感路由暴露给未授权用户。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Vue 3 本身已经足够快，但在处理超大数据量或复杂交互时，依然需要开发者采取主动的性能调优策略。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>路由懒加载与组件按需引入：</strong> 使用 <code>defineAsyncComponent</code> 和动态 <code>import()</code> 进行代码分割 (Code Splitting)，将首屏体积压缩到极致。</li>
        <li><strong>规避响应式开销：</strong> 对于庞大的只读数据（如省市区列表或地图 GeoJSON），使用 <code>shallowRef</code> 或 <code>markRaw</code> 阻止 Vue 对其深层属性进行响应式代理，极大节约内存。</li>
        <li><strong><code>v-memo</code> 缓存渲染树：</strong> 在长列表中，如果某行的数据没有变化，<code>v-memo</code> 可以直接跳过该节点的 Virtual DOM 对比与渲染，性能提升显著。</li>
        <li><strong>虚拟滚动 (Virtual Scroller)：</strong> 面对万级以上的数据列表，切勿直接使用 <code>v-for</code>。引入虚拟列表组件，只渲染视口可见区域的 DOM 节点。</li>
      </ul>
      <h2>总结</h2>
      <p>性能优化应当有的放矢。先用 Chrome Performance 面板或者 Vue Devtools 进行瓶颈分析，再应用上述高级策略。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>自从 React 16.8 引入 Hooks 以来，函数组件成为了绝对的主流。但无数开发者在 <code>useEffect</code> 的依赖数组和“闭包陷阱”中痛苦挣扎。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>每一次渲染都有自己的状态：</strong> 必须建立这个心智模型。函数组件每次重新执行（渲染）时，其内部的 <code>const state</code>、事件处理函数和 <code>useEffect</code> 都是全新的独立闭包。</li>
        <li><strong><code>useEffect</code> 不是生命周期：</strong> 不要用 <code>componentDidMount</code> 的思维去思考 Effect。Effect 是用于“同步外部系统（如 DOM、网络、订阅）与 React 当前状态”的范式。</li>
        <li><strong>诚实对待依赖数组 (deps)：</strong> 凡是在 Effect 内部使用到的、在组件作用域内声明的变量/函数，都必须加入依赖数组。对 Linter 撒谎最终会导致难以调试的闭包拿到旧值 (Stale Closure) 问题。</li>
        <li><strong>使用 <code>useRef</code> 逃生：</strong> 如果你确实需要在 Effect 中读取最新状态，但不希望该状态变化触发 Effect 重新运行，可以将其保存在 <code>useRef</code> 的 <code>.current</code> 属性中。</li>
      </ul>
      <h2>总结</h2>
      <p>Hooks 看似简单的 API 背后，要求开发者对 JavaScript 闭包和 React 渲染流有深刻的理解。顺应数据流的方向，才是正道。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>在 React 15 及更早版本，复杂的 Virtual DOM diff 计算一旦开始就无法停止，导致主线程长时间阻塞。Fiber 架构的诞生彻底改变了这一局面。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>链表结构：</strong> Fiber 本质上是一种数据结构。它将原本递归的树状结构变为了带指针的单链表（子节点、兄弟节点、父节点），这使得遍历过程可以随时挂起和恢复。</li>
        <li><strong>时间切片 (Time Slicing)：</strong> React 将渲染工作拆分为一个个小的工作单元（Fiber 节点）。利用 <code>requestIdleCallback</code> 的机制，在浏览器每帧的空闲时间去执行这些任务。</li>
        <li><strong>可中断与优先级调度：</strong> 如果在渲染过程中，用户触发了高优先级的操作（如点击、输入），React 可以立刻中断低优先级的渲染任务，优先响应用户交互，从而保证页面丝滑。</li>
        <li><strong>双缓冲树 (Double Buffering)：</strong> React 在内存中维护两棵 Fiber 树：当前屏幕显示的 <code>current</code> 树和正在内存中构建的 <code>workInProgress</code> 树。当渲染完成后，迅速替换指针实现无缝更新。</li>
      </ul>
      <h2>总结</h2>
      <p>Fiber 架构使得 Concurrent Mode (并发模式) 成为可能。它是 React 为实现超大应用极致性能和极致用户体验而交出的工业级答卷。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>老旧的 Redux 常常被诟病：要配置一堆中间件、写无尽的 switch-case reducer 和繁琐的 action types。Redux Toolkit (RTK) 官方推荐方案横空出世解决了一切。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong><code>createSlice</code> 降维打击：</strong> 将 reducer、actions、action creators 打包在一起。你只需定义 state 和修改它的函数，RTK 会自动推导出其余所有繁琐内容。</li>
        <li><strong>内置 Immer.js 支持变异写法：</strong> 在 RTK 中，你可以直接 <code>state.value += 1</code> 或 <code>state.user.name = 'foo'</code>。底层的 Immer 会自动将其转换为不可变 (Immutable) 的新状态。</li>
        <li><strong>开箱即用的中间件：</strong> 默认配置了 Redux Thunk 支持异步逻辑，同时在开发环境下自动开启可变性检查和 DevTools 支持。</li>
        <li><strong>RTK Query 数据抓取：</strong> 彻底改变了前端 API 请求的方式。它内置了数据缓存、轮询、缓存失效、乐观更新等企业级功能，极大减少了业务组件中的 loading 和 error 状态管理代码。</li>
      </ul>
      <h2>总结</h2>
      <p>忘掉过去的 Redux 模板代码吧。现代 React 开发中，RTK 配合 React-Redux 的 Hooks 是非常强大且高效的数据管理方案。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>当 React 组件重新渲染时，内部的函数会被重新创建，普通的计算逻辑会重新执行。为了避免无畏的开销，React 提供了缓存 Hooks，但它们常被滥用。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong><code>useMemo</code> 缓存计算结果：</strong> 当你有一段高开销的同步计算逻辑（如对包含上千条数据的数组进行过滤、排序）时，使用 <code>useMemo</code>，只有当依赖项变化时才重新计算。</li>
        <li><strong><code>useCallback</code> 缓存函数引用：</strong> 用于保证函数内存地址的稳定。它<strong>只在一种情况下有显著作用</strong>：当你将这个函数作为 Props 传递给使用 <code>React.memo</code> 包裹的子组件时。</li>
        <li><strong>不要过度优化：</strong> <code>useMemo</code> 和 <code>useCallback</code> 本身也需要执行依赖对比和闭包分配，这是有性能成本的。对于简单的运算或普通组件的 Props 传递，完全不需要包裹它们。</li>
        <li><strong>状态下放与内容提升：</strong> 相比于到处写 Memo，更高级的优化是：将频繁变化的状态抽离到独立的子组件中（状态下放），或者利用 <code>children</code> prop 将不变的结构分离出来（内容提升），从根源上阻断渲染扩散。</li>
      </ul>
      <h2>总结</h2>
      <p>优化必须基于数据度量。在没有遇到真正的性能瓶颈前，请保持代码的简单纯粹。过度包裹不仅毫无增益，还会让代码可读性大打折扣。</p>
    `,
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
    content: `
      <h2>引言</h2>
      <p>Next.js 引入 App Router 架构后，彻底拥抱了 React 的前沿特性，标志着服务端渲染 (SSR) 和同构应用范式迈入了全新的时代。</p>
      <h2>核心技术点</h2>
      <ul>
        <li><strong>React Server Components (RSC)：</strong> 默认情况下，App Router 中的组件都是服务端组件。它们只在服务器端运行，可直接访问数据库，且**不打包进客户端的 JS bundle 中**，实现了极致的首屏加载性能。</li>
        <li><strong>Client Components 界限：</strong> 只有当组件需要交互（如 <code>onClick</code>）、使用状态 (<code>useState</code>) 或浏览器 API 时，才在文件顶部声明 <code>"use client"</code>，将其转化为客户端组件。</li>
        <li><strong>数据抓取与缓存：</strong> 抛弃了 <code>getServerSideProps</code>，直接在服务端组件中写 <code>const data = await fetch()</code>。Next.js 增强了原生 <code>fetch</code> API，实现了细粒度的数据缓存与重载控制。</li>
        <li><strong>Streaming 与 Suspense：</strong> 利用 React Suspense，可以将页面的不同部分（如侧边栏、主内容）分块流式传输给浏览器，用户无需等待整个页面数据准备完毕即可看到首屏 UI。</li>
      </ul>
      <h2>总结</h2>
      <p>App Router 是 React 走向全栈的里程碑。它要求开发者在“服务端代码”和“客户端交互”之间划清界限，从而构建出兼具动态交互与变态级性能的下一代 Web 应用。</p>
    `,
  },
  // Projects
  {
    id: 701,
    category: 'vue',
    image: '/projects/smart_energy.png',
    title: '智慧能源可视化调度系统：架构设计与实现',
    desc: '深度解析基于 AntV X6 与 Vue 3 构建的大规模能源拓扑调度系统的核心技术点。',
    tag: '系统架构',
    author: '架构师',
    time: '刚刚',
    content: `
      <h2>项目背景</h2>
      <p>在智慧能源管理领域，如何直观、高效地展示和调度复杂的能源拓扑网络是一个巨大的挑战。本项目旨在构建一个能够支撑数万个节点实时交互的可视化调度控制台。</p>
      <h2>核心技术实现</h2>
      <ul>
        <li><strong>AntV X6 图引擎定制：</strong> 深度定制 X6 的节点渲染逻辑，利用 HTML 节点配合 Vue 3 的局部更新特性，实现了复杂业务 UI 的高性能渲染。</li>
        <li><strong>大规模节点性能优化：</strong> 引入了图形分层渲染与“视口外剔除”策略。在处理超大规模拓扑图时，仅对当前视口内的元素进行重绘，将交互延迟降低了 80%。</li>
        <li><strong>自动化逻辑校验：</strong> 基于 DAG (有向无环图) 算法实现实时的拓扑逻辑校验，防止调度方案中出现环路或非法连接。</li>
        <li><strong>数据驱动的状态同步：</strong> 结合 Pinia 实现图形状态与业务数据的双向绑定，确保每一处点击都能实时反映在调度模型中。</li>
      </ul>
      <h2>总结与展望</h2>
      <p>通过本次实践，我们证明了 Web 技术在处理高复杂、高交互的工业级场景中依然具备极强的竞争力。未来我们将探索 WebGPU 在拓扑布局计算中的应用。</p>
    `,
    implementationPlan: `
      <h3>第一阶段：基础架构搭建 (1-2周)</h3>
      <p>建立基于 Vite + Vue 3 的工程化底座，集成 AntV X6 核心库，并完成自定义节点 (Custom Node) 的基类开发。</p>
      <h3>第二阶段：核心功能开发 (3-5周)</h3>
      <p>实现 DAG 拓扑解析引擎，开发拖拽式建模交互逻辑。引入 Canvas 层叠渲染机制处理高频动画反馈。</p>
      <h3>第三阶段：性能调优与稳定化 (6-8周)</h3>
      <p>针对万级节点进行内存泄露排查与渲染管线优化。集成 Pinia 实现撤销重做 (Undo/Redo) 功能，并完成方案导出模块。</p>
    `,
  },
  {
    id: 702,
    category: 'html5',
    image: '/projects/ecommerce.png',
    title: '高性能企业级电商 PWA 演进之路',
    desc: '从传统单页应用到 PWA 架构，揭秘如何通过 Service Worker 打造极致的购物体验。',
    tag: 'PWA实践',
    author: '全栈专家',
    time: '刚刚',
    content: `
      <h2>引言</h2>
      <p>电商应用对加载速度和稳定性极度敏感。PWA (Progressive Web App) 为我们提供了在弱网甚至离线环境下保持应用可用的终极方案。</p>
      <h2>核心优化策略</h2>
      <ul>
        <li><strong>骨架屏预加载 (App Shell)：</strong> 将应用的核心 UI 框架缓存为 App Shell，确保用户在点击图标后瞬间看到基本结构，消除白屏焦虑。</li>
        <li><strong>离线缓存策略：</strong> 针对首页和商品详情页采用 "Stale-While-Revalidate" 策略，既保证了极速加载，又能在后台静默更新商品价格和库存信息。</li>
        <li><strong>后台同步与推送：</strong> 利用 Background Sync 确保用户在电梯或地铁等断网环境下下单后，恢复网络时订单能自动提交，大幅提升转化率。</li>
        <li><strong>安装与沉浸式体验：</strong> 通过 Web App Manifest 配置，引导用户将应用添加到桌面，实现无地址栏的全屏沉浸式购物。</li>
      </ul>
      <h2>实施成果</h2>
      <p>在完成 PWA 改造后，我们的首屏加载时间缩短了 45%，在印度等弱网市场的活跃度提升了 30% 以上。</p>
    `,
    implementationPlan: `
      <h3>第一阶段：环境准备与 Manifest 配置 (1周)</h3>
      <p>配置 Web App Manifest 文件，设定启动画面、图标及主题色。在 Vite 配置中集成 \`vite-plugin-pwa\`。</p>
      <h3>第二阶段：Service Worker 策略设计 (2-3周)</h3>
      <p>根据资源类型划分缓存级别。图片使用 CacheFirst，API 接口使用 Stale-While-Revalidate，App Shell 使用 NetworkFirst 以确保即时更新。</p>
      <h3>第三阶段：离线交互与通知推送 (4周)</h3>
      <p>实现离线状态下的 UI 友好提示，开发 Background Sync 任务队列处理断网订单，并集成 Web Push API 进行精准营销。</p>
    `,
  },
  {
    id: 703,
    category: 'javascript',
    image: '/projects/editor.png',
    title: '分布式协作编辑器：协同算法与冲突处理',
    desc: '深入探讨基于 WebSocket 与多端同步协议构建的实时协作编辑器的底层原理。',
    tag: '分布式协作',
    author: '算法工程师',
    time: '刚刚',
    content: `
      <h2>项目初衷</h2>
      <p>在文档协作日益频繁的今天，构建一个像 Google Docs 一样流畅的多人实时协作编辑器是许多企业的核心需求。本项目专注于解决多端并发冲突与数据一致性问题。</p>
      <h2>关键技术突破</h2>
      <ul>
        <li><strong>实时通讯链路：</strong> 基于 Socket.io 构建双向全双工通讯，实现了毫秒级的变更广播。</li>
        <li><strong>冲突仲裁机制：</strong> 弃用了复杂的 OT 算法，采用更为现代且易于扩展的 CRDT (无冲突复制数据类型) 方案，确保在任何网络分区恢复后，所有端都能达成最终一致性。</li>
        <li><strong>版本轨迹追踪：</strong> 实现了一套高效的快照与增量存储方案，用户可以随时通过时光机功能回滚到任何一个历史编辑版本。</li>
        <li><strong>富文本编辑器集成：</strong> 深度集成了 Quill 编辑器，并将其底层 Delta 模型与分布式协议完美适配。</li>
      </ul>
      <h2>总结</h2>
      <p>分布式系统的复杂性在实时协作中体现得淋漓尽致。CRDT 的引入让状态管理变得更加直观且强健，为未来的多端协同奠定了坚实的基础。</p>
    `,
    implementationPlan: `
      <h3>第一阶段：协议选型与原型验证 (2周)</h3>
      <p>对比 Yjs 和 Automerge 性能，选择 Yjs 作为底层的 CRDT 库。搭建 Node.js WebSocket 服务端原型。</p>
      <h3>第二阶段：编辑器深度集成 (3-4周)</h3>
      <p>将 Quill 的 Delta 数据模型转换为 Yjs 的共享类型。实现多端光标同步与在线用户状态感知。</p>
      <h3>第三阶段：容错性与持久化增强 (5-6周)</h3>
      <p>开发离线编辑本地缓存逻辑，实现网络重连后的自动同步。在后端集成 PostgreSQL 存储文档快照与增量日志。</p>
    `,
  },
];
