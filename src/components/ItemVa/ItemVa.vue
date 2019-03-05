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
}
</style>
