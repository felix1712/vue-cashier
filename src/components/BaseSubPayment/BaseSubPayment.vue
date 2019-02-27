<template src="./index.html"></template>

<script>
export default {
	name: 'BaseSubPayment',
	computed: {
		type() {
			if (this.to) {
				return 'router-link';
			}

			return 'a';
		},
    },
    
	props: {
        object: {
            type: String,
            required: true,
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
