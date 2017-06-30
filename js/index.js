// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    title: '实时加载' + new Date(),
    isButton: false
  },
  created () {
    console.log('now', this.title)
  }
})
