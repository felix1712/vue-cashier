import Vue from 'vue';
import Vuex from 'vuex';
import onlinePay from './modules/onlinePay';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { // modules must be included in import
		onlinePay,
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
