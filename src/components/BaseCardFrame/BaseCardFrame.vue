<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCardFrame',
	props: {
		cardNumber: {
			required: true,
		},
		cardNameHolder: {
			required: true,
		},
		cardExpired: {

		},
		cardType: {
			required: true,
		},
		cardPromo: {

		},
	},
	computed: {
		lastCardNumber() {
			return this.cardNumber.substr(this.cardNumber.length - 4);
		},
		cardExpiredMonth() {
			return this.cardExpired.substring(0, 2);
		},
		cardExpiredYear() {
			return this.cardExpired.substring(3, 5);
		},
	},
};
</script>

<style lang="scss" scoped>
	#baseCardFrame{
		width: 85%;
		border: 2px solid #E8E8E8;
		background: #F8F8F8;
		box-shadow: 4px 4px 10px rgba(235, 235, 235, 1);
		display: block;
		padding: 50px 20px 20px 20px;
		border-radius: 10px;

		.chip-section{
			padding: 0;
			.chip-icon{
				width: 50px;
				height: auto;
			}
		}

		.number-section{
			padding: 0;
			h5{
				font-size: 1rem;

				span{
					&.hidden-number{
						margin-right: 40px;
					}
				}
			}
		}

		.details-section{
			padding: 0;
			div{
				padding: 0;
				p{
					font-size: 1rem;
					line-height: 1.5;
					margin-bottom: 0;
				}

				&.logo-gateway{
					text-align: center;
					height: 50px;
					max-height: 50px;

					img{
						width: 50px;
						height: auto;
					}
				}
			}
		}

		.cvv-divider{
			font-size: 1.3rem;
			margin: 0 7px;
			line-height: 1;
		}
	}
</style>
