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
					image: '',
				},

				{
					id: 12,
					name: 'Bank Negara Indonesia',
					nameAbbr: 'BNI',
					image: '',
				},

				{
					id: 13,
					name: 'Bank Rakyat Indonesia',
					nameAbbr: 'BRI',
					image: '',
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
        border: 1px solid red;
        height: 16rem;
	}
	.text-account-name {
		font-size: 14px;
		color: #726E6E;
	}
}
</style>
