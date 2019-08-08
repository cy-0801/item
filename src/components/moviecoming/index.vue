<template>
     <div class="List" ref="aaa"> 
         
          <ul class="addNow">
                <li class="list1" v-for="(item,index) in movieList" :key="index">
                    <img :src="item.httpsPics.lowResolutionV">  
                    <div class="fileCon">
                        <span>{{item.filmName}}</span>
                        <div class=" jieShao">
                                <p>导演：<span>{{item.director}}</span> </p>
                                <p>{{item.actor}}</p>
                        </div>
                        <button :class=" item.isPreSale === '1' ?  'active' : '' ">{{ item.isPreSale === "1" ? '预售' : '想看'}}</button>
                    </div> 
                </li>
          </ul>
        </div>
</template>

<script>
import {movie_coming_api} from "api/movie.js"  //解构赋值
import BScroll from "better-scroll"
export default {
    name:"MovieComing",
    data(){
        return {
            movieList:[]
        }
    },
    async created(){
        if(!sessionStorage.getItem("movieComingList")){
            let data = await movie_coming_api();
            this.movieList=data.body.movieList;
            sessionStorage.setItem("movieComingList",JSON.stringify(data.body.movieList))
        }else{
            this.movieList=JSON.parse(sessionStorage.getItem("movieComingList"));
        }        
    },
    mounted(){
        new BScroll(this.$refs.aaa);
    }



}



</script>

<style scoped>
.List .addNow .list1 .fileCon .active{
    color:rgba(0,0,255,0.5);
}
.List , .addNow{
    width: 100%;
}
.List .time{
    width: 100%;
    height:0.19rem;
    padding: 0.05rem  0.12rem;
    background: rgb(239,239,239);
    font-size: 14px;
}

.List .addNow .list1{
    width: calc(100%-24px);
    height: 1.04rem;
    display: block;
    padding: .12rem .12rem 0;
    border-bottom: 0.01rem solid #e7e7e7;
}
.List .addNow .list1 img{
    float: left;
    width: .66rem;
    height:1.00rem;
}
.List .addNow .list1 .fileCon{
    float: left;
    width: 75%;
    padding-top: 3%;
    padding-bottom: 3%;
    margin-left: .12rem;
    position: relative;
}
.List .addNow .list1 .fileCon span{
    font-size: 0.16rem;
    color: #666;
    width: .64rem;
    height: .21rem;
  
}
.List .addNow .list1 .fileCon .jieShao{
width: 1.84rem;
height: 0.40rem;
margin-top:.18rem;
}

.List .addNow .list1 .fileCon .jieShao p{
    line-height: .20rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: .14rem;
}
.List .addNow .list1 .fileCon button{
    width: .46rem;
    height: .26rem;
    line-height: .26rem;
     background-color: white;
      position:absolute;
       top: 50%;
      right: 0;
      margin-top: -13px;
      color: #F74444;
      border: 1px solid#F74444;
      border-radius:3px; 
}
</style>


