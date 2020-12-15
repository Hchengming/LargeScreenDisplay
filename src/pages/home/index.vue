<template>
	<div class="home-container clearfix">
		<div class="home-top">
			XXXX大屏展示
		</div>
		<div class="home-main">
			<!-- 左边区域 -->
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
			<!-- 中间区域 -->
			<div class="main-center">
				<!-- 头部标签 -->
				<div class="tabs-container">
					<i class="el-icon-arrow-left"></i>
					<div class="tabs-content">
						<div class="tabs-list">
							<el-button type="primary" size='mini' v-for="(item,index) in editableTabs" :key="index">
								{{item.title}}
							</el-button>
						</div>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<!-- 中间画布 -->
				<div class="main-content">

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
			<!-- 右边区域 -->
			<div class="operate-right">
				<div class="operate-title">配置</div>
				<div class="operate-list">
					<div class="operate-item active">
						<i class="el-icon-s-tools"></i>
					</div>
					<div class="operate-item">
						<i class="el-icon-document-copy"></i>
					</div>
					<div class="operate-item">
						<i class="el-icon-guide"></i>
					</div>
					<div class="operate-item">
						<i class="el-icon-s-data"></i>
					</div>
				</div>
				<ul>
					<li>
						<div class="chart-type">柱状图</div>
						<div>
							<label>图层名称</label>
							<input type="text" value="柱状图" />
						</div>
						<div>
							<label>隐藏</label>
							<el-switch v-model="isHideChart" active-color="#409EFF" inactive-color="#666">
							</el-switch>
						</div>
						<el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :unique-opened="true">
							<el-submenu index="1">
								<span slot="title">柱体设置</span>
								<el-form ref="form" class="option-list" :model="cylinderForm" label-width="80px">
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
								<el-form ref="form" class="option-list" :model="titleForm" label-width="80px">
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
								<el-form ref="form" class="option-list" :model="xAsixForm" label-width="90px">
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
								<el-form ref="form" class="option-list" :model="yAsixForm" label-width="90px">
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
								<el-form ref="form" class="option-list" :model="tipNumForm" label-width="90px">
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
								<el-form ref="form" class="option-list" :model="tipLangForm" label-width="90px">
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
								<el-form ref="form" class="option-list" :model="legendForm" label-width="90px">
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
					</li>
				</ul>

			</div>

		</div>
	</div>
</template>

<script>
	import {
		mixinData
	} from './homeMixins.js'
	export default {
		mixins: [mixinData],
		methods: {
			changeMenuShow() {
				this.isCollapse = !this.isCollapse
				/* document.querySelector('.main-center').style.width = this.isCollapse ? `calc(100% - 30px - 300px)` :
					`calc(100% - 230px - 300px)` */
				document.querySelector('.main-center').style.left = this.isCollapse ? `30px` : `230px`
			},
			addChart(item) {
				this.editableTabs.push({
					title: item.name,
					name: item.name
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-container {
		position: relative;
		height: 100%;
		color: #eee;
		overflow: hidden;
		// background: url(../../assets/bg1.png) no-repeat 100% 100%;
		.home-top {
			height: 50px;
			line-height: 50px;
			font-size: 30px;
			font-weight: bold;
			text-align: center;
			background-color: mediumaquamarine;
		}

		.home-main {
			position: relative;
			height: calc(100% - 50px);

			.menu-left {
				float: left;
				height: 100%;

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
							left: 10px;
							align-items: center;
							height: 100%;
						}

					}
				}

				.main-content {
					height: calc(100% - 40px - 40px);
					background: url(../../assets/bg1.png) no-repeat 100% 100%;
				}

				.content-bottom-tool {
					height: 40px;
					line-height: 40px;
					background-color: #404040;
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

			.operate-right {
				position: absolute;
				top: 0;
				right: 0px;
				width: 300px;
				height: 100%;
				background-color: #1D1F26;
				overflow: auto;

				.operate-title,
				.chart-type {
					text-align: center;
					line-height: 30px;
					background-color: #2D343C;
				}

				.operate-list {
					display: flex;
					height: 40px;
					line-height: 40px;

					.operate-item {
						flex: 1;
						text-align: center;
						cursor: pointer;
					}

					.active {
						border-top: 2px solid #409EFF;
						color: #409EFF;
					}
				}

				.option-list {
					background-color: #000;
					padding: 0px 20px;

					.option-item {
						padding: 10px 0;
						margin-bottom: 0;

						.el-form-item__label {
							text-align: left;
							color: #eee;
						}

						.el-color-picker {
							top: 50%;
							transform: translateY(-50%);

							.el-color-picker__trigger {
								border: none;
							}
						}
					}
				}
			}
		}
	}
</style>
