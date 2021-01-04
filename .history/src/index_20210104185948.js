// 这里import 的 btn和btnDemo.vue的name属性名相同 ！
import LuckyWheel from './LuckyWheel.vue'
// 给组件配置install方法 
LuckyWheel.install = Vue => Vue.component(LuckyWheel.name, LuckyWheel)

export default LuckyWheel;