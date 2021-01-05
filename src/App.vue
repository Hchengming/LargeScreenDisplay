<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	@import url("../static/css/index.scss");

	#app {
		height: 100vh;
	}
</style>
