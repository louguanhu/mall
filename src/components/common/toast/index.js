import Toast from "@/components/common/toast/Toast";

const obj={

}

obj.install = function (Vue) {
  //
  // Vue.extend(Toast)
  // //把toast的元素添加为body的子元素
  // document.body.appendChild(Toast.$el)
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2.new的方式，根据组件构造器，构造一个组件对象
  const  toast = new toastContrustor()

  // 3.将组件对象手动的挂载在某一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast的$el对应的就是上面的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj