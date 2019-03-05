<template src="./index.html"></template>

<script>
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import { EventBus } from '@/event-bus';

export default {
	name: 'ItemVa',
	components: {
		BaseRadioPeriod,
		EventBus,
	},
	data() {
		return {
			gotClicked: undefined,
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
	mounted() {
		EventBus.$on('PaymentGotClicked', (data) => {
			this.gotClicked = data;
			console.log('The user 12321: ', data); // Shows correct new user data
		});
		console.log('User outside eventbus:', this.post); // Shows empty user
	},

};
</script>

<style lang="scss" scoped>
#itemVa {
    .wrapper-input {
        border: 1px solid red;
        height: 16rem;
    }
}
</style>
