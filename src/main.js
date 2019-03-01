import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import { customJs } from '@/mixins/custom';

Vue.config.productionTip = false;


new Vue({
	mixins: [customJs],
	router,
	store,
	render: h => h(App),
}).$mount('#app');
