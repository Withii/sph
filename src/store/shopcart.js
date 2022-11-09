import {reqCartList, reqDeleteCartById, reqUpdateCheckCart} from "@/api/ajax";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    },
};
const actions = {
//    获取购物车列表
    async getCartList({commit}) {
        let result = await reqCartList()
        console.log(result, "购物车");
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
//    删除购物车产品
    async deleteCartById({commit}, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
//    修改购物车某一产品选择状态
    async updateCheckCart({commit}, {skuId, isChecked}) {
        let result = await reqUpdateCheckCart(skuId, isChecked)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('flia'))
        }
    },
    //删除所有选中的产品  context
    deleteAllCheckedCart(context) {
        //context：小仓库，
        //获取购物车中所有的产品
        let PromiseAll = [];
        context.getters.cartList.cartInfoList.forEach(item => {
            if (item.isChecked == 1) {
                let promise = context.dispatch('deleteCartById', item.skuId)
                PromiseAll.push(promise)
            }
            return Promise.all(PromiseAll)
        })


    },
    //修改全部产品的状态
    updateAllCartChecked(context, isChecked) {
        let promiseAll=[]
        context.state.cartList[0].cartInfoList.forEach(time => {
            let promise = context.dispatch('updateCheckCart', {skuId: time.skuId, isChecked})
            promiseAll.push(promise)
        })
        //最终的返回结果
        return Promise.all(promiseAll)
    },
};
const getters = {
    //获取购物车信息
    cartList(state) {
        return state.cartList[0] || {}
    },
}

export default {
    state, mutations, actions, getters
}
