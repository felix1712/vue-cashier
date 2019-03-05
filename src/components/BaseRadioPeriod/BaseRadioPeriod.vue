<template src="./index.html"></template>

<script>
import { EventBus } from '@/event-bus';
export default {
	name: 'BaseRadioPeriod',
	data() {
		return {
			picked: null,
			gotClicked: undefined,
		};
	},
	props: {
		periodIst: {
			required: false,
		},
		paymentMethod: { // dipakai di untuk gopay metode pembayaraan
			required: false,
		},
		paymentImage: {
			required: false,
			type: String,
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
		color: String,
		radioChecked: {},
	},

	methods: {
		radioChange(value) {
			this.$emit('input', value);
			this.picked = value;
			this.gotClicked = true
			EventBus.$emit('PaymentGotClicked', this.gotClicked);
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";
	 .custom-radio-gojek {
		 top: 5.4rem;
		 left:10%;
	 }
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
				padding: 15px;
				display: inline-block;
				width: 75%;
				float: right;
				border-left: $border-normal;
				transition: border .10s linear;
				-webkit-transition: border .10s linear;

				p, span, h5{
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
