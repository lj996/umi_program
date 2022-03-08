import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      menu: {
        name: '首页',
      },
    },
    { path: '/user', component: '@/pages/user', name: '用户' },
  ],
  fastRefresh: {},
  publicPath: './',
});
