<template src="./index.html"></template>

<script>
import ItemCreditCard from '@/components/ItemCreditCard/ItemCreditCard.vue';
import ItemGopay from '@/components/ItemGopay/ItemGopay.vue';
import { EventBus } from '@/event-bus';

export default {
	name: 'ContainerItem',
	components: {
		ItemCreditCard,
		ItemGopay

	},

	data() {
		return {
			post: undefined,
		};
	},
	mounted() {
		EventBus.$on('i-got-clicked', (clickCount) => {
			console.log('event received!', clickCount);
			this.post = clickCount;
			console.log('The user 12321: ', clickCount); // Shows correct new user data
		});
		console.log('User outside eventbus:', this.post); // Shows empty user
	},
};
</script>
