<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCardFrame',
};
</script>

<style lang="scss" scoped>
	#baseCardFrame{
		width: 90%;
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

					img{
						width: 70px;
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
