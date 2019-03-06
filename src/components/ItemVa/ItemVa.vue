<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

export default {
	name: 'ItemVa',
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
			virtuals: null,
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
