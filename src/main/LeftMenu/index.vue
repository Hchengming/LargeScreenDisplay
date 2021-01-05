<template>
	<div class="menu-left clearfix">
		<ul class="menu-list" :class="{isCollapse}">
			<li class="menu-item" v-for="(item, index) in menuList" :key="index" @click="addChart(item)">
				<i class="iconfont icon-zhuzhuangtutubiao"></i>
				<span>{{item.name}}</span>
			</li>
		</ul>
		<div class="menu-show" @click="changeMenuShow">
			<i :class="!isCollapse?'el-icon-arrow-left':'el-icon-arrow-right'"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'menu-left',
		data() {
			return {
				isCollapse: false,
				menuList: [{
						name: '柱状图'
					}, {
						name: '折线图'
					}, {
						name: '饼图'
					}, {
						name: '表格'
					}, {
						name: '柱状图'
				}],
				editableTabs: [],
				editableTabsValue: '2',
			}
		},
		methods: {
			// 左侧菜单折叠展开
			changeMenuShow() {
				this.isCollapse = !this.isCollapse
				document.querySelector('.main-center').style.left = this.isCollapse ? `30px` : `230px`
			},
			// 左侧菜单项点击事件
			addChart(item) {
				this.editableTabs.push({
					title: item.name,
					name: item.name
				})
				this.$emit('postEditableTabs', this.editableTabs)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu-left {
		float: left;
		height: 100%;
		white-space: nowrap;
		.menu-list {
			width: 200px;
			height: 100%;
			float: left;
			color: #bcc8d4;
			transition: width 0.3s;
			background-color: #1D1F26;
	
			.menu-item {
				padding: 10px;
	
				&:hover {
					background-color: #29333C;
					cursor: pointer;
					color: #fff;
				}
			}
		}
	
		.isCollapse {
			width: 0px;
		}
	
		.menu-show {
			float: left;
			width: 30px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30px;
			background-color: #171B22;
	
			&:hover {
				background-color: #242F39;
				cursor: pointer;
			}
		}
	}
	
</style>
