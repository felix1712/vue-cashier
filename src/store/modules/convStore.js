export default {
	state: {
		dummyCs: [
			{
				id: 1,
				name: 'Aflamart',
				codeMf: 'Aflamart',
				image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/11452/19/10248/2033/5c7e486bE45e02b27/d87a3eb7199d38b7.png',
			},
		],
		csModel: null,
		csForm: null,
	},
	mutations: {
		updateCsModel(state, value) {
			state.csModel = value;
		},
		updateCsForm(state, value) {
			state.csForm = value;
		},
	},
	actions: {
	},
};
