//detail 详情页小厂库
import {reqGoodInfo,reqAddOrUpdateShopCart} from "@/api/ajax";
//封装游客身份模块，-生成一个随机字符串，（不能在变）
import {getUUID} from "@/utils/uuid_token"
const state = {

    goodInfo: {},
    //用户临时身份
    uuid_token:getUUID(),

};
const mutations = {
    //goodInfo详情信息
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    },
};
const actions = {
//获取产品信息
    async getGoodInfo({commit}, skuId) {
        let result = await reqGoodInfo(skuId)
        if (result.code === 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}) {
        //加入购物车返回的解构
        let  result  =await reqAddOrUpdateShopCart(skuId,skuNum)
    //    判断加入购物车是否成功  由于 async addOrUpdateShopCar 是一个Promise函数 返回一个非空字符串都是成功
        if (result.code == 200) {
            return 'ok';
        } else {
            return  Promise.reject(new  Error('faile'))
        }
    },
};
const getters = {
    //简化路径导航数据
    categoryView(state) {
        //categoryView 当前计算出来的categoryView属性至少是一个空对象，假报错不会有
        return state.goodInfo.categoryView || {}
    },
    //简化产品信息数据
    skuInfo(state){
       return state.goodInfo.skuInfo  || {}
    },
//    简化产品售卖属性的数据
    spuSaleAttrList(state) {
            return state.goodInfo.spuSaleAttrList  || []
    },


};
export default {
    state, mutations, actions, getters
}