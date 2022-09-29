//当前模块 对API进行统一管理
import requests from "@/api/request";
import mockAjax from "@/api/mockAjax";
//三级联动接口    /api/product/getBaseCategoryList   get  无参数

export const reqCategoryList = () => {
        return requests({url: 'product/getBaseCategoryList', method: 'get'})
}
//获取首页轮播图
export const reqGetBannerList =()=>{
    return mockAjax.get('/banner')
}
//获取首页轮播图
export const reqGetFloors =()=>{
    return mockAjax.get('/floors')
}
