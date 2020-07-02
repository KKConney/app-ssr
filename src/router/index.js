import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 需要给每个请求一个新的 router 实例，所以文件导出一个 createRouter 工厂函数
export function createRouter () {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				redirect: '/home'
			},{
				path: '/home',
				name: 'home',
				component: () => import('../views/Home.vue')
			},
			{
				path: '/detail',
				name: 'detail',
				component: () => import('../views/Detail.vue')
			}
		]
	})
}
