import LuckyWheel from './LuckyWheel.vue'

// 给组件配置install方法 
LuckyWheel.install = Vue => Vue.component(LuckyWheel.name, LuckyWheel)

export {
  install, // 导出的对象必须具备一个 install 方法
  LuckWheel // 组件列表
}

export default {
  LuckyWheel
}