<template>
	<div id="pageCashier">
		<div class="row">
			<CashierPayment />
		</div>
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
	#pageCashier{
		background: #FCFCFC;
	}
</style>
