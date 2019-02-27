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
