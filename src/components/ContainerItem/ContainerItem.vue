<template src="./index.html"></template>

<script>
import ItemCreditCard from '@/components/ItemCreditCard/ItemCreditCard.vue';
import ItemGopay from '@/components/ItemGopay/ItemGopay.vue';
import ItemVa from '@/components/ItemVa/ItemVa.vue';
import { EventBus } from '@/event-bus';

export default {
	name: 'ContainerItem',
	components: {
		ItemCreditCard,
		ItemGopay,
		ItemVa,
	},

	data() {
		return {
			post: undefined,
		};
	},
	mounted() {
		EventBus.$on('i-got-clicked', (clickCount) => {
			this.post = clickCount;
		});
	},
};
</script>
