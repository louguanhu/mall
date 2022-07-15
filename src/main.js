import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
//添加事件总线，通过新建vue实例的方式
//prototype(原型链)
Vue.prototype.$bus=new Vue()
//安装toast
Vue.use(toast)
//解决移动端300ms延迟问题
FastClick.attach(document.body)
//使用图片懒加载
Vue.use(VueLazyload,{
  //图片还没加载时默认图片
  // loading:require('图片地址')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
