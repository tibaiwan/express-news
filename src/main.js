// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Route from './router/route'
// import Router from './router'
import VueResource from 'vue-resource'

// 引入element组件化框架
import ElementUI from 'element-ui'
import { tinymce } from './components/index'
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(tinymce)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
