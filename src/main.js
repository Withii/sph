import Vue from 'vue'
import App from './App.vue'
//引入 element-ui
import { Button,MessageBox } from 'element-ui';


//引入路由
import router from '@/router'
//引入vuex
import store from '@/store'
//进入mock文件
import  '@/mock/mockserve'
// 引入 Swiper 样式
import 'swiper/css/swiper.min.css';
// 全局组件
//引入轮播图组件
import Carousel from "@/components/Carousel/Carousel";
//三级联动组件，--全局组件
import TypeNav from "@/components/typeNav";
//分页器
import Pagination from "@/components/Pagination/Pagination";
//引入全部api接口文档
import  * as API from '@/api/ajax'
//引入图片懒加载插件
import VueLazyload from "vue-lazyload";
//引入图片
import ys from "@/assets/images/1.gif"

//参数,第一个全局组件的名字，第二个参数， 那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//全局组件
Vue.component(Button.name,Button)
//ElementUI注册组件的时候还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false
//注册图片懒加载插件
Vue.use(VueLazyload,{
    loading:ys
})
//引入vee-validate 插件 表单验证插件
import  '@/plugins/validate'



new Vue({

    render: h => h(App),
    //配置$bus 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus=this
        Vue.prototype.$API=API
    },
    //注册路由
    router,
    //注册vuex 组件实例上会多了一个 store属性
    store,


}).$mount('#app')
