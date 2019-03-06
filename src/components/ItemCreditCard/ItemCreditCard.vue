<template src="./index.html"></template>

<script>
// import component
import BaseCardFrame from '@/components/BaseCardFrame/BaseCardFrame.vue';
import BaseSecondButton from '@/components/BaseSecondButton/BaseSecondButton.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseCheckbox from '@/components/BaseCheckbox/BaseCheckbox.vue';
// import vuex
import { mapState, mapActions } from 'vuex';


export default {
	name: 'ItemCreditCard',
	data() {
		return {
			bindCard: false,
			saveNewCardModel: false,
			currentCard: 0,
		};
	},
	components: {
		BaseCardFrame,
		BaseSecondButton,
		BaseFormGroup,
		BaseRadioPeriod,
		BaseCheckbox,
	},
	methods: {
		removeError(inputName) {
			this.hasError[inputName].errorMessage = null;
		},

		changeFormat(event) {
			this.$root.formatDate(event);
		},

		templateForm() {
			this.bindCard = !this.bindCard;
			if (!this.bindCard) {
				this.emptyForm();
			} else {
				this.updateFormData();
			}
		},

		nextCard() {
			this.currentCard += 1;
			this.updateFormData();
		},

		prevCard() {
			this.currentCard -= 1;
			this.updateFormData();
		},

		emptyForm() {
			this.$store.state.onlinePay.cardNoModel = null;
			this.$store.state.onlinePay.holderNameModel = null;
			this.$store.state.onlinePay.expiredDateModel = null;
			this.$store.state.onlinePay.cvvModel = null;
			this.$store.state.onlinePay.periodValue = null;
		},

		updateFormData() {
			const singleCardData = this.dummyCard[this.currentCardActive];
			this.$store.state.onlinePay.cardNoModel = singleCardData.nomorKartu;
			this.$store.state.onlinePay.holderNameModel = singleCardData.namaPemegang;
			this.$store.state.onlinePay.cvvModel = null;
			this.$store.state.onlinePay.periodValue = null;
		},

		dotsCard(data) {
			this.currentCard = data;
		},

		...mapActions({
			checkForm: 'checkForm',
		}),
	},

	computed: {
		currentCardActive() {
			return Math.abs(this.currentCard) % this.dummyCard.length;
		},

		maxCardShow() {
			return this.currentCardActive === this.dummyCard.length - 1;
		},

		titleButtonTemplate() {
			if (this.bindCard) {
				return 'Gunakan Kartu Baru';
			}
			return 'Kembali ke kartu saya';
		},

		cardNoModel: {
			get() {
				return this.$store.state.onlinePay.cardNoModel;
			},

			set(value) {
				this.$store.commit('updateCardNoModel', value);
			},
		},

		holderNameModel: {
			get() {
				return this.$store.state.onlinePay.holderNameModel;
			},

			set(value) {
				this.$store.commit('udpateHolderName', value);
			},
		},

		cvvModel: {
			get() {
				return this.$store.state.onlinePay.cvvModel;
			},

			set(value) {
				this.$store.commit('updateCvvModel', value);
			},
		},

		expiredDateModel: {
			get() {
				return this.$store.state.onlinePay.expiredDateModel;
			},

			set(value) {
				this.$store.commit('updateExpiredDateModel', value);
			},
		},

		periodValue: {
			get() {
				return this.$store.state.onlinePay.periodValue;
			},

			set(value) {
				this.$store.commit('updatePeriodValue', value);
			},
		},

		...mapState({
			hasError: state => state.onlinePay.hasError,
			dummyCard: state => state.onlinePay.dummyCard,
			dummyPeriods: state => state.onlinePay.dummyPeriods,
		}),
	},

	created() {
		// function to get service bind card (after API available)
	},

	mounted() {
		if (this.dummyCard) {
			this.bindCard = true;
			this.updateFormData();
		} else {
			this.bindCard = false;
		}
	},
};
</script>

<style scoped lang="scss" >

	.custom-arrow{
		position: absolute;
		top: 6rem;
	}
	.payment-periods{
		&:before{
			display: table;
			content: '';
		}
		.col-4{
			padding: 0 15px 15px 0;
		}
	}

	.cvv-info{
		width: 100%;
		height: auto;
	}

</style>
