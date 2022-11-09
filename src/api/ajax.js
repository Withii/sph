//当前模块 对API进行统一管理
import requests from "@/api/request";
import mockAjax from "@/api/mockAjax";
import {date} from "mockjs/src/mock/random/date";
//三级联动接口    /api/product/getBaseCategoryList   get  无参数

export const reqCategoryList = () => {
    return requests({url: 'product/getBaseCategoryList', method: 'get'})
}
//获取首页轮播图
export const reqGetBannerList = () => {
    return mockAjax.get('/banner')
}
//获取floor数据
export const reqGetFloors = () => {
    return mockAjax.get('/floors')
}

// 获取搜索模块数据  /api/list  post
/* 参数例子
* {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// params 至少是一个对象
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}

//获取产品详情接口  /api/item/{ skuId } 请求方式 get
export const reqGoodInfo = (skuId) => requests.get(`/item/${skuId}`)

//将产品添加到购物车中，(获取更新某一个产品的个数）
//     /api/cart/addToCart/{ skuId }/{ skuNum }   post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests.post(`/cart/addToCart/${skuId}/${skuNum}`)

//  获取购物车列表
//  /api/cart/cartList  GET
export const reqCartList = () => requests.get('/cart/cartList')


//删除购物车产品的接口
//   /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCartById = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`)

//修改产品选中状态
// /api/cart/checkCart/{skuId}/{isChecked}  get
export const reqUpdateCheckCart = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`)

//获取验证码  /api/user/passport/sendCode/{phone} get
export const reqGetCode =(phone)=>requests.get(`/user/passport/sendCode/${phone}`)

//用户注册   /api/user/passport/register post
export  const reqUsuerRegister =(date)=>requests.post('/user/passport/register',date)

//用户登录  /api/user/passport/login post
export  const reqUserLogin =(date)=>requests.post('/user/passport/login',date)

//  获取用户信息【需要携带token向服务器获取用户信息】   /api/user/passport/auth/getUserInfo    get
export  const reqUserInfo=()=>requests.get('/user/passport/auth/getUserInfo')

//退出登录 /api/user/passport/logout get
export const reqLogout =()=>requests.get('/user/passport/logout')

//获取用户地址信息  /api/user/userAddress/auth/findUserAddressList  get
export  const reqAddressInfo =()=>requests.get('/user/userAddress/auth/findUserAddressList')

// 获取订单交易页信息 /api/order/auth/trade get
export  const  reqOrder=()=>requests.get('/order/auth/trade')

//提交订单  /api   post
export  const  reqSubmitOrder=(tradeNo,data)=>requests.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`,data)

// 获取订单支付信息  /api/payment/weixin/createNative/{orderId}   get
export  const reqPayInfo=(orderId)=>requests.get(`/payment/weixin/createNative/${orderId}`)

//获取支付订单状态 /api/payment/weixin/queryPayStatus/{orderId}  get
export  const reqPayStatus=(orderId)=>requests.get(`/payment/weixin/queryPayStatus/${orderId}`)

//获取个人中心的数据  /api/order/auth/{page}/{limit}  get
// page -页码  limit -每页显示数量
export  const reqMyorderList=(page,limit)=>requests.get(`/order/auth/${page}/${limit}`)
