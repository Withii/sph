import Detail from "@/views/Detail";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess"
import Center from "@/views/Center";
//引入二级路由信息
import MyOrder from "@/views/Center/myOrder/MyOrder";
import GroupOder from "@/views/Center/groupOder/groupOder";
//路由配置信息
export default [
    //个人购物中心
    {
        path: '/center',
        component: Center,
        meta: {isShow: true},
        //    二级路由
        children: [
            {
                //我的订单
                path: 'myorder',
                component: MyOrder
            }, {
                path: 'groupoder',
                component: GroupOder
            },
            //从定向，让默认显示我的订单
            {
                path: '/center',
                redirect:'/center/myorder'
            },

        ],

    },
    //支付成功页
    {
        path: '/PaySuccess',
        component: PaySuccess,
        meta: {isShow: true}
    },
    //支付页面
    {
        path: '/pay',
        component: Pay,
        meta: {isShow: true},
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            }else{
                next(false)
            }
        },

    },
    //订单详情页
    {
        path: '/trade',
        component: Trade,
        meta: {isShow: true},
    //    路由独享守卫
        beforeEnter: (to, from, next) => {
            //判断去交易页面是否从购物车而来
            if (from.path == '/shopsart') {
                next()
            }else {
                next(false)
            }
        },

    },
    //购物车入路由
    {
        path: '/shopsart',
        component: ShopCart,
        meta: {isShow: true}
    },
    //加入购物车成功页
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {isShow: true}
    },
    //详情页
    {
        //Params数据占位 —— :skuid
        path: '/detail/:skuid',
        component: Detail,
        meta: {isShow: true}
    },
    {
        path: '/home',
        component: ()=>import("@/views/Home") ,
        meta: {isShow: true}
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {isShow: true},
        name: 'search'
    },
    {
        path: '/login',
        component: Login,
        meta: {isShow: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {isShow: false}
    },
//    重定向，在项目跑起来的时候,访问/，立马跳转到首页
    {
        path: '*',
        redirect: '/home'
    },
];