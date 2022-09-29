//state :仓库存储数据的地方
import {reqCategoryList,reqGetBannerList} from "@/api";
//Home模块小仓库
const state = {
    //state中的数据默认初始值不能瞎写
    categoryList: [],
    bannerList:[],
}
//  mutations是修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    }
}
//action: 处理action ，可以处理自己的业务逻辑，也可处理异步
const actions = {
//    通过api中的接口函数，向服务器发送请求
    async categoryList({commit}) {
        let result = await reqCategoryList()
        console.log('>>>>執行了',result)
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async  getBannerList({commit}){
           let  result =await  reqGetBannerList()
            if (result.code===200){
                commit("GETBANNERLIST",result.data)
            }
        console.log(result)
    },

}
//getter 理解为计算属性，用于简化仓库中的数据，让组件获取仓库的数据更加简单
const getters = {}

export default {
    state, mutations, actions, getters

}