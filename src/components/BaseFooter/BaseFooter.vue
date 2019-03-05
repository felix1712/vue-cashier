<template src="./index.html"></template>

<script>
export default {
	name: 'BaseFooter',
	props: {
		logoWidth: {
			type: Number,
		},
	},
};
</script>

<style lang="scss" scoped>
	#baseFooter{
		.wrapper-btn {
			background-image: linear-gradient(0deg, #EC4848 0%, #CB2E36 50%);
			box-shadow: 3px 3px 4px 0 rgba(184,19,19,0.50);
			border-radius: 3px;
			padding: 1%;
			margin-top: 1%;
			margin-bottom: 1%;
			text-align: center;
		}
		.confrimation-color-text {
			color: white;
			font-size: 18px;
			color: #FFFFFF;
		}
		.text-price {
			font-size: 20px;
			color: #CB2E36;
			text-align: right;
		}

		.wrapper-text {
				text-align: right;
				padding-right: 14%;
				padding-top: 2%;
		}
	}
</style>
