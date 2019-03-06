<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your ilham App"/>
		<div class="col-4">COl 1</div>
		<div class="col-4">COl 1</div>
		<div class="col-4">COl 1</div>
		<div class="col-3">COl 1</div>
		<div class="col-3">COl 1</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'home',
	components: {
		HelloWorld,
	},
};
</script>
