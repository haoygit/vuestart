<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

interface Post {
  title: string;
  date: string;
  ref: string;
  content: string;
  category: string;
}

const post = ref<Post>({
  title: '加载中...',
  date: '',
  ref: '',
  content: '',
  category: '',
});

onMounted(() => {
  const mockPosts: Record<string, Post> = {
    '1': {
      title: '复杂业务场景下的 Vue 组合式函数抽象',
      date: '2024.03.20',
      ref: 'DOC_001',
      category: 'ARCH_DEV',
      content:
        '本文档详细记录了在處理超大型表单系统时，如何利用 Vue 3 的 Composition API 进行跨组件的逻辑切片与封装。 \n\n我们采用了“逻辑仓库”模式，将所有的副作用处理、校验规则与数据格式化逻辑从视图层完全剥离。 \n\n结论：该架构将单个业务组件的代码量降低了 60% 以上，并大幅提升了逻辑的可测试性。',
    },
    '2': {
      title: '前端工程化：自动化环境与质量守卫',
      date: '2024.03.15',
      ref: 'DOC_002',
      category: 'ENG_QA',
      content:
        '本报告探讨了在分布式团队开发环境下，如何通过强约束的 Linter、Git Hooks 以及自动化 CI 脚本来控制代码递交质量。 \n\n主要实践包括：基于 Vite 的预构建优化、模块依赖图谱分析、以及关键路径的单元测试覆盖率强制要求。',
    },
    '3': {
      title: '从零开始：构建稳定可靠的 PWA 离线体系',
      date: '2024.03.01',
      ref: 'DOC_003',
      category: 'PERF_OPT',
      content:
        '本文档记录了 PWA 方案在正式环境下的部署全过程。 \n\n核心关注点在于对 Cache Storage 的离线版本回滚机制。我们通过 Service Worker 拦截请求，并实现了一套基于优先级的缓存查找算法，确保用户在弱网环境下依然能获得稳定的访问体验。',
    },
  };

  const found = mockPosts[id as string];
  if (found) {
    post.value = found;
  } else {
    router.push('/blog');
  }
});
</script>

<template>
  <div class="post-detail fade-in">
    <button @click="router.back()" class="back-link">// RETURN_TO_INDEX</button>

    <header class="detail-header">
      <div class="header-top">
        <span class="ref-id">{{ post.ref }}</span>
        <span class="line"></span>
        <span class="category">{{ post.category }}</span>
      </div>
      <h1>{{ post.title }}</h1>
      <div class="post-date">RELEASED: {{ post.date }}</div>
    </header>

    <div class="post-content">
      <p v-for="(p, i) in post.content.split('\n\n')" :key="i">
        {{ p }}
      </p>
    </div>

    <div class="doc-footer">// END_OF_FILE // CONFIDENTIAL</div>
  </div>
</template>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  background: none;
  border: none;
  color: var(--primary);
  font-family: monospace;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  margin-bottom: 48px;
}

.detail-header {
  margin-bottom: 64px;
  border-bottom: 4px solid var(--primary-light);
  padding-bottom: 32px;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  font-family: monospace;
  font-weight: 800;
  color: var(--primary);
}

.line {
  flex-grow: 1;
  height: 1px;
  background: var(--glass-border);
}

.post-date {
  font-size: 13px;
  color: var(--text-muted);
  font-family: monospace;
  margin-top: 16px;
}

h1 {
  font-size: 40px;
  line-height: 1.3;
  margin: 0;
}

.post-content {
  font-size: 18px;
  line-height: 2;
  color: var(--text-main);
  margin-bottom: 80px;
}

.doc-footer {
  text-align: center;
  padding: 40px 0;
  border-top: 1px dashed var(--glass-border);
  color: var(--text-muted);
  font-family: monospace;
  font-size: 12px;
}
</style>
