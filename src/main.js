// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.config.productionTip = false


// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 全局注册可拖动Dialog指令
import elDragDialog from './utils/el-drag-dialog/index'
Vue.use(elDragDialog)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})