import {reqAddressInfo,reqOrder} from "@/api/ajax";

const state = {
    //用户地址
    userAddress: [],
    //商品清单
    userOrder:{}
};
const mutations = {
    //用户地址信息
    GETUSERADDRESS(state,userAddress) {
        state.userAddress = userAddress;
    },
    //获取用户产品清单数据
    GETORDERINFO(state,userOrder) {
        state.userOrder=userOrder
    },
};
const actions = {
    //获取用户地址信息
    async getUserAddress({commit}) {
        let result = await reqAddressInfo();
        if (result.code === 200) {
            commit('GETUSERADDRESS',result.data)
        }
        console.log(result.data,'用户地址')
    },
    //获取商品清单数据
    async getOrderInfo({commit}) {
        let result =await  reqOrder()
        if (result.code === 200) {
            commit('GETORDERINFO',result.data)
        }
        console.log(result,'商品清单')
    },
};
const getters = {};
export default {
    state, mutations, actions, getters
}