<template>
	<div class="page-cashier">
		<h1>Hello I'm cashier page</h1>
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
