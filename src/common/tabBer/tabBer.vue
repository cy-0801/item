<template>
   <div id="footer">
<ul>
    <router-link
    v-for="(item,index) in navs" :key="index"
    :to="item.path"
    tag="li">
    <i class="iconfont" v-html="item.icon"></i>
    <span>{{item.title}}</span>
    </router-link>
</ul>
   </div>
</template>
<script>
export default {
    name:"TabBer",
    data(){
        return{
            navs:[
                  {
                      icon:"&#xe6d6",
                      title:"看片",
                      path:"/seefilm"
                  },
                  {
                      icon:"&#xe607",
                      title:"购票",
                      path:"/buyticket"
                  },
                  {
                      icon:"&#xe70b",
                      title:"我的",
                      path:"/mine"
                  },
            ]
        }
    }
}
</script>


<style>
#footer,#footer ul{
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    border-top: 1px solid #dadada;
}
#footer ul{
    display: flex;
}
#footer ul li{
    height:0.55rem;
    flex: auto;
    text-align: center;
    color: #666;
    padding-top: 0.08rem;
}
#footer ul li i{ 
    display: block;
    font-size: 0.22rem;
    
}
#footer ul li span{
       
       display: block;
        width: 100%;
        font-size: 0.16rem;
}
#footer ul .router-link-active{
    color: #F74444;
}

</style>
