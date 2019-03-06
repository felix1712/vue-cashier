<template src='./index.html'></template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo.vue';
import { EventBus } from '@/event-bus';

export default {
	name: 'PaymentSidebar',
	components: {
		BaseLogo,
	},
	beforeCreate() {
		console.log('Nothing gets called before me!');
	},
	data() {
		return {
			isActive: undefined,
			clickCount: 0,
			publicPath: [{
				userId: 1,
				id: 1,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/10395/16/11504/1476/5c6fda8eE3bdbddf7/c14dc0e056773836.png',
				isRecommended: true,
				isPromo: true,
				bankName: 'Uang Elektronik',
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/27836/21/7771/3242/5c6fd9ffE3fe664a1/e604a932c07c13cb.png',
				bankName: 'Kartu Kredit /Debit',
				isRecommended: true,
				isPromo: true,
				completed: false,
			},

			{
				userId: 1,
				id: 3,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/32995/37/4296/4206/5c7ccb5cE5a1f2553/18c1527a92d728ba.png',
				isRecommended: true,
				isPromo: true,
				bankName: 'Virtual Account',
				completed: false,
			},
			{
				userId: 1,
				id: 3,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/15172/6/7944/4206/5c6fd984Ee66c38c5/b309b92f15963de0.png',
				bankName: 'Bank Transfer',
				completed: false,
			},
			{
				userId: 1,
				id: 4,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/8873/4/15300/1387/5c6fdb33Ef8db9052/9fbdc0102a5af4bf.png',
				bankName: 'Cicilan Tanpa Kartu',
				completed: false,
			},
			{
				userId: 1,
				id: 5,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/17344/26/8024/1925/5c736b25E41337b09/a4e78fec5e416cd1.png',
				bankName: 'Toko Ritel',
				completed: false,
			},
			],
		};
	},
	methods: {
		sendBankName(i, data) {
			this.isActive = i;
			this.dataToGo = data;
			EventBus.$emit('i-got-clicked', data);
			console.log(data);
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";

	#paymentSidebar{

		.title-sidebar-frame{
			padding: 0 10px;
			.title-sidebar{
				font-size: 1.1rem;
				font-weight: bold;
				padding: 1rem 0;
				border-bottom: 1px solid $v-border-sidebar-label;
			}
		}

		#paymentMethod{
			position: relative;
    	overflow: hidden;

			.payment-sidebar-item{
				display: block;
		    position: relative;
		    z-index: 1;
		    transition: .35s ease color;

				.s-pad {
					padding: 1.5rem 0;
					cursor: pointer;
					border-bottom: $border-normal;
				}

				.span-bank-name{
					font-size: 0.9rem;
					font-weight: 700;
					margin-bottom: 7px;
				}

				&:before{
		      content: '';
		      display: block;
		      z-index: -1;
		      position: absolute;
		      right: -100%; 
		      top: 0;
		      width: 100%; 
		      height: 100%;
		      border-left: 3px solid $v-red;
		      background: #FFFBFB;
		      color: #CB2E36;
		      transition: .35s ease right;
		    }

		    &.active,
		    &:hover{
		    	box-shadow: 5px 5px 10px 0 rgba(231, 231, 231, 0.5);

		      &:before{
		        right: 0;
		      }

		      .s-pad{
						border-bottom: solid transparent !important;
						padding: 1.5rem 10px;
					}
					.span-bank-name {
						color: #D1444A;
						display: block;
					}
		    }
			}
		}

		.payment-method-recomended{
			position: absolute;
			top: 1rem;
			right: 1rem;
			.border-with-doted {
				font-size: 9px;
				border: 1px dotted $v-black;
				border-radius: 35px;
				padding: 1px 7px;
				background: #FFFBFB;
				color: $v-black;
				margin: 0 3px;

				&.red{
					color: $v-red;
					border: 1px dotted $v-red;
					background: rgba($v-red, 0.1);
				}

				&.yellow{
					color: $v-yellow;
					border: 1px dotted $v-yellow;
					background: $v-yellow-fill;
				}
			}
		}

		.img-secure {
			position: inherit;
			bottom: 0;
			margin: 20px 0;
			text-align: center;
			.secure-image-bottom {
				width: 100%;
				opacity: 0.3;
				filter: grayscale(100%) brightness(70%) contrast(1000%);
			}
		}
	}
</style>