<template src="./index.html"></template>

<script>
import PaymentSidebar from '@/components/PaymentSidebar/PaymentSidebar.vue';
import PaymentContainer from '@/components/PaymentContainer/PaymentContainer.vue';
import BaseSubPayment from '@/components/BaseSubPayment/BaseSubPayment.vue';
import { EventBus } from '@/event-bus.js';
var a
// const clickHandler = function(clickCount) {
// 	a = clickCount;
// }
// EventBus.$on('i-got-clicked', clickHandler);
export default {
	
	name: 'CashierPayment',
	components: {
		PaymentSidebar,
		BaseSubPayment,
		PaymentContainer,
	},
	data() {
		return {
			post : undefined
		}
	},
mounted: function () {
  EventBus.$on('i-got-clicked', function (clickCount) {
    console.log('event received!', clickCount)
    this.post = clickCount
    console.log('The user: ',clickCount) // Shows correct new user data
  }.bind(this))
  console.log('User outside eventbus:', this.post) // Shows empty user
}
	
};
</script>

<style lang="scss" scoped>
	#cashierPayment{
		background: #fff;
		box-shadow: 8px 0 10px 0px #EBEBEB
	}
</style>
