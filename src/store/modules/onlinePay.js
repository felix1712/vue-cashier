export default {
	// namespaced: true, // not required yet
	state: {
		cardNoModel: null,
		holderNameModel: null,
		cvvModel: null,
		expiredDateModel: null,
		periodValue: null,
		hasError: {
			noCard: {
				errorMessage: null,
			},
			holderName: {
				errorMessage: null,
			},
			cvv: {
				errorMessage: null,
			},
			expiredDate: {
				errorMessage: null,
			},
		},

		// dummy data
		dummyCard: [
			{
				id: 1,
				nomorKartu: '4556330069036953',
				namaPemegang: 'Felix Andrean',
				expiredCard: '12/24',
				typeCard: 'visa',
				promo: true,
			},
			{
				id: 2,
				nomorKartu: '4556330069036933',
				namaPemegang: 'Ilham Raenaldi',
				expiredCard: '05/23',
				typeCard: 'mastercard',
				promo: false,
			},
			{
				id: 3,
				nomorKartu: '4556330069036913',
				namaPemegang: 'Wahyu Kadal',
				expiredCard: '01/19',
				typeCard: 'visa',
				promo: false,
			},
			{
				id: 4,
				nomorKartu: '4556330069036993',
				namaPemegang: 'Wahyu Kadal Buntung',
				expiredCard: '03/19',
				typeCard: 'visa',
				promo: true,
			},
			{
				id: 5,
				nomorKartu: '4556330069036983',
				namaPemegang: 'Radiyan Abi Priyanda',
				expiredCard: '06/20',
				typeCard: 'mastercard',
				promo: false,
			},
		],

		dummyPeriods: [
			{
				id: 1,
				periodName: 'Full Payment',
				periodPrice: 150000,
				disabled: false,
			},
			{
				id: 2,
				periodName: '3',
				periodPrice: 50000,
				disabled: false,
			},
			{
				id: 3,
				periodName: '6',
				periodPrice: 25000,
				disabled: true,
			},
			{
				id: 4,
				periodName: '12',
				periodPrice: 12500,
				disabled: false,
			},
			{
				id: 5,
				periodName: '18',
				periodPrice: 8400,
				disabled: false,
			},
			{
				id: 6,
				periodName: '24',
				periodPrice: 6250,
				disabled: true,
			},
		],
	},
	getters: {
	},
	mutations: {
		updateCardNoModel(state, value) {
			state.cardNoModel = value;
		},

		udpateHolderName(state, value) {
			state.holderNameModel = value;
		},

		updateCvvModel(state, value) {
			state.cvvModel = value;
		},

		updateExpiredDateModel(state, value) {
			state.expiredDateModel = value;
		},

		updatePeriodValue(state, value) {
			state.periodValue = value;
		},

		updateErrorCardNo(state, value) {
			state.hasError.noCard.errorMessage = value;
		},

		updateErrorHolderName(state, value) {
			state.hasError.holderName.errorMessage = value;
		},

		updateErrorCvv(state, value) {
			state.hasError.cvv.errorMessage = value;
		},

		updateErrorExpiredDate(state, value) {
			state.hasError.expiredDate.errorMessage = value;
		},
	},
	actions: {
		checkForm({ commit, state }) {
			if (!state.cardNoModel) {
				commit('updateErrorCardNo', 'Hai Error Card No');
			}

			if (!state.holderNameModel) {
				commit('updateErrorHolderName', 'Hai Error Name');
			}

			if (!state.cvvModel) {
				commit('updateErrorCvv', 'Hai Error CVV');
			}

			if (!state.expiredDateModel) {
				commit('updateErrorExpiredDate', 'Hai Error Expired Date');
			}

			if (state.cardNoModel && state.holderNameModel && state.cvvModel && state.expiredDateModel) {
				return true;
			}

			return false;
		},
	},
};
