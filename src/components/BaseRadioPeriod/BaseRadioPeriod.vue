<template src="./index.html"></template>

<script>
export default {
	name: 'BaseRadioPeriod',
	data() {
		return {
			picked: null,
		};
	},
	props: {
		periodType: {
			required: false,
		},
		periodLabel: {
			required: true,
			type: String,
		},
		periodPrice: {
			required: true,
		},
		radioId: {
			required: true,
		},
		radioValue: {
			required: true,
		},
		radioName: {
			required: true,
		},
		radioDisabled: {
			required: false,
		},
		radioChecked: {},
	},

	methods: {
		radioChange(value) {
			this.$emit('input', value);
			this.picked = value;
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";

	$border-normal: 1px solid $v-border-input;
	$border-red: 1px solid $v-red;
	$border-disabled: 1px solid rgba($v-border-input, 0.5);

	.radio-period{
		cursor: pointer;
		color: $v-black;
		border: $border-normal;
		display: inline-block;
		width: 100%;
		border-radius: 7px;
		transition: border .10s linear;
		-webkit-transition: border .10s linear;

		label{
			cursor: pointer;
			margin-bottom: 0;

			.label-frame{
				padding: 20px;
				display: inline-block;
				width: 75%;
				float: right;
				border-left: $border-normal;
				transition: border .10s linear;
				-webkit-transition: border .10s linear;

				p, h5{
					font-size: 0.8rem;
				}

				h5{
					margin: 0;
				}
			}

			.radio-frame{
				display: inline-block;

				input[type="radio"]{
					position: absolute;
					visibility: hidden;
				}

				.custom-radio{
					display: inline-block;
					position: absolute;
					border: $border-normal;
					border-radius: 100%;
					height: 20px;
					width: 20px;
					top: 50%;
					transform: translateY(-50%);
					z-index: 5;
					transition: border .10s linear;
					-webkit-transition: border .10s linear;
					margin: 0 10px;

					&:before{
						display: block;
						position: absolute;
						content: '';
						border-radius: 100%;
						height: 10px;
						width: 10px;
						top: 4px;
						left: 4px;
						margin: auto;
						transition: background 0.10s linear;
						-webkit-transition: background 0.10s linear;
					}
				}
			}
		}

		&:not(.disabled){
			&:hover,
			&.checked{
				border: $border-red;
				color: $v-red;

				.label-frame{
					border-left: $border-red;
				}

				.custom-radio{
					border: $border-red !important;
				}
			}

			&.checked{
				.custom-radio{
					&:before{
						background: $v-red;
					}
				}
			}
		}

		&.disabled{
			color: $v-grey;
			border: $border-disabled;
			cursor: no-drop;

			label{
				// cursor: no-drop;
				pointer-events: none;

				.label-frame{
					border-left: $border-disabled;
				}
			}

			.custom-radio{
				border: $border-disabled;
			}
		}
	}
</style>
