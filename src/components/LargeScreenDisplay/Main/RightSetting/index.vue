<template>
	<div class="operate-right">
		<div class="operate-title">配置</div>
		<bar-chart></bar-chart>
	</div>
</template>

<script>
	import BarChart from './barChart/index.vue'
	export default {
		name: 'right-setting',
		components: {
			BarChart
		}
	}
</script>

