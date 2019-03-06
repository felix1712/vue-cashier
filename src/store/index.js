import Vue from 'vue';
import Vuex from 'vuex';
import onlinePay from './modules/onlinePay';
import multiFinance from './modules/multiFinance';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { // modules must be included in import
		onlinePay,
		multiFinance,
	},

	state: { // data
	},
	getters: { // computed property
	},
	mutations: { // change data state
	},
	actions: { // methods property
		// make the call
		// call mutations
	},
});
