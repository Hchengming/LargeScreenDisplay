<template>
	<div class="main-center">
		<!-- 头部tabs -->
		<top-nav :editableTabs='editableTabs'></top-nav>
		<!-- 中间画布 -->
		<div class="main-content">
			<!-- 标尺 -->
			<div class="ruler">
				<div class="corner">px</div>
				<div class="x-rules">
					<span v-for='i in 30' :key="i" :style="{'left': i* 100 + 'px'}">{{i * 100}}</span>
				</div>
				<div class="y-rules">
					<span v-for='i in 30' :key="i" :style="{'top': i* 100 + 'px'}">{{i * 100}}</span>
				</div>
			</div>
			<!-- 画布区域(页面显示区域) -->
			<div class="canvas-area"></div>
		</div>
		<!-- 底部工具栏 -->
		<bottom-setting></bottom-setting>
	</div>
</template>

<script>
	import BottomSetting from '../BottomSetting/index.vue'
	import TopNav from '../TopNav/index.vue'
	export default {
		name: 'content-page',
		props: {
			editableTabs: {
				type: Array,
				default: null 
			}
		},
		components: {
			BottomSetting,
			TopNav
		}
	}
</script>
