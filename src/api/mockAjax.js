// 对axios 进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
//nprogress 的start ：进度条的开始   done ：进度条结束
// create 亏唉
//1 利用axios 对象的方法create 创建一个axios实例

const requests = axios.create({
//    配置对象
//    基础路径， 发送请求的时候会带上api
    baseURL: "/mock",
//    请求超时 时间
    timeout: 5000,
})
//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出之前做一些事情
requests.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    //进度条开始工作
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
//    成功的回调函数，服务器相应的数据回来以后，响应拦截器可以检测到，可以做一些事情
//    进度条结束
    nprogress.done()
    return res.data
}, (error) => {
//    响应失败的回调函数
    return Promise.reject(new Error('faile'))
})
export default requests
