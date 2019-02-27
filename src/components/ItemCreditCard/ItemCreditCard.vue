<template src="./index.html"></template>

<script>
import BaseCardFrame from '@/components/BaseCardFrame/BaseCardFrame.vue';
import BaseSecondButton from '@/components/BaseSecondButton/BaseSecondButton.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseRadioPeriod from '@/components/BaseRadioPeriod/BaseRadioPeriod.vue';

export default {
	name: 'ItemCreditCard',
	data() {
		return {
			cardNoModel: null,
			holderNameModel: null,
			cvvModel: null,
			periodValue: null,
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
			},
		};
	},
	components: {
		BaseCardFrame,
		BaseSecondButton,
		BaseFormGroup,
		BaseRadioPeriod,
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

			if (this.cardNoModel && this.holderNameModel && this.cvvModel) {
				return true;
			}

			return false;
		},

		removeError(inputName) {
			this.hasError[inputName].errorMessage = null;
		},
	},
};
</script>

<style scoped lang="scss" >
  .payment-periods{
    &:before{
      display: table;
      content: '';
    }
    .col-4{
      padding: 0;
      padding-right: 15px;
    }
  }

</style>

