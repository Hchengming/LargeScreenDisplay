<template>
	<div class="home-container clearfix">
		<div class="home-top">
			XXXX大屏展示
		</div>
		<div class="home-main">
			<!-- 左边区域 -->
			<menu-left @postEditableTabs='postEditableTabs'></menu-left>
			<!-- 中间区域 -->
			<main-center :editableTabs='editableTabs'></main-center>
			<!-- 右边区域 -->
			<operate-right></operate-right>
		</div>
	</div>
</template>

<script>
	import {
		mixinData
	} from './homeMixins.js'
	import MenuLeft from './child/menuLeft/index.vue'
	import MainCenter from './child/mainCenter/index.vue'
	import OperateRight from './child/operateRight/index.vue'
	export default {
		mixins: [mixinData],
		components: {
			MenuLeft,
			MainCenter,
			OperateRight
		},
		methods: {
			postEditableTabs(tabData) {
				this.editableTabs = tabData
			}
		}
	}
</script>

<style lang="scss">
	.home-container {
		position: relative;
		height: 100%;
		color: #eee;
		overflow: hidden;
		
		.home-top {
			height: 50px;
			line-height: 50px;
			font-size: 30px;
			font-weight: bold;
			text-align: center;
			background-color: mediumaquamarine;
		}

		.home-main {
			position: relative;
			height: calc(100% - 50px);
		}
	}
</style>
