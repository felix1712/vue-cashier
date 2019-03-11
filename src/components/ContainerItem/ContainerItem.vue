<template src="./index.html"></template>

<script>
import ItemCreditCard from '@/components/ItemCreditCard/ItemCreditCard.vue';
import ItemGopay from '@/components/ItemGopay/ItemGopay.vue';
import ItemVa from '@/components/ItemVa/ItemVa.vue';
import csStore from '@/components/ItemCsStore/ItemCsStore.vue';
import ItemMf from '@/components/ItemMf/ItemMf.vue';
import ItemBankTransfer from '@/components/ItemBankTransfer/ItemBankTransfer.vue';
import ItemCs from '@/components/ItemCs/ItemCs.vue';

export default {
	name: 'ContainerItem',
	components: {
		ItemCreditCard,
		ItemGopay,
		ItemVa,
		csStore,
		ItemMf,
		ItemBankTransfer,
		ItemCs,
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
