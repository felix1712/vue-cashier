<template src="./index.html"></template>

<script>
import BaseProgress from '@/components/BaseProgress/BaseProgress.vue';
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';

export default {
	name: 'ItemGopay',
	components: {
		BaseProgress,
		BaseRadioPeriod,
	},
	data() {
		return {
			cardNoModel: null,
			holderNameModel: null,
			cvvModel: null,
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
.custom-radio {
    color: pink !important;
    background: red !important;
}
</style>
