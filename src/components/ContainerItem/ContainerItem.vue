<template src="./index.html"></template>

<script>
import ItemCreditCard from '@/components/ItemCreditCard/ItemCreditCard.vue';
import ItemGopay from '@/components/ItemGopay/ItemGopay.vue';
import ItemVa from '@/components/ItemVa/ItemVa.vue';

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
		this.$eventBus.$on('paymentMethodName', (clickCount) => {
			this.post = clickCount;
		});
	},
};
</script>
