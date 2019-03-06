import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import customJs from '@/mixins/custom';
import { currencyFilter } from '@/mixins/filter';

Vue.config.productionTip = false;
Vue.filter('currencyFilter', currencyFilter);
Vue.prototype.$eventBus = new Vue();

new Vue({
	mixins: [customJs],
	router,
	store,
	render: h => h(App),
}).$mount('#app');
