<template>
	<div class="data-container">
		<div class="option-item">
			<label class="option-item-label">数据类型</label>
			<div class="option-item-content">
				<div>
					<el-radio v-model="dataTypeRadio" label="static">静态数据</el-radio>
				</div>
				<div>
					<el-radio v-model="dataTypeRadio" label="dynamic">动态数据</el-radio>
				</div>
			</div>
		</div>
		<div v-if="dataTypeRadio==='static'">
			<div class="option-item">
				<label class="option-item-label">数据值</label>
				<div class="option-item-content">
					<el-button size="mini">编辑</el-button>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="option-item">
				<label class="option-item-label">接口地址</label>
				<div class="option-item-content">
					<el-input type="textarea" placeholder="请输入内容" v-model="interfaceAddress">
					</el-input>
				</div>
			</div>
			<div class="option-item">
				<label class="option-item-label">接口方式</label>
				<div class="option-item-content">
					<div>
						<el-radio v-model="reqMethodRadio" label="post">POST</el-radio>
					</div>
					<div>
						<el-radio v-model="reqMethodRadio" label="get">GET</el-radio>
					</div>
				</div>
			</div>
			<div class="option-item">
				<label class="option-item-label">接口参数</label>
				<div class="option-item-content">
					<el-button size="mini">编辑</el-button>
				</div>
			</div>
			<div class="option-item">
				<label class="option-item-label">刷新时间</label>
				<div class="option-item-content">
					<el-input-number v-model="refresTime" size="mini" controls-position="right" ></el-input-number>
				</div>
			</div>
		</div>
		
		<div class="option-item">
			<label class="option-item-label">数据处理</label>
			<div class="option-item-content">
				<el-button size="mini">编辑</el-button>
			</div>
		</div>
		<div class="option-item">
			<label class="option-item-label">通用处理</label>
			<div class="option-item-content">
				<el-button size="mini">编辑</el-button>
			</div>
		</div>
		<el-button size="mini" class="w100">刷新</el-button>
	</div>
</template>

<script>
	export default {
		name: 'data-config',
		data() {
			return {
				dataTypeRadio: 'static',
				interfaceAddress: '',
				reqMethodRadio: 'post',
				refresTime: null
			}
		},
	}
</script>

<style lang="scss" scoped>
	.data-container {
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
