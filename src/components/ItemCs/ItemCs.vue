<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
// vuex events
import { mapState } from 'vuex';

export default{
	name: 'ItemCs',
	components: {
		BaseRadioPeriod,
		BaseFormGroup,
	},
	computed: {
		csModel: {
			get() {
				return this.$store.state.convStore.csModel;
			},
			set(value) {
				return this.$store.commit('updateCsModel', value);
			},
		},
		csForm: {
			get() {
				return this.$store.state.convStore.csForm;
			},
			set(value) {
				this.$root.numberFormat;
				return this.$store.commit('updateCsForm', value);
			},
		},
		...mapState({
			dummyCs: state => state.convStore.dummyCs,
		}),
	},
};
</script>
