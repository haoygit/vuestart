import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/html5',
    },
    {
      path: '/html5',
      name: 'html5',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/css3',
      name: 'css3',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/typescript',
      name: 'typescript',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/react',
      name: 'react',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: () => import('../views/ArticleDetailView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
  ],
});

export default router;
