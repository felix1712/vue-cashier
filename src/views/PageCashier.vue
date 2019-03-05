<template>
	<div id="pageCashier">
		<div class="row">
			<CashierPayment />
			<CashierDetail />
			<BaseFooter :totalPrice="totalPrice" />
		</div>
	</div>
</template>

<script>
import CashierPayment from '@/components/CashierPayment/CashierPayment.vue';
import CashierDetail from '@/components/CashierDetail/CashierDetail.vue';
import BaseFooter from '@/components/BaseFooter/BaseFooter.vue';

export default {
	name: 'PageCashier',
	components: {
		CashierPayment,
		CashierDetail,
		BaseFooter,
	},
	data() {
		return {
			totalPrice: 112500,
		}
	}
};
</script>

<style lang="scss">
	#pageCashier{
		background: #FCFCFC;
	}
</style>
