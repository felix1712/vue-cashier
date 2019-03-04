<template src="./index.html"></template>
<script>
export default {
  name: 'BaseCountdown',
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  filters: {
    two_digits: function(value) {
      if (value < 0) {
        return '00';
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60);
    }
  }
};

</script>
<style scoped lang='scss'>
.countdown {
  display: flex;

  .block {
    display: flex;
    flex-direction: column;
    margin: 0 10px;

    &:last-of-type {
      .digit:after {
        display: none;
      }
    }

    &:first-of-type {
      .digit {
        margin-left: 10px;
      }
    }
  }
}



.text {
  color: #747474;
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: #dc092e;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 10px;
  text-align: center;
}

.divid {
  color: #dc092e;
}

</style>
