<template src="./index.html"></template>

<script>
export default {
	name: 'BaseFormGroup',
	props: {
		labelTitle: {
			type: String,
			default: '',
		},
		inputId: {
			required: false,
		},
		errorMessage: {
			required: false,
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";

	.form-group{
		margin-bottom: 15px;

		label{
			display: inline-block;
			max-width: 100%;
			margin-bottom: 20px;
			font-weight: 700;
			color: $v-label-input;
		}

		.s-form-control{
			display: block;
			width: 100%;
			height: 50px;
			padding: 10px 15px;
			font-size: 1rem;
			line-height: 1.5;
			color: $v-black;
			background-color: #fff;
			background-image: none;
			border: 1px solid $v-border-input;
			border-radius: 6px;
			-webkit-box-shadow: 2px 0px 4px rgba(235,235,235, 0.5);
			box-shadow: 2px 0px 4px rgba(235,235,235, 0.5);
			letter-spacing: 1px;

			&.has-error{
				border: 1px solid red;
			}
		}

		.field-text-error{
			color: red;
			display: block;
			margin-top: 7px;
		}
	}
</style>
