import { defineConfig } from 'umi';

export default defineConfig({
  layout: { title: '龙俊的实验室', logo: null, headerRender: false },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/price',
      name: '报价计算器',
      icon: 'AccountBookOutlined',
    },
    {
      path: '/particle',
      component: '@/pages/index',
      name: '粒子效果',
      icon: 'NodeIndexOutlined',
    },
    {
      path: '/3d',
      component: '@/pages/three',
      name: '3D',
      icon: 'SwitcherTwoTone',
    },
  ],
  fastRefresh: {},
  publicPath: './',
});
