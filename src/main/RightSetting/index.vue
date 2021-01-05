<template>
	<div class="operate-right">
		<div class="operate-title">配置</div>
		<bar-chart></bar-chart>
	</div>
</template>

<script>
	import BarChart from '../../pages/home/child/operateRight/chartsComponent/barChart/index.vue'
	export default {
		name: 'right-setting',
		components: {
			BarChart
		}
	}
</script>

<style lang="scss" scoped>
	.operate-right {
		position: absolute;
		top: 0;
		right: 0px;
		width: 300px;
		height: 100%;
		background-color: #1D1F26;
		overflow: auto;
	
		.operate-title {
			text-align: center;
			line-height: 30px;
			background-color: #2D343C;
		}
	}
</style>
