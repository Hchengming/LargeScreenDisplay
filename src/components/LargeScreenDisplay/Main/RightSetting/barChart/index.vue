<template>
	<div>
		<div class="operate-list">
			<div :class="['operate-item', currentOperateIndex===index?'active':'']" v-for="(item,index) in operateList"
				:key="item.icon" @click="changeOperate(index)" :title="item.tipText">
				<i :class="item.icon"></i>
			</div>
		</div>
		<ul>
			<li v-show="currentOperateIndex===0">
				<basic-config></basic-config>
			</li>
			<li v-show="currentOperateIndex===1">
				<data-config></data-config>
			</li>
			<li v-show="currentOperateIndex===2">
				<event-config></event-config>
			</li>
			
		</ul>
	</div>
</template>

<script>
	import { mixinsData } from './mixisData.js'
	import BasicConfig from './BasicConfig/index.vue'
	import DataConfig from './DataConfig/index.vue'
	import EventConfig from './EventConfig/index.vue'
	export default {
		name: 'bar-chart',
		mixins: [mixinsData],
		components: {
			BasicConfig,
			DataConfig,
			EventConfig
		},
		methods: {
			changeOperate(index) {
				this.currentOperateIndex = index
			}
		}
	}
</script>