import LuckyWheel from './LuckyWheel.vue'

// 给组件配置install方法 
LuckyWheel.install = Vue => Vue.component(LuckyWheel.name, LuckyWheel)

export {
  LuckyWheel // 组件列表
}

export default {
  LuckyWheel
}