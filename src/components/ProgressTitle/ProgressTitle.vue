<template src="./index.html"></template>

<script>
export default {
	name: 'ProgressTitle',
	props: {
		title: {
			type: String,
			required: true,
		},
		color: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
	#progressTitle{
		span{
			margin-right: 10px;
			img{
				width: 35px;
				height: auto;
				vertical-align: middle;
			}
		}
	}
</style>
