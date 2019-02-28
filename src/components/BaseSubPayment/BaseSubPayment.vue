<template src="./index.html"></template>

<script>
import BaseProgress from '@/components/BaseProgress/BaseProgress.vue';
export default {
    
    name: 'BaseSubPayment',
    	components: {
		BaseProgress,
	},
	computed: {
		type() {
			if (this.to) {
				return 'router-link';
			}

			return 'a';
		},
    },
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
        }
    },
	props: {
        object: {
            type: String,
        },
        title : {
            required: false,
        }
    },
    
};
</script>


<style lang="scss" scoped>

input[type="radio"] {
  appearance:none;
  margin:0 40px;
  width: 24px;
  height: 24px;
  background: #eeeeee;
  box-shadow:
    inset 0 0 0 .4em white,
    0 0 0 .3em;
  border-radius: 50%;
  transition: .2s;
  cursor:pointer;
  color:  #D13C3C;

  &:hover,
  &:checked {
    background:  #D13C3C;
    box-shadow:
    inset 0 0 0 .6em white,
    0 0 0 .3em;
  }
  
  &:checked {
    background: #D13C3C;
    box-shadow:
      inset 0 0 0 .4em white,
      0 0 0 .3em #D13C3C;
  } 

  &:focus { outline: 0; }
}


</style>