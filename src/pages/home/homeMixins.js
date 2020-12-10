export const mixinData = {
	data() {
		return {
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
			isCollapse: false,
			editableTabs: [],
			editableTabsValue: '2',
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
			},{
				value: 'bold',
				label: 'bold'
			},{
				value: 'bolder',
				label: 'bolder'
			},{
				value: 'lighter',
				label: 'lighter'
			}],
			fontPositionOptions: [{
				value: 'left',
				label: '左对齐'
			},{
				value: 'right',
				label: '右对齐'
			},{
				value: 'center',
				label: '居中'
			}]
		}
	}
}
