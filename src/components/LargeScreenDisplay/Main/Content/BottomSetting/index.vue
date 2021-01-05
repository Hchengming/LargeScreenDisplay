<template>
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
</template>

<script>
	export default {
		name: 'bottom-setting',
		data() {
			return {
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
					}
				]
			}
		}
	}
</script>

