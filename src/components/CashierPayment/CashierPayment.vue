<template src="./index.html"></template>

<script>
import PaymentSidebar from '@/components/PaymentSidebar/PaymentSidebar.vue';
import PaymentContainer from '@/components/PaymentContainer/PaymentContainer.vue';


export default {
	name: 'CashierPayment',
	components: {
		PaymentSidebar,
		PaymentContainer,
	},


};
</script>

<style lang="scss" scoped>
	#cashierPayment{
		background: #fff;
		box-shadow: 8px 0 10px 0px #EBEBEB;

		.equal-height{
			display: flex;
			display: -webkit-flex;
			flex-wrap: wrap;
			height: 100%;
			min-height: 650px;

			.payment-sidebar{
				height: auto;
			}
		}
	}
</style>
