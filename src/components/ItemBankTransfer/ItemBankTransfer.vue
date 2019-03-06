<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

export default {
	name: 'ItemBankTransfer',
	components: {
		BaseRadioPeriod,
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
	props: {
		object: {
			type: String,
		},
		title: {
			required: false,
		},
	},
};
</script>

<style lang="scss" scoped>
#ItemBankTransfer {
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
