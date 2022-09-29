import Vue from 'vue'
import App from './App.vue'
//三级联动组件，--全局组件
import TypeNav from "@/components/typeNav";
//参数,第一个全局组件的名字，第二个参数， 那个组件
Vue.component(TypeNav.name, TypeNav)
//引入路由
import router from '@/router'
//引入vuex
import store from '@/store'
//进入mock文件
import  '@/mock/mockserve'
// 引入 Swiper 样式
import 'swiper/css/swiper.min.css';
Vue.config.productionTip = false



new Vue({
    //注册vuex 组件实例上会多了一个 store属性
    store,
    render: h => h(App),
    //注册路由
    router,


}).$mount('#app')
