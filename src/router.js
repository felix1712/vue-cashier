import Vue from 'vue';
import Router from 'vue-router';
import PageCashier from './views/PageCashier.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'page-cashier',
			component: PageCashier,
		},
	],
});
