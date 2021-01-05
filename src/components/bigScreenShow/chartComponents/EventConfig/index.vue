<template>
	<div class="event-container">
		<div class="option-item">
			<label class="option-item-label">提示事件</label>
			<div class="option-item-content">
				<el-button size="mini">编辑</el-button>
			</div>
		</div>
		<div class="option-item">
			<label class="option-item-label">标题事件</label>
			<div class="option-item-content">
				<el-button size="mini">编辑</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'event-config',
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.event-container {
		padding: 10px 20px;

		.el-button {
			background: transparent;
			color: #409eff;
			border-color: #409eff;
			border-radius: 0;
		}

		.option-item {
			display: flex;
			margin-bottom: 20px;

			.option-item-label {
				flex: 3;
				font-size: 14px;
				line-height: 27px;
			}

			.option-item-content {
				flex: 6;

			}
		}
	}
</style>
