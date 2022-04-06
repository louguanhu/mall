import axios from  'axios'

export function request (config) {
  //1.创建实例
   const  instance = axios.create({
     baseURL:'http://152.136.185.210:7878/api/hy66/',
     timeout:5000
   })
  //请求拦截
  instance.interceptors.request.use(config=>{
    //请求成功原路返回数据
      return config
  },err=>{

  })
  //响应拦截
  instance.interceptors.response.use(res=>{
      return res
  },err=>{

  })
// instance本身就是一个Promise，直接返回Promise
  return instance(config)
}
