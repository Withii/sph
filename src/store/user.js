//登录和注册
import {reqGetCode, reqUserLogin, reqUsuerRegister,reqUserInfo,reqLogout} from "@/api/ajax";
import {setToken,getToken,removeToken} from "@/utils/token";


const state = {
    code: '',
    token: getToken(),
    userInfo: {},

};
const mutations = {
    //修改验证码
    GETCODE(state, code) {
        state.code = code
    },
    //token
    USERLOGIN(state, token) {
        state.token = token
    },
//    获取用户信息
    GETUSERINFO(state,userInfo) {
        state.userInfo=userInfo
    },
    //清除用户信息 和数据
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        removeToken()
    },
};
const actions = {
//    获取验证码
    async getCode({commit}, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            console.log(result.data, 'result.data', phone)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户注册
    async usuerRegister({commit}, user) {
        let result = await reqUsuerRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },
//    用户登录 token
    async userLogin({commit}, user) {
        let result = await reqUserLogin(user)
        console.log(result);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            //持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
  async  getUserInfo({commit}) {
       let result = await  reqUserInfo()
      // console.log(result)
      if (result.code == 200) {
          commit('GETUSERINFO', result.data);
          return 'ok';
      } else {
          return  Promise.reject(new  Error('falie'))
      }
    },
    //用户退出
    async userLogout({commit}) {
        let result = await  reqLogout()
        if (result) {
            commit('CLEAR');
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }

    },
};
const getters = {}

export default {
    state, mutations, actions, getters
}