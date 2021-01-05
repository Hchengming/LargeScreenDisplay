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
			<!-- 画布区域 -->
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

<style lang="scss" scoped>
	.main-center {
		position: absolute;
		right: 300px;
		left: 230px;
		height: 100%;
		transition: left 0.3s;
		
		.main-content {
			position: relative;
			height: calc(100% - 40px - 40px);
			
		
			.ruler {
				position: relative;
		
				.corner {
					width: 18px;
					height: 18px;
					background-color: #B0B0B0;
					color: #6a6a6a;
					font-size: 12px;
					text-align: center;
				}
		
				.x-rules {
					position: absolute;
					top: 0px;
					left: 18px;
					width: 3000px;
					height: 18px;
					background: #B0B0B0 url(~@/assets/img/top-ruler.png) repeat-x;
					background-size: 100px 18px;
					span {
						position: absolute;
						top: -2px;
						font-size: 12px;
						color: #6a6a6a;
						transform: translateX(-50%);
					}
				}
				.y-rules {
					position: absolute;
					top: 18px;
					left: 0px;
					width: 18px;
					height: 3000px;
					background: #B0B0B0 url(~@/assets/img/left-ruler.png) repeat-y;
					background-size: 18px 100px;
					span {
						position: absolute;
						left: -5px;
						font-size: 12px;
						color: #6a6a6a;
						transform: translateY(-50%) rotate(-90deg);
					}
				}
			}
			
			.canvas-area {
				position: absolute;
				top: 18px;
				left: 18px;
				bottom: 0;
				right: 0;
				background: url(~@/assets/img/bg1.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>
