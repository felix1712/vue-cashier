<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';

import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

import { EventBus } from '@/event-bus';

export default {
	name: 'ItemVa',
	components: {
		BaseRadioPeriod,
		EventBus,
		BaseFormGroup,
	},
	data() {
		return {
			bankArray: [
				{
					id: 11,
					name: 'Bank Central Asia',
					nameAbbr: 'BCA',
					image: 'https://img20.jd.id/Indonesia/nHBfsgAABQAAABMACjIc_QAAFiE.png',
				},

				{
					id: 12,
					name: 'Bank Negara Indonesia',
					nameAbbr: 'BNI',
					image: 'https://img20.jd.id/Indonesia/nHBfsgAABAAAAA0ACn0fdwAAEKw.png',
				},

				{
					id: 13,
					name: 'Bank Rakyat Indonesia',
					nameAbbr: 'BRI',
					image: 'https://img20.jd.id/Indonesia/nHBfsgAABgAAAAUACrImoAAAEa8.png',
				},


			],
			cvvModel: null,
			periodValue: null,
			gotClicked: undefined,
			virtuals: '',
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
		};
	},
	mounted() {
		EventBus.$on('PaymentGotClicked', (data) => {
			this.gotClicked = data;
			console.log(data);
		});
	},

};
</script>

<style lang="scss" scoped>
#itemVa {
    .wrapper-input {
        border: 1px solid #c91c23;
        border-top:none;
        height: 100%;
	}
	.text-account-name {
		font-size: 14px;
		color: #726E6E;
	}
}
</style>
