<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';

import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

import { EventBus } from '@/event-bus';

export default {
	name: 'csStore',
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
					name: 'Alfamart',
					nameAbbr: 'BCA',
					image: 'https://storage.jd.com/static-res/payment/foreign/idn/images/store/alfamart.png',
				},

			],
			cvvModel: null,
			periodValue: null,
			gotClicked: undefined,
			csStore: '',
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
#itemCsStore {
    .wrapper-input {
        border: 1px solid red;
        border-top:none;
        height: 100%;
	}
	.text-account-name {
		font-size: 14px;
		color: #726E6E;
	}
}
</style>
