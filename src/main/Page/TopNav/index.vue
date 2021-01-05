<template>
	<!-- 头部tabs -->
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
</template>

<script>
	export default {
		name: 'top-nav',
		props: {
			editableTabs: {
				type: Array,
				default: null 
			}
		},
		data () {
			return {
				tagListLeft: 0,
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
			},
			
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
