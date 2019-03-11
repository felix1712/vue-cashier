export default {
	state: {
		dummyMf: [
			{
				id: 11,
				name: 'Kredivo',
				codeMf: 'kredivo',
				image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/11452/19/10248/2033/5c7e486bE45e02b27/d87a3eb7199d38b7.png',
			},

			{
				id: 12,
				name: 'Krediplus',
				codeMf: 'krediplus',
				image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/10334/33/13138/2163/5c7e48c6E474fc8d4/7065ec18c705b387.png',
			},

			{
				id: 13,
				name: 'Akulaku',
				codeMf: 'akulaku',
				image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/26808/11/9535/1447/5c7e48adE20d04d72/130e39e3e3224f01.png',
			},
		],
		mfModel: null,
		mfPeriod: null,
	},
	mutations: {
		updateMfModel(state, value) {
			state.mfModel = value;
			console.log(state.mfModel);
		},
		updateMfPeriode(state, value) {
			state.mfPeriod = value;
			console.log(state.mfPeriod);
		},
	},
	actions: {
	},
};
