import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import customJs from '@/mixins/custom';
import { currency } from '@/mixins/filter';
import './event-bus';


Vue.config.productionTip = false;
Vue.filter('currency', currency);

new Vue({
	mixins: [customJs],
	router,
	store,
	render: h => h(App),
}).$mount('#app');
