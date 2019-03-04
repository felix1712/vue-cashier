<template src="./index.html"></template>

<script>
import BaseCardFrame from '@/components/BaseCardFrame/BaseCardFrame.vue';
import BaseSecondButton from '@/components/BaseSecondButton/BaseSecondButton.vue';

import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';
import BaseCheckbox from '@/components/BaseCheckbox/BaseCheckbox.vue';

export default {
	name: 'ItemCreditCard',
	data() {
		return {
			bindCard: false,
			cardNoModel: null,
			holderNameModel: null,
			cvvModel: null,
			expiredDateModel: null,
			periodValue: null,
			saveNewCardModel: false,
			hasError: {
				noCard: {
					errorMessage: null,
				},
				holderName: {
					errorMessage: null,
				},
				cvv: {
					errorMessage: null,
				},
				expiredDate: {
					errorMessage: null,
				},
			},
			dummyCard: [
				{
					id: 1,
					nomorKartu: '4556330069036953',
					namaPemegang: 'Felix Andrean',
					expiredCard: '12/24',
					typeCard: 'visa',
					promo: true,
				},
				{
					id: 2,
					nomorKartu: '4556330069036933',
					namaPemegang: 'Ilham Raenaldi',
					expiredCard: '05/23',
					typeCard: 'mastercard',
					promo: false,
				},
				{
					id: 3,
					nomorKartu: '4556330069036913',
					namaPemegang: 'Wahyu Kadal',
					expiredCard: '01/19',
					typeCard: 'visa',
					promo: false,
				},
				{
					id: 4,
					nomorKartu: '4556330069036993',
					namaPemegang: 'Wahyu Kadal Buntung',
					expiredCard: '03/19',
					typeCard: 'visa',
					promo: true,
				},
				{
					id: 5,
					nomorKartu: '4556330069036983',
					namaPemegang: 'Radiyan Abi Priyanda',
					expiredCard: '06/20',
					typeCard: 'mastercard',
					promo: false,
				},
			],
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
		checkForm() {
			if (this.cardNoModel) {
				this.hasError.noCard.errorMessage = null;
			} else {
				this.hasError.noCard.errorMessage = 'Hai Error Email';
			}

			if (this.holderNameModel) {
				this.hasError.holderName.errorMessage = null;
			} else {
				this.hasError.holderName.errorMessage = 'Hai Error Nama';
			}

			if (this.cvvModel) {
				this.hasError.cvv.errorMessage = null;
			} else {
				this.hasError.cvv.errorMessage = 'Hai Error CVV';
			}

			if (this.expiredDateModel) {
				this.hasError.cvv.errorMessage = null;
			} else {
				this.hasError.cvv.errorMessage = 'Hai Error CVV';
			}

			if (this.cardNoModel && this.holderNameModel && this.cvvModel && this.expiredDateModel) {
				return true;
			}

			return false;
		},

		removeError(inputName) {
			this.hasError[inputName].errorMessage = null;
		},

		changeFormat(event) {
			this.$root.formatDate(event);
		},

		templateForm() {
			this.bindCard = !this.bindCard;
		},

		nextCard() {
			this.currentCard += 1;
			this.updateFormData();
		},

		prevCard() {
			this.currentCard -= 1;
			this.updateFormData();
		},

		updateFormData() {
			const singleCardData = this.dummyCard[this.currentCardActive];
			this.cardNoModel = singleCardData.nomorKartu;
			this.holderNameModel = singleCardData.namaPemegang;
		},

		dotsCard(data) {
			this.currentCard = data;
		},
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
	},

	created() {
		// function to get service bind card (after API available)
	},

	mounted() {
		if (this.dummyCard) {
			this.bindCard = true;
			const singleCardData = this.dummyCard[this.currentCardActive];
			this.cardNoModel = singleCardData.nomorKartu;
			this.holderNameModel = singleCardData.namaPemegang;
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
