<template>
      <div class="header">
            <div class="header0">
                <div class="header0_left">
                    <i class="iconfont">&#xe608;</i>
                    <span>0</span>元
                </div>
                <div class="header0_right">
                    <i class="iconfont i0">&#xe810;</i>
                    <i class="iconfont">&#xe638;</i>
                </div>
            </div>
            <div class="header1">
                <div class="div1">
                    <ul>
                        <router-link v-for="(item,index) in navs" :key="index"
                        :to="item.path"
                         tag="li"
                        >{{item.title}}</router-link>
                        
                    </ul>
                </div>
                <div class="ulright">
                    <i class="iconfont">&#xe63c;</i>
                </div>
            </div>
        </div>

</template>
 
 <script>
 export default {
     name:"TopBar",
     data(){
         return{
             navs:[
                 {
                     title: "推荐",
                     path:"/seefilm/recommend",
                },
                 {
                     title: "免费看片",
                     path:"/seefilm/free_movies",
                },
                 {
                     title: "影单",
                     path:"/seefilm/show_list",
                },
                 {
                     title: "小视屏",
                     path:"/seefilm/small_video",
                },
                 {
                     title: "影评",
                     path:"/seefilm/film_review",
                },
             ] 
         }
     }
 }
 </script>


 <style>
 .contain{
    position: relative;width:100%;height:100%;
}
.header{
    width:100%;
    height:0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header0 i{font-size:0.24rem;}
.header0{
    width:100%;height:.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header0_left{margin-left:.15rem;font-size:0.16rem;}
.header0_right{margin-right:.15rem;}
.header0 .header0_left span{margin-left:0.05rem;}
.header0 .header0_right .i0{margin-right:0.05rem;}
.header1{
    width:100%;height:.4rem;
    display: flex;
    position: relative;
}
.header1>.div1{
    width:88%;height:100%;
    overflow-x: auto;
}
.header1 ul {
    height:100%;
    width:4rem;
}
.header ul li {
    font-size:0.16rem;
    float:left;
    height:100%;
    font-weight: 900;
    width:.8rem;
    height:100%;
    line-height:0.4rem;
    text-align: center;
}
.header1 .ulright{
    width:0.4rem;
    height:0.4rem;
    line-height: 0.4rem;
    position:absolute;
    right:0;
}
.header1 .ulright i{
    font-size: 0.2rem;
}
 </style>
 