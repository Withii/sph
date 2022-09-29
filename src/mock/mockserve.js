//引入mock 模块
import Mock from 'mockjs';

//引入json数据
import banners from './banners.json'
import floors from './floors.json'

//mock数据:第一个参数 请求的地址，第二个参数：请求对象
Mock.mock("/mock/banner",{code:200,data:banners})
Mock.mock('/mock/floors',{code:200,data:floors})