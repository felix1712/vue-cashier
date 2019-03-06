<template src="./index.html"></template>
<script>
export default {
  name: 'ItemOrderDetails',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      };
    }
  },

};

</script>
<style scoped lang='scss'>
.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.message-header {
  cursor: pointer;
}

.message-body {
  padding: 0;
  max-height: 10em;
  overflow: auto;
  transition: 0.3s ease all;
}

.is-closed .message-body {
  max-height: 0;
}

.container {
  padding: 2px 16px;
  background: #fff;
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
          color: #8ca2b0;
        }

        .item-r {
          float: right;
          color: #333;
        }

        .total-l {
          float: left;
          font-weight: bold;
          color: #8ca2b0;
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

.left-img-info {
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: bottom;

  img {
    width: 100%;
  }
}

.ord-det-top {
  padding: 0 0 1em 0;
  border-bottom: 1px solid #eee;
}

.right-ord-info {
  width: auto;
  display: inline-block;
  margin-left: 1.5em;
  font-size: 14px;
  line-height: 10px;
  .sub-title {
    color: #989898;
  }
}

/*style right order detail flight*/
.flight-info {
  display: inline-block;
}

.flight-info>.left-flight-info {
  width: auto;
  float: left;
}

.flight-info>.left-flight-info>img {
  max-height: 60px;
  max-width: 60px;
}

.goods-title {
  margin: 20px 0;
  /* border-top: 1px solid #eee; */
  /* background: #eeee; */
  padding: 5px 0;
  font-weight: bold;
  color: #6f6f6f;
}

.flight-info>.right-flight-info {
  width: auto;
  float: right;
  margin-left: 1.5em;
  font-size: 14px;
  line-height: 10px;
  color: #9b9b9b;
}

.flight-info.train>.right-flight-info {
  margin-left: 0 !important;
}

.flight-info>.right-flight-info>.flight-name {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.schedule-info {
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
}

.schedule-info>.schedule-destination {
  font-weight: normal;
}

.schedule-info>.schedule-destination>i {
  margin: 0 15px;
  width: 50px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;
}

.schedule-flight-info>.schedule-flight {
  display: inline-block;
  width: 100%;
}

.schedule-flight-info>.schedule-flight>.icon-flight {
  width: 35px;
  float: left;
}

.schedule-flight-info>.schedule-flight>.icon-flight img {
  width: 15px;
  height: 15px;
  padding: 10px 0;
}

.schedule-flight-info>.schedule-flight>.schedule-flight-time {
  width: 25%;
  float: left;
}

.schedule-flight-info>.schedule-flight>.schedule-flight-airport {
  width: auto;
  float: left;
}

.schedule-flight-info>.schedule-flight p {
  font-weight: bold;
  font-size: 15px;
}

.schedule-flight-info>.schedule-flight span {
  font-weight: normal;
  color: #9b9b9b;
}

.schedule-flight-info small {
  font-size: 11px;
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #9b9b9b;
  max-width: 15em;
}

.line-schedule-flight {
  position: relative;
  height: 40px;
  width: 2px;
  border-left: 2px solid lightgray;
  left: 5px;
}

</style>
