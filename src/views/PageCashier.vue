<template>
	<div class="page-cashier">
		<CashierPayment />
	</div>
</template>

<script>
import CashierPayment from '@/components/CashierPayment/CashierPayment.vue';

export default {
	name: 'PageCashier',
	components: {
		CashierPayment,
	},
};
</script>

<style lang="scss">
	.page-cashier{
		background: #FCFCFC;
	}
</style>
