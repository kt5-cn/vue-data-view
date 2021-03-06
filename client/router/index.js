import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**  各个模块 */
export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: () => import('@/pages/home/index'),
		redirect: { name: 'projectCreate' },
		children: [{
			path: '/project-create',
			name: 'projectCreate',
			component: () => import('@/pages/home/project-create'),
		}, {
			path: '/data-create',
			name: 'dataCreate',
			component: () => import('@/pages/home/data-create'),
		}, {
			path: '/pic-create',
			name: 'picCreate',
			component: () => import('@/pages/home/pic-create'),
		}, {
			path: '/threejs-create',
			name: 'threejsCreate',
			component: () => import('@/pages/home/threejs-create'),
		}]
	},{
		path: '/power-editor',
		name: 'PowerEditor',
		component: () => import('@/pages/power-editor/power-editor')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/pages/loginfor'),
		meta: {
			hideHeader: true,
			trust: true,
			noNeedLogin: true
		}
	},{
		path: '/template-create',
		name: 'templateCreate',
		component: () => import('@/pages/home/template-create'),
	},{
		path: '/css-create',
		name: 'cssCreate',
		component: () => import('@/pages/css/interview'),
		meta: {
			trust: true,
			noNeedLogin: true
		}
	},{
		path: '/js-create',
		name: 'jsCreate',
		component: () => import('@/pages/js/interview'),
		meta: {
			trust: true,
			noNeedLogin: true
		}
	}]
})
