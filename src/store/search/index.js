//state :仓库存储数据的地方

import {reqGetSearchInfo} from "@/api/ajax";

//search模块小仓库
const state = {
    searchList: {}
}
//  mutations是修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
        console.log('search',state.searchList )
    }

}
//action: 处理action ，可以处理自己的业务逻辑，也可处理异步
const actions = {
//    获取search模块数据  params={}默认是一个空对象，如有传参过来就用传参，没有就默认空对象
    async getSearchList({commit}, params = {}) {
        // params形参：是用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)

        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data)
        }
        console.log('search', result)
    }
}
//getter 理解为计算属性，用于简化仓库中的数据，让组件获取仓库的数据更加简单
const getters = {
    //当前形参state,是当前仓库中的state,并非大仓库中state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    },

}

export default {
    state, mutations, actions, getters

}