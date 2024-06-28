import { h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { DashboardOutlined, PieChartOutlined, MessageOutlined } from '@ant-design/icons-vue';

export const routes = [
  	{
    path: '',
    redirect: '/index',
    component: () => import('@/layouts/index.vue'),
    children: [
      // 首页
		{
			path: '/index',
			name: 'dashboard',
			meta: {
        title: '控制台',
        label: '控制台',
        key: '/index',
        icon: () => h(DashboardOutlined)
			},
			component: () => import('@/views/dashboard/index.vue')
		},
		{
			path: '/home',
			name: 'home',
			meta: {
        title: '首页',
        label: '首页',
        key: '/home',
        icon: () => h(PieChartOutlined)
			},
			component: () => import('@/views/home/index.vue')
		},
		{
			path: '/chat',
			name: 'chat',
			meta: {
        title: '聊天',
        label: '聊天',
        key: '/chat',
        icon: () => h(MessageOutlined)
			},
			component: () => import('@/views/chat/index.vue')
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			meta: {
        title: '个人中心',
        label: '个人中心',
        key: '/userCenter',
        icon: () => h(MessageOutlined)
			},
			component: () => import('@/views/dropdown/userCenter.vue')
		},
    ],
  },
  // 登录
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      needLogin: false,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
