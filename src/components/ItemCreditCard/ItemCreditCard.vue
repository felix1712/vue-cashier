<template src="./index.html"></template>

<script>
import BaseCardFrame from '@/components/BaseCardFrame/BaseCardFrame.vue';
import BaseSecondButton from '@/components/BaseSecondButton/BaseSecondButton.vue';

export default {
	name: 'ItemCreditCard',
	components: {
		BaseCardFrame,
		BaseSecondButton,
	},
};
</script>

<style scoped lang="scss" >


.radio{
  display: block;
  cursor: pointer; 
  user-select:none;
  text-align: left;
  &+.radio{
    margin-top: 7px;
  }
  input{
    display: none;
    &+span{
      display: inline-block; 
      position: relative;
      padding-left: 20px;
      &:before{
        content: '';
        display: block; 
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        margin-right: 5px;
        width: 16px;
        height: 16px;
        border: 1px solid #ccc;
        background: #fff;
      }
      &:after{
        content: '';
        display: block; 
        width: 10px;
        height: 10px;
        background: red;
        position: absolute;
        border-radius: 50%;
        top: 3px;
        left: 3px;
        opacity: 0;
        transform: scale(0,0); 
        transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }
    &:checked+span:after{
      opacity: 1;
      transform: scale(1,1);
    }
  }
}
/* END CHECKBOX STYLE */

.wrapper-radio {   
  width: 400px; 
  height: 100px;
  position: absolute;
    *,
  *:before,
  *:after{
    box-sizing: border-box;
  } 
}

</style>

