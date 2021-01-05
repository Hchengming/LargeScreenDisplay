<template>
	<div>
		<div class="chart-type">柱状图</div>
		<div class="chart-name">
			<label>图层名称</label>
			<input type="text" value="柱状图" />
		</div>
		<div class='chart-show'>
			<label>隐藏</label>
			<el-switch v-model="isHideChart" active-color="#409EFF" inactive-color="#666">
			</el-switch>
		</div>
		<el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :unique-opened="true">
			<el-submenu index="1">
				<span slot="title">柱体设置</span>
				<el-form ref="form" class="option-list" :model="cylinderForm" label-width="100px">
					<el-form-item class="option-item" label="最大宽度">
						<el-slider v-model="cylinderForm.width"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="圆角">
						<el-slider v-model="cylinderForm.width"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="最小高度">
						<el-slider v-model="cylinderForm.width"></el-slider>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="2">
				<span slot="title">标题设置</span>
				<el-form ref="form" class="option-list" :model="titleForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="titleForm.isShowTitle" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="标题名字">
						<el-input v-model="titleForm.name" size="mini" placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item class="option-item" label="字体颜色">
						<el-input v-model="titleForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="titleForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
					<el-form-item class="option-item" label="字体粗细">
						<el-select v-model="titleForm.weight" placeholder="请选择" size="mini">
							<el-option v-for="item in fontWeightOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="titleForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
					<el-form-item class="option-item" label="字体位置">
						<el-select v-model="titleForm.position" placeholder="请选择" size="mini">
							<el-option v-for="item in fontPositionOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="3">
				<span slot="title">X轴设置</span>
				<el-form ref="form" class="option-list" :model="xAsixForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="xAsixForm.isShowXAsix" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="显示网格线">
						<el-switch v-model="xAsixForm.isShowGridlines" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="名字">
						<el-input v-model="xAsixForm.name" size="mini" placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item class="option-item" label="网格线颜色">
						<el-input v-model="xAsixForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="xAsixForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
					<el-form-item class="option-item" label="文字角度">
						<el-slider v-model="cylinderForm.angle"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="xAsixForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="4">
				<span slot="title">Y轴设置</span>
				<el-form ref="form" class="option-list" :model="yAsixForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="yAsixForm.isShowXAsix" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="显示网格线">
						<el-switch v-model="yAsixForm.isShowGridlines" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="名字">
						<el-input v-model="yAsixForm.name" size="mini" placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item class="option-item" label="网格线颜色">
						<el-input v-model="yAsixForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="yAsixForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="yAsixForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="5">
				<span slot="title">数值设置</span>
				<el-form ref="form" class="option-list" :model="tipNumForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="tipNumForm.isShowXAsix" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="字体粗细">
						<el-select v-model="titleForm.weight" placeholder="请选择" size="mini">
							<el-option v-for="item in fontWeightOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="tipNumForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
					<el-form-item class="option-item" label="字体颜色">
						<el-input v-model="tipNumForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="tipNumForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="6">
				<span slot="title">提示语设置</span>
				<el-form ref="form" class="option-list" :model="tipLangForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="tipLangForm.isShowXAsix" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="tipLangForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
					<el-form-item class="option-item" label="字体颜色">
						<el-input v-model="tipLangForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="tipLangForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="7">
				<span slot="title">坐标轴边距设置</span>
				<el-form ref="form" class="option-list" :model="axisPositionForm" label-width="100px">
					<el-form-item class="option-item" label="左边距(像素)">
						<el-slider v-model="axisPositionForm.left"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="顶边距(像素)">
						<el-slider v-model="axisPositionForm.top"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="右边距(像素)">
						<el-slider v-model="axisPositionForm.right"></el-slider>
					</el-form-item>
					<el-form-item class="option-item" label="底边距(像素)">
						<el-slider v-model="axisPositionForm.bottom"></el-slider>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="8">
				<span slot="title">图例操作</span>
				<el-form ref="form" class="option-list" :model="legendForm" label-width="100px">
					<el-form-item class="option-item" label="显示">
						<el-switch v-model="legendForm.isShowXAsix" active-color="#409EFF" inactive-color="#666">
						</el-switch>
					</el-form-item>
					<el-form-item class="option-item" label="字体颜色">
						<el-input v-model="legendForm.color" size="mini" placeholder="请输入内容">
							<el-color-picker slot="suffix" size="mini" v-model="legendForm.color"></el-color-picker>
						</el-input>
					</el-form-item>
					<el-form-item class="option-item" label="图例宽度">
						<el-input-number v-model="legendForm.width" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
					<el-form-item class="option-item" label="横向位置">
						<el-select v-model="legendForm.position" placeholder="请选择" size="mini">
							<el-option v-for="item in fontPositionOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="option-item" label="纵向位置">
						<el-select v-model="legendForm.position" placeholder="请选择" size="mini">
							<el-option v-for="item in fontPositionOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="option-item" label="布局朝向">
						<el-select v-model="legendForm.position" placeholder="请选择" size="mini">
							<el-option v-for="item in fontPositionOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="option-item" label="字体大小">
						<el-input-number v-model="legendForm.size" size="mini" :controls="false" controls-position='right' :min="12"
							:max="40"></el-input-number>
					</el-form-item>
				</el-form>
			</el-submenu>
			<el-submenu index="9">
				<span slot="title">自定义配色</span>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'basic-config',
		data () {
			return {
				isHideChart: false,
					cylinderForm: {
						width: null,
					},
					titleForm: {
						isShowTitle: false,
						name: '',
						color: '',
						weight: '',
						size: 12,
						position: 'left'
					},
					xAsixForm: {
						isShowXAsix: false,
						isShowGridlines: false,
						name: '',
						color: '',
						angle: 0,
						size: 12
					},
					yAsixForm: {
						isShowXAsix: false,
						isShowGridlines: false,
						name: '',
						color: '',
						size: 12
					},
					tipNumForm: {
						isShowXAsix: false,
						color: '',
						size: 12,
						weight: ''
					},
					tipLangForm: {
						isShowXAsix: false,
						color: '',
						size: 12,
					},
					axisPositionForm: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					},
					legendForm: {
						isShowXAsix: false,
						color: '',
						size: 12,
						width: '',
						position: null,
					
					},
					fontWeightOptions: [{
						value: 'normal',
						label: 'normal'
					}, {
						value: 'bold',
						label: 'bold'
					}, {
						value: 'bolder',
						label: 'bolder'
					}, {
						value: 'lighter',
						label: 'lighter'
					}],
					fontPositionOptions: [{
						value: 'left',
						label: '左对齐'
					}, {
						value: 'right',
						label: '右对齐'
					}, {
						value: 'center',
						label: '居中'
					}],
				
			}
		}
			
	}
</script>

<style lang="scss" scoped>
	.chart-type {
		text-align: center;
		line-height: 36px;
		background-color: #2D343C;
	}
	.chart-name,
	.chart-show {
		padding: 12px 0px 12px 20px;
	}

	
	.option-list {
		background-color: #000;
		padding: 0px 20px;
	
		.option-item {
			padding: 10px 0;
			margin-bottom: 0;
	
	
		}
	}
</style>
