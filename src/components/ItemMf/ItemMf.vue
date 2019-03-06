<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
// import vuex
import { mapState } from 'vuex';

export default {
	name: 'ItemMf',
	components: {
		BaseRadioPeriod,
		BaseFormGroup,
	},

	computed: {
		mfModel: {
			get() {
				return this.$store.state.multiFinance.mfModel;
			},
			set(value) {
				return this.$store.commit('updateMfModel', value);
			},
		},
		mfPeriod: {
			get() {
				return this.$store.state.multiFinance.mfPeriod;
			},
			set(value) {
				return this.$store.commit('updateMfPeriode', value);
			},
		},
		...mapState({
			dummyMf: state => state.multiFinance.dummyMf,
			dummyPeriods: state => state.onlinePay.dummyPeriods,
		}),
	},
};
</script>
<style lang="scss" scoped>
#itemMf {
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
