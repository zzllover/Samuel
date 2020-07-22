import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/login' },
    { path: '/main', component: '@/pages/lists' },
    { path: '/detail', component: '@/pages/detail' },
    { path: 'profile', component: '@/pages/profile' },
  ],
});
