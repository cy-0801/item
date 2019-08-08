<template>
     <!--  正在热映-->
        <div class="List" ref="aaa">
          <ul class="addNow" >
                  <v-touch class="list1" 
                        v-for="(item,index) in movieList" 
                        :key="index"
                        tog="li"
                        @tap="handler(item.filmId,item.filmName)"
                    >
                   <img :src="item.httpsPics.lowResolutionV"  alt="">  
                   <div class="fileCon">
                       <span>{{item.filmName}}</span>
                       <div class="jieShao">
                       <p>导演:{{item.director}}</p>
                       <p>{{item.actor}}</p>
                       </div>
                       <button>购票</button>
                   </div> 
                  </v-touch>
          </ul>
        </div>
</template>
<script>
import {movie_now_api} from "api/movie.js"
import BScroll from "better-scroll"
export default {
    name:"Movienow", 
    async created(){
        if(!sessionStorage.getItem("movieList")){
            let data = await movie_now_api();
            this.movieList = data.body.movieList;
            
            sessionStorage.setItem("movieList",JSON.stringify(data.body.movieList))
        }else{
            this.movieList = JSON.parse(sessionStorage.getItem("movieList"));
        }
    },
    data(){
        return{
            movieList:[]
        } 
    },
    mounted(){
        new BScroll(this.$refs.aaa,{
            tap:true,
            click:true
        });
    },
    methods:{
        handler(id,name){
            this.$router.push({name:"Detail",params:{id,name}}) 
        }
    }
}
</script>



<style>
/* 正在热映列表 */
.List{
    width: 100%;
    height: 100%; 
    overflow: auto;
}
.List .addNow{
    width: 100%;
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
