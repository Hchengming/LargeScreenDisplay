<template>
	<div class="main-center">
		<!-- 头部标签 -->
		<div class="tabs-container">
			<i class="el-icon-arrow-left" @click="handleScroll(100)"></i>
			<div class="tabs-content">
				<div class="tabs-list" :style="{'left':tagListLeft+'px'}">
					<el-button type="primary" size='mini' v-for="(item,index) in editableTabs" :key="index">
						{{item.title}}
					</el-button>
				</div>
			</div>
			<i class="el-icon-arrow-right" @click="handleScroll(-100)"></i>
		</div>
		<!-- 中间画布 -->
		<div class="main-content">
			<div class="ruler">
				<div class="corner">px</div>
				<div class="x-rules">
					<span v-for='i in 30' :key="i" :style="{'left': i* 100 + 'px'}">{{i * 100}}</span>
				</div>
				<div class="y-rules">
					<span v-for='i in 30' :key="i" :style="{'top': i* 100 + 'px'}">{{i * 100}}</span>
				</div>
			</div>

		</div>
		<!-- 底部工具栏 -->
		<div class="content-bottom-tool clearfix">
			<div class="tool-left">
				<span>缩放</span>
				<el-input-number v-model="toolData.scaleNum" size="mini" :controls="false"></el-input-number>
				<span>%</span>
				<el-select v-model="toolData.resolution" placeholder="请选择" size="mini">
					<el-option v-for="item in resolutionOptions" :key="item.label" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="tool-right">
				<span>x</span>
				<el-input-number v-model="toolData.scaleNum" size="mini" :controls="false"></el-input-number>
				<span>y</span>
				<el-input-number v-model="toolData.scaleNum" size="mini" :controls="false"></el-input-number>
				<span>w</span>
				<el-input-number v-model="toolData.scaleNum" size="mini" :controls="false"></el-input-number>
				<span>h</span>
				<el-input-number v-model="toolData.scaleNum" size="mini" :controls="false"></el-input-number>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'main-center',
		props: {
			editableTabs: {
				type: Array,
				default: null 
			}
		},
		data() {
			return {
				tagListLeft: 0,
				toolData: {
					scaleNum: 100,
					resolution: ''
				},
				resolutionOptions: [{
					value: 'auto',
					label: 'auto'
				}, {
					value: [800, 600],
					label: '800 * 600'
				}, {
					value: [1024, 768],
					label: '1024 * 768'
				}, {
					value: [1366, 768],
					label: '1366 * 768'
				}, {
					value: [1920, 1080],
					label: '1920 * 1080'
				}]
			}
		},
		methods: {
			// 标签左右箭头点击事件
			handleScroll(offset) {
				const tabsContainerWidth = document.querySelector('.tabs-content').offsetWidth
				const tabsListWidth = document.querySelector('.tabs-list').offsetWidth
				if (tabsListWidth < tabsContainerWidth) return
				if (offset < 0 ) {
					if(tabsListWidth - tabsContainerWidth - -this.tagListLeft <= -offset) {
						this.tagListLeft = -(tabsListWidth - tabsContainerWidth) 
					}else {
						this.tagListLeft = this.tagListLeft + offset
					}
				} else {
					this.tagListLeft = this.tagListLeft + offset
					if(this.tagListLeft >= 0) {
						this.tagListLeft = 0
					}
				}


				/* if (offset > 0) {
					this.tagListLeft = Math.min(0, this.tagListLeft + offset);
					console.log(this.tagListLeft)
				} else {
					if (tabsContainerWidth < tabsListWidth) {
						if (this.tagListLeft < -(tabsListWidth - tabsContainerWidth)) {
							this.tagListLeft = this.tagListLeft;
						} else {
							this.tagListLeft = Math.max(
								this.tagListLeft + offset,
								tabsContainerWidth - tabsListWidth
							);
						}
					} else {
						this.tagListLeft = 0;
					}
				} */
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-center {
		position: absolute;
		right: 300px;
		left: 230px;
		height: 100%;
		transition: all 0.3s;

		.tabs-container {
			position: relative;
			height: 40px;

			.el-icon-arrow-left,
			.el-icon-arrow-right {
				position: absolute;
				top: 0;
				width: 30px;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: aquamarine;
				cursor: pointer;
			}

			.el-icon-arrow-left {
				left: 0;
			}

			.el-icon-arrow-right {
				right: 0;
			}

			.tabs-content {
				position: absolute;
				height: 100%;
				left: 30px;
				right: 30px;
				padding-left: 10px;
				top: 0;
				background-color: #fff;
				overflow: hidden;

				.tabs-list {
					display: flex;
					position: absolute;
					top: 0;
					padding : 0 10px;
					align-items: center;
					height: 100%;
					transition: left 0.2s;
				}

			}
		}

		.main-content {
			height: calc(100% - 40px - 40px);
			background: url(~@/assets/img/bg1.png) no-repeat;
			background-size: 100% 100%;

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
		}

		.content-bottom-tool {
			position: absolute;
			left: 0;
			right: 0;
			height: 40px;
			line-height: 40px;
			background-color: #404040;
			padding: 0 20px;
			font-size: 14px;

			.el-input-number {
				width: 60px;
			}

			.el-select {
				width: 120px;
			}

			.tool-left {
				float: left;
			}

			.tool-right {
				float: right;
			}
		}
	}
</style>
