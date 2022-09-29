//vuex大仓库
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)
//引入小仓库
import home from "@/store/home";
import search from "@/store/search";
// 对外暴露
export default new Vuex.Store({
    modules: {
        home, search
    }
})


