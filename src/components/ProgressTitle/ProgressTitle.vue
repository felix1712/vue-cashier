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
		p{
			margin: 0;

			span{
				margin-right: 10px;
				img{
					width: 20px;
					height: auto;
					vertical-align: middle;
				}
			}
		}
	}
</style>
