<template src="./index.html"></template>

<script>
import ProgressTitle from '@/components/ProgressTitle/ProgressTitle.vue';

export default {
	name: 'BaseProgress',
	components: {
		ProgressTitle,
	},
};
</script>

<style lang="scss" scoped>
	#progressBar{
		border-bottom: 1px solid #F5F5F5;
		text-align: center;
		font-size: 0.8rem;
		padding: 1.5rem 4rem;
	}
</style>
