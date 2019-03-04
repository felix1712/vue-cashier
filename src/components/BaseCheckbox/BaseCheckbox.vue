<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCheckbox',
	data() {
		return {
			picked: null,
		};
	},
	props: {
		labelCheckbox: {
			required: false,
		},
		idCheckbox: {
			required: true,
		},
	},
	methods: {
		checkboxChange() {
			this.$emit('input', this.picked);
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";

	[type='checkbox']{
		position: absolute;
		opacity: 0;
		& + label {
			position: relative;
			cursor: pointer;
			padding: 0;
			font-size: 0.9rem;
		}
		// Box.
		& + label:before {
			content: '';
			margin-right: 10px;
			display: inline-block;
			vertical-align: text-top;
			width: 20px;
			height: 20px;
			background: white;
			border: 1px solid $v-border-input;
			-webkit-box-shadow: 0 0 5px rgba(195,195,195, 0.5);
			box-shadow: 0 0 5px rgba(195,195,195, 0.5);
		}
		// Box hover
		&:not(:disabled){
			&:hover + label:before {
				-webkit-box-shadow: 0 0 5px rgba($v-red, 0.5);
				box-shadow: 0 0 5px rgba($v-red, 0.5);
				border: 1px solid $v-red;
			}
			// Box focus
			&:focus + label:before {
				-webkit-box-shadow: 0 0 5px rgba($v-red, 0.5);
				box-shadow: 0 0 5px rgba($v-red, 0.5);
				border: 1px solid $v-red;
			}
		}
		// Box checked
		&:checked + label:before {
			-webkit-box-shadow: 0 0 5px rgba($v-red, 0.5);
			box-shadow: 0 0 5px rgba($v-red, 0.5);
			border: 1px solid $v-red;
		}
		// Disabled state label.
		&:disabled + label {
			color: $v-grey;
			cursor: not-allowed;
		}
		// Disabled box.
		&:disabled + label:before {
			box-shadow: none;
			background: rgba($v-grey, 0.3);
		}
		// Checkmark. Could be replaced with an image
		&:checked + label:after {
			content: '\2713\0020';
			position: absolute;
			top: 1px;
			left: 2px;
			font-size: 1.3rem;
			line-height: 0.8;
			color: $v-red;
			transition: all .2s;
			transform: rotate(10deg);
		}
	}
</style>
