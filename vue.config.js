const path = require("path")

//Vue CLI 配置项)
module.exports = {
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    devServer:{
        proxy:{
            '/mgw': {
                target:'http://movie.miguvideo.com',
                changeOrigin:true
              },
               '/lovev': {
                target:'http://movie.miguvideo.com',
                changeOrigin:true
              },
              '/mta-service': {
                target:'http://movie.miguvideo.com',
                changeOrigin:true
              },
              "/ajax": {
                  target:"http://m.maoyan.com",
                  changeOrigin:true
              },
              "/publish":{
                  target:"http://movie.miguvideo.com",
                  changeOrigin:true
              }
        }
    },
    
    // 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象
    configureWebpack:{
         resolve:{
             alias:{
                //  字符拼接  @代表 "./src"
                 "@":path.join(__dirname,"./src"),
                 "components":path.join(__dirname,"./src/components"),
                 "views":path.join(__dirname,"./src/views"),
                 "common":path.join(__dirname,"./src/common"),
                 "utils":path.join(__dirname,"./src/utils"),
                 "router":path.join(__dirname,"./src/router"),
                 "store":path.join(__dirname,"./src/store"),
                 "lib":path.join(__dirname,"./src/lib"),
                 "api":path.join(__dirname,"./src/api"),
             }
         }
    }    
}
