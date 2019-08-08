<template>
<div class="big">
  <div class="small">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../public/image/1.jpeg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/2.jpeg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/3.jpeg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/4.jpeg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/5.jpeg" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="content1">
      <p>热门推荐(免费)</p>
      <ul>
        <a href="#" v-for="(item,index) in freeList" :key="index">
          <li>
            <img :src="item.img | ToImg('170.230') "/>
            <p>{{item.nm}}</p>
            <p>{{item.comingTitle}}</p>
          </li>
        </a>
      </ul>
    </div>

    <div class="content2">
      <p>票房过亿的电影</p>
      <ul>
        <a href="#">
          <li>
            <img src="../../../public/image/222.jpeg" />
            <p>原谅他77次</p>
            <p>Twins再合体</p>
          </li>
        </a>
      </ul>
    </div>
  </div>
  </div>
</template>


<script>
import { recommend_api } from "api/movie"
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return {
      freeList:[]
    }
  },
  async created(){
      let data = await recommend_api();
      // console.log(data);
      this.freeList = data.coming.slice(0,6);
      // console.log(this.freeList);
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
      }
    })
  }
}
</script>
<style scoped>
.big{
  width:100%;
  height:100%;
  overflow: auto;
}
.small{
  width:100%;
}
html {
  font-size: 31.25vw;
}
.swiper-wrapper {
  width: 4.14rem;
  height: 2.38rem;
}
.swiper-container {
  border-bottom: 0.1rem solid #f0f0f0;
}
.swiper-wrapper img {
  width: 100%;
  vertical-align: middle;
}
.content1 {
  border-bottom: 0.1rem solid #f0f0f0;
}
.content1 p:nth-child(1) {
  height: 0.45rem;
  line-height: 0.45rem;
  background: url("../../../public/image/module_icon.png") no-repeat 0 0.13rem;
  background-size: 0.03rem;
  font-size: 0.16rem;
  color: #666666;
  padding-left: 0.1rem;
}
.content1 li {
  width: 1.2rem;
  float: left;
}
.content1 ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content1 a {
  width: 32%;
}
.content1 li img {
  width: 1.2rem;
  height: 1.75rem;
}
.content1 p:nth-child(2) {
  font-size: 0.14rem;
  color: #666;
  padding: 0 0.12rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content1 p:nth-child(3) {
  font-size: 0.12rem;
  color: #999;
  padding: 0 0.12rem;
  margin-bottom: 0.08rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content2 p:nth-child(1) {
  /* width: 100%; */
  height: 0.45rem;
  line-height: 0.45rem;
  background: url("") no-repeat 0 0.13rem;
  background-size: 0.03rem;
  font-size: 0.16rem;
  color: #666666;
  padding-left: 0.1rem;
}

.content2 a {
  width: 1.17rem;
  border-right: 0.01rem solid #fff;
}
.content2 ul {
  height: 100%;
  display: flex;
  overflow: auto;
}
.content2 li img {
  width: 1.17rem;
  height: 1.75rem;
}
.content2 p:nth-child(2) {
  font-size: 0.14rem;
  color: #666;
  padding: 0 0.12rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content2 p:nth-child(3) {
  font-size: 0.12rem;
  color: #999;
  padding: 0 0.12rem;
  margin-bottom: 0.08rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>