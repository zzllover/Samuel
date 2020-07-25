import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/login' },
    {
      path: '/main',
      component: '@/pages/lists',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/detail',
      component: '@/pages/detail',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/profile',
      component: '@/pages/profile',
      wrappers: ['@/wrappers/auth'],
    },
    { path: '/test', component: '@/pages/test' },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      //'pathRewrite': { '^/api' : '' },s
    },
  },
});
