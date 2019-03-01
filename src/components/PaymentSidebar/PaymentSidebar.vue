<template src='./index.html'></template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo.vue';
import { EventBus } from '@/event-bus.js';
export default {
	name: 'PaymentSidebar',
	components: {
		BaseLogo,
	},
	 beforeCreate() {
		 countdown('3 1, 2019 11:04:25');
function countdown(cdDate, options) {
  // Set the date we're counting down to
  const countDownDate = new Date(cdDate).getTime();
  // Update the count down every 1 second
  const x = setInterval(() => {

    // Get todays date and time
    const now = new Date().getTime();
    console.log(now);

    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    console.log(distance);

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (options) {
      switch (options.format) {
        case 'hms':
          days = 0;
          hours = Math.floor((distance / (1000 * 60 * 60 * 24) * 24)) + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          break;

        default:

          break;
      }
    }

    const countdown = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,

      status: 1,
      message: 'COUNTINGDOWN'
    }
    console.log('countd:', countdown)

    // If the count down is finished, write some text 
    if (distance <= 0) {
      clearInterval(x);
      countdown.days = 0;
      countdown.hours = 0;
      countdown.minutes = 0;
      countdown.seconds = 0;

      countdown.status = 0;
	  countdown.message = 'EXPIRED';
	//   alert(countdown.message)
    }

    // cb(countdown);
  }, 1000);
}

  },

	data() {
  		return {
			dataToGo: undefined,
			isActive: undefined,
			 clickCount: 0,
			publicPath: [{
				userId: 1,
				id: 1,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/10395/16/11504/1476/5c6fda8eE3bdbddf7/c14dc0e056773836.png',
				isRecommended: 'Recommended',
				bankName: 'Uang Elektronik',
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/27836/21/7771/3242/5c6fd9ffE3fe664a1/e604a932c07c13cb.png',
				bankName: 'Kartu Kredit /Debit',
				isRecommended: 'Recommended',
				completed: false,
			},
			{
				userId: 1,
				id: 3,
				imgPc: 'https://img11.360buyimg.com/Indonesia/jfs/t1/15172/6/7944/4206/5c6fd984Ee66c38c5/b309b92f15963de0.png',
				bankName: 'Bank Transfer',
				isRecommended: 'Recommended',
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
		sendBankName(i,data) {
			this.isActive = i 
			this.dataToGo = data;
			console.log('nama bank : ', data)
						EventBus.$emit('i-got-clicked', data);
		},
		emitGlobalClickEvent() {
			this.clickCount++;
			console.log(this.clickCount)
			// Send the event on a channel (i-got-clicked) with a payload (the click count.)

    },
	},
};
</script>

<style scoped lang='scss'>
.text-method {
	font-size: 16px;
	color: #464646;
	font-weight: bold;
	padding-bottom: 3%;
}

.active {
	position: relative;
	background: #FFFBFB;
	border: 1px solid #FAFAFA;
	box-shadow: 2px 2px 4px 0 rgba(231, 231, 231, 0.50);
	border-left: 3px solid #CA2F35;
	height: auto;
	letter-spacing: 1px;
	color: #CB2E36;
	// padding-left: 2rem;
	// padding-top: 2rem;
	// padding-bottom: 2rem;
	.span-bank-name {
		font-size: 1.3rem;
		color: #D1444A;
		display: block;
	}
}

.s-dis-blok {
	display: block;
}

.s-pad {
	padding: 1rem;
	cursor: pointer;
	border-bottom: 1px solid #E0D0D0;
}

.border-with-doted {
	font-size: 8px;
	border: 1px dotted #CB2E36;
	border-radius: 35px;
	padding: 5px;
	background: #FFFBFB;
	color: #CB2E36;
}

.img-secure {
	position: relative;
	padding: 0 10px;
	border-top: 1px solid #efefef;
	.secure-image-bottom {
		width: 15em;
		filter: grayscale(100%);
	}
}

		
</style>
