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
		box-shadow: 8px 0 10px 0px #EBEBEB
	}
</style>
