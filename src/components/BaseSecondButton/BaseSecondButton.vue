<template src="./index.html"></template>

<script>
export default {
	name: 'BaseSecondButton',
	computed: {
		type() {
			if(this.to){
				return 'router-link'
			}

			return 'a'
		},
	},
	props: {
		title: {
			type:String,
			required: true,
		},
		to: {
			required: false,
		},
		typeButton: {
			required: false,
		},
	},
};
</script>
