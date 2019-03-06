<template src="./index.html"></template>
<script>
export default {
  name: 'BaseFooter',
  props: {
    logoWidth: {
      type: Number,
    },
  },
};

</script>
<style lang="scss" scoped>
#baseFooter {
  position: fixed;
  bottom: 0;
  width: 74.3%;
  padding: 20px;
  background: #f7f7f7;
  -webkit-box-shadow: 1px -10px 47px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -10px 47px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 1px -5px 44px -21px rgba(0, 0, 0, 0.75);

  .wrapper-btn {
    background-image: linear-gradient(0deg, #EC4848 0%, #CB2E36 50%);
    box-shadow: 3px 3px 4px 0 rgba(184, 19, 19, 0.5);
    border-radius: 3px;
    padding: 10px;
    text-align: center;
  }

  .confrimation-color-text {
    color: white;
    font-size: 18px;
    color: #FFFFFF;

  }

  .text-price {
    font-size: 20px;
    color: #CB2E36;
    text-align: right;
  }

  .wrapper-text {
    margin-top:10px;
    text-align: center;
  }
}

</style>
