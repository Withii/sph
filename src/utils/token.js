//存储token
export  const setToken =(token)=>{
    localStorage.setItem("TOKEN",token)
}
//获取token
export const getToken=()=> localStorage.getItem("TOKEN")
//清空本地token
export const removeToken=()=> localStorage.removeItem("TOKEN")