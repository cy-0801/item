<template>
   <div class="main">
        <!-- 附近 -->
        <div class="main_top">
            <div class="nearby">
               <span>附近</span>
               <i class="iconfont">&#xe649;</i>
            </div>       
        </div>

    <!-- 影院列表 -->
     <div class="cinemabox">
         <ul class="cinemabox_ul">
             <li class="cinemabox_ul_li" v-for="(item,index) in cinemaes" :key="index">
                 <p>{{item.a}}</p>
                 <p>{{item.b}}</p>
             </li>
         </ul>
     </div>
  </div>

</template>
<script>

export default {
    name:"Cinema",
    data(){
        return {
            cinemaes:[
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
                {
                    a:"保利国际影城（龙旗广场店",
                    b:"昌平区黄平路19号院3号楼龙旗购物中心3楼"
                },
            ]
        }
    }
}
</script>
<style scoped>
/* 影院列表 */
.cinemabox{
    width:100%;
    height:100%;
    overflow: auto;
}
.cinemabox_ul{
    width:100%;
    display: flex;
    flex-direction: column;
}
.cinemabox_ul_li{
    padding-left:0.2rem;
    width:100%;
    height:0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size:0.15rem;
    border-bottom:1px solid #CCC;
}
.cinemabox_ul_li p:nth-child(1){
    margin-bottom:0.05rem;
}



/*中 */
.main{
    position: absolute;
    top:0.44rem;
    width: 100%;
    height: 100%;
}
/* 附近*/
 .main_top{
    width: 100%;
    height: 0.41rem;
}
 .main_top .nearby{
    width: 100%;
    height: 0.41rem;
    text-align: center;
    line-height: 0.41rem;
}
 .main_top .nearby span{
    float: left;
    display: block;
    width: 0.66rem;
    color: #F74444;
    font-size: 14px !important;
    border-bottom: 2px solid #F74444;
}
 .main_top .nearby i{
    font-size: 20px !important;
    display: block;
    float: right;
    display: block;
    width:0.45rem;
    
}


 



</style>
