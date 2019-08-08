<template>
  <div class="center">
    <div class="movie">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../public/image/11.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/12.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/13.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/14.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/15.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/16.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/17.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/image/18.jpeg" />
          </div>
        </div>
      </div>
    </div>
    <div class="zzsp">
      <div class="div0">正在售票</div>
      <div class="div1">
        <ul>
          <li v-for="(item,index) in saleP" :key="index">
            <img :src="item.h5pics.lowResolutionV" />
            <p>{{item.filmName}}</p>
            <p>{{item.actor}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="jingcai">
      <p>精彩活动</p>
      <img src="../../../public/image/825.gif" alt />
    </div>
  </div>
</template>
<script>
import { movie_now_api } from "api/movie";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Recommend",
  data() {
    return {
      saleP: []
    };
  },
  async created() {
    let data = await movie_now_api();
    this.saleP = data.body.movieList;
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      effect: "coverflow",
      slidesPerView: 3,
      centeredSlides: true
    });
  }
};
</script>
<style scoped>
.center {
  width: 100%;
  position: absolute;
  top: 0.8rem;
  bottom: 0.6rem;
  overflow-y: auto;
}
.center .movie {
  width: 100%;
  height: 2rem;
  background: rgba(0, 0, 0, 0.3);
  padding-top: 0.2rem;
}
.center .movie img {
  width: 100%;
  height: 100%;
}
.center .zzsp {
  width: 100%;
  height: 2.5rem;
}
.center .zzsp .div0 {
  width: 100%;
  height: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  border-left: 5px solid red;
}
.center .zzsp .div1 {
  width: 100%;
  height: 79%;
  overflow-x: auto;
}
.center .zzsp .div1 ul {
  height: 100%;
  display: flex;
}
.center .zzsp .div1 ul li {
  width: 1.3rem;
  height: 100%;
  float: left;
  font-size: 0.16rem;
  margin-right: 30px;
}
.center .zzsp .div1 ul li p {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
}
.center .zzsp .div1 ul li img {
  width: 1.3rem;
  height: 1.5rem;
}
.center .jingcai {
  width: 100%;
  height: 2rem;
}
.center .jingcai p {
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  width: 100%;
}
.center .jingcai img {
  width: 3.75rem;
  height: 1.7rem;
}
</style>
