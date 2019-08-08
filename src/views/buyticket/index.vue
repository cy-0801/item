<template>
  <div class="box">
       <div class="head">  
        <div class="areaSlected">
            <a href="#">
                <span class="cityName">北京</span>
                <i class="iconfont">&#xe649;</i>  
            </a>  
        </div>

        <div class="tabBtn">
           <router-link 
           tag="button"
           to="/buyticket/film"
           class="films">影片</router-link >
           
           <router-link 
            tag="button"
            to="/buyticket/cinema"
           class="cinemas">影院</router-link > 
        </div>  
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
 
</div>
</template>
<script>

import Movienow from "components/movienow"
export default {
    name:"Buyticket",
    components:{
        Movienow,
  },
}
</script>
<style>
.box{
    width: 100%;
    height: 100%;
    position: relative;  
}
/* 头部 */
.head {
    width: 100%;
    height: 0.43rem;
    border-bottom: 1px solid #E6E6E6;
    line-height: 0.44rem;
    text-align: center;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 100;
}

.head .areaSlected {
    position: absolute;
    left: 0.12rem;
}

.head .areaSlected span {
    float: left;
    color: #666;
    font-size: 0.15rem;
}

.head .areaSlected i {
    float: left;
    width: 0.20rem;
    height: 0.44rem;
}

.head .tabBtn {
    width: 1.30rem;
    height: 0.30rem;
    margin: auto;
 background:#fff;
}

.head .tabBtn .films {
    width: 0.63rem;
    height: 0.28rem;
    border: 1px solid #F74444;
    border-radius: 5px 0 0 5px;
   
}
.head .tabBtn .router-link-active{
    background: #F74444;
    color: #fff;
 }
.head .tabBtn .cinemas {
    border: 1px solid #F74444;
    width: 0.63rem;
    height: 0.28rem;
    border-radius: 0 0.05rem 0.05rem 0; 
     
}
/*中间 */
.boxTwo{
    position:absolute;
    top:0.44rem;
    width: 100%;
    height: 100%;
}

.boxTwo .addNow{
    width: 100%;
}
/* 正在热映 */
.mune,
.muneT {
    width: 100%;
    height: 0.46rem;
    font-size: 15px;
}
.mune .muneT .leftMune {
    width: 50%;
    height: .44rem;
    float: left;
    text-align: center;
   line-height: .44rem;
    
}
.mune .muneT  .router-link-active{
     border-bottom: 0.02rem solid #F74444;
    color: #F74444;
 }
.mune .muneT .rightMune {
    width: 50%;
    height: .44rem;
    float: left;
    text-align: center;
   line-height: .44rem;
}

 
</style>
