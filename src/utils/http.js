//  // axios的封装
// import axios from "axios";
// import qs from "qs"
// import loading from "lib/loading/index.js"
// let vm = loading()
// const server = axios.create({
//     //`baseURL` 
//     timeout:5000,
//     withCredentials:true
// })
// server.interceptors.request.use((config)=>{
//     if(config.method.toUpperCase() == "GET"){
//        // config.params = {...config.data}
//     }else if(config.method.toUpperCase() == "POST"){
//         config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
//         //config.data = qs.stringify(config.data)
//         config.data = config.data;
//     }  
//     vm.handlemount();
//     return config;
// },(err)=>{
//     Promise.reject(err);
// })

// // 响应拦截器
// server.interceptors.response.use((res)=>{
//     if(res.statusText == "OK"){
//         vm.handleDestory();
//         return res.data
//     }
// },(err)=>{
//     Promise.reject(err);
// })

// export default (method,url,data={})=>{
//     if(method.toUpperCase() == "GET"){
//         return server.get(url,{
//             params:data
//         })
//     }else if(method.toUpperCase() == "POST"){
//         return server.post(url,data);
//     }
// }




//////////////////////////////////////
import axios from "axios";
import qs from "qs"

// 引入loading
import loading from "lib/loading/index.js"
// 创建VM实例
let vm = loading()

const server = axios.create({
    //`baseURL` 将自动加在 `url` 前面，

    timeout:5000,
    //`withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials:true
})
server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){
       // config.params = {...config.data}
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "application/x-www-form-urlencoded";
        
    }
    vm.handlemount();
    return config;
},(err)=>{
    Promise.reject(err);
})

// 响应拦截器
server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        vm.handleDestory();
        return res.data
    }
},(err)=>{
    Promise.reject(err);
})

export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){     
        return server.get(url,{
            params:data
        }) 
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}
