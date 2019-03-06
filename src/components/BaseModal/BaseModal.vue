<template src="./index.html"></template>

<script>
export default {
	name: 'BaseModal',
	props: {
		classCloseButton: {
			required: false,
		},
		backgroundTransparent: {
			required: false,
		},
	},
	methods: {
		close() { this.$emit('close'); },
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/customs/_variable.scss";

	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, .85);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 300px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;

		&.transparent{
			background: transparent;
			box-shadow: none;
		}
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	.modal-body {
		margin: 20px 0;
	}

	.modal-default-button {
		float: right;
	}

	// modal transition style with vue

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	.close-button{
		color: $v-red;
		border: 1.5px solid;
		border-radius: 100%;
		padding: 0 9px 3px 9px;
		font-size: 1.5rem;
		position: relative;

		&.normal-close{
			float: right;
			top: -2.3rem;
			right: -3rem;
		}

		&.corner-header-close{
			left: 90%;
			top: 15px;
		}
	}
</style>
