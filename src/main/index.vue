<template>
	<div class="home-container clearfix">
		<header-title></header-title>
		<div class="home-main">
			<!-- 左边区域 -->
			<left-menu @postEditableTabs='postEditableTabs'></left-menu>
			<!-- 中间区域 -->
			<content-page :editableTabs='editableTabs'></content-page>
			<!-- 右边区域 -->
			<right-setting></right-setting>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from './Header/index.vue'
	import LeftMenu from './LeftMenu/index.vue'
	import RightSetting from './RightSetting/index.vue'
	import ContentPage from './Page/ContentPage/index.vue'
	export default {
		name: '',
		data () {
			return {
				editableTabs: []	
			}
		},
		components: {
			HeaderTitle,
			LeftMenu,
			RightSetting,
			ContentPage
		},
		methods: {
			postEditableTabs(tabData) {
				this.editableTabs = tabData
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-container {
		position: relative;
		height: 100%;
		color: #eee;
		overflow: hidden;
		
		.home-main {
			position: relative;
			height: calc(100% - 50px);
		}
	}
</style>
