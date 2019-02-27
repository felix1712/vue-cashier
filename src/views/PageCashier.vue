<template>
	<div id="pageCashier">
		<div class="row">
			<CashierPayment />
			<CashierDetail />
		</div>
	</div>
</template>

<script>
import CashierPayment from '@/components/CashierPayment/CashierPayment.vue';
import CashierDetail from '@/components/CashierDetail/CashierDetail.vue';

export default {
	name: 'PageCashier',
	components: {
		CashierPayment,
		CashierDetail,
	},
};
</script>

<style lang="scss">
	#pageCashier{
		background: #FCFCFC;
	}
</style>
