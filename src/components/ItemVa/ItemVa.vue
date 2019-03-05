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
					image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/11452/19/10248/2033/5c7e486bE45e02b27/d87a3eb7199d38b7.png',
				},

				{
					id: 12,
					name: 'Bank Negara Indonesia',
					nameAbbr: 'BNI',
					image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/10334/33/13138/2163/5c7e48c6E474fc8d4/7065ec18c705b387.png',
				},

				{
					id: 13,
					name: 'Bank Rakyat Indonesia',
					nameAbbr: 'BRI',
					image: 'https://img11.360buyimg.com/Indonesia/jfs/t1/26808/11/9535/1447/5c7e48adE20d04d72/130e39e3e3224f01.png',
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
        height: 100%;
	}
	.text-account-name {
		font-size: 14px;
		color: #726E6E;
	}
}
</style>
