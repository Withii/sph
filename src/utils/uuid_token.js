import { v4 as uuidv4 } from 'uuid';
//生成一个随机字符串，且每次不发生变化，游客身份持久储存
export  const getUUID=()=>{
//先从本地存储获取uuid(看一下本地存储是否存在）
    let uuid_token = localStorage.getItem('UUIDTODEN');
    // 如没有uuid 生成
    if (!uuid_token) {
    //    生成游客临时身份
        uuid_token=uuidv4()
        //本地存储一次
        localStorage.setItem('UUIDTODEN',uuid_token)
    }
    return uuid_token
}

