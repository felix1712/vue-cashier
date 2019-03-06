<template src="./index.html"></template>
<script>

import BaseCountdown from '@/components/BaseCountdown/BaseCountdown.vue';
import ItemOrderDetails from '@/components/ItemOrderDetails/ItemOrderDetails.vue';

export default {
  name: 'CashierDetail',
  data(){
    return {
      detailDate:null,
    }
  },
  components: {
    BaseCountdown,
    ItemOrderDetails,
  },
  mounted(){
    this.detailDate='2019-03-06 08:15:00'
  }
};

</script>
<style scoped lang='scss'>
.container {
  padding: 2px 16px;
}

.det-title {
  padding-block-start: 1em;
  padding-block-end: 1em;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  margin-bottom: 1em;
  font-weight: 700;
  border-bottom: 1px solid #eee;

  span {

    height: 20px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #8ca2b0;
    font-weight: 500;

  }

  .countDown-red {
    color: #c91c23;
    font-size: 20px;
    margin: 10px 4px 0 4px;
    font-weight: bold;
  }
}

.det-content {
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  margin-bottom: 1em;
  font-weight: 500;
  border-bottom: 1px solid #eee;

  .det-content-t {
    font-size: 0.8rem;
  }

  .det-content-b {
    font-size: 1rem;
    color: #dc0f2c;
    font-weight: 700;
  }

  &.price {
    padding: 0;

    ul {
      margin-bottom: 20px;
      list-style: none;
      padding-inline-start: 0;

      li {
        margin-bottom: 14px;
        height: 12px;
        font-size: 12px;
        display: block;
        padding: 0 5px;

        .item-l {
          float: left;
          color: #979797;
        }

        .item-r {
          float: right;
          color: #333;
        }
        .total-l {
          float: left;
          font-weight: bold;
          color: #979797;
        }

        .total-r {
          float: right;
          font-weight: bold;
          color: #df0414;
        }
      }
    }
  }
}

</style>
