<template src="./index.html"></template>
<script>
import BaseModal from '@/components/BaseModal/BaseModal.vue';

export default {
  name: 'BaseFormGroup',
  data() {
    return {
      openedModal: false,
    };
  },

  props: {
    labelTitle: {
      type: String,
      default: '',
    },
    inputId: {
      required: false,
    },
    withInfo: {
      required: false,
    },
    idModal: {
      required: false,
    },
    errorMessage: {
      required: false,
    },
    infoInputMessage: {
      required: false,
    },
  },

  components: {
    BaseModal,
  },

  methods: {
    showModal() {
      this.openedModal = true;
    },
    closeModal() {
      this.openedModal = false;
    },
  },
};

</script>
<style lang="scss" scoped>
@import "@/assets/styles/customs/_variable.scss";

.form-group {
  margin-bottom: 15px;

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 10px;
    font-weight: 700;
    color: $v-label-input;

    .info-label {
      border: .5px solid rgba(203, 46, 54, 0.5);
      border-radius: 100%;
      padding: 0px 5px;
      font-size: 12px;
      color: rgba(203, 46, 54, 0.5);
      cursor: pointer;
      margin-left: 5px;
    }
  }

  .s-form-control {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 15px;
    font-size: 1rem;
    line-height: 1.5;
    color: $v-black;
    background-color: #fff;
    background-image: none;
    border: 1px solid $v-border-input;
    border-radius: 6px;
    -webkit-box-shadow: 2px 0px 4px rgba(235, 235, 235, 0.5);
    box-shadow: 2px 0px 4px rgba(235, 235, 235, 0.5);
    letter-spacing: 1px;

    &.has-error {
      border: 1px solid red;
    }
  }

  .field-text-error {
    color: red;
    display: block;
    margin-top: 7px;
  }

  .info-input-message {
    color: $v-label-input;
  }

  &-input-text {
    font-size: 12px;
    color: #9e9c9c;
  }
}

</style>
