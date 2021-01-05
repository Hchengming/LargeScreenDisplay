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
				document.querySelector('.main-center').style.width = this.isCollapse ? `calc(100% - 330px)` : `calc(100% - 530px)`
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
