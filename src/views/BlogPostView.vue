<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { blogPosts, type BlogPost as Post } from '@/data/blog';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const post = ref<Post>({
  id: 0,
  title: '加载中...',
  date: '',
  ref: '',
  content: '',
  category: '',
  excerpt: '',
});

onMounted(() => {
  const found = blogPosts.find((p) => p.id === Number(id));
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
