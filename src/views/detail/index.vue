<template>
<div class="fir">
  <div class="sec">
    <div class="detail_top">
      <div class="detail_topone">
        <img src="../../../public/image/big.jpeg" />
      </div>
      <div class="detail_toptwo">
        <p>
          <img src="../../../public/image/small.jpeg" />
        </p>
        <p>{{name}}</p>
        <p>
          评分：
          <span>9.1</span>分
        </p>
        <p>喜剧|奇幻|动画</p>
        <p>内地</p>
        <p>2019-07-26 大陆上映</p>
        <p>哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世哪吒之魔童降世</p>
      </div>
    </div>

    <div class="detail_content">
      <p>票房过亿的电影</p>
      <ul>
        <a href>
          <li>
            <img src="../../../public/image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
        <a href>
          <li>
            <img src="../../../public/image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
        <a href>
          <li>
            <img src="../../../public/image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
        <a href>
          <li>
            <img src="../../../public/image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
        <a href>
          <li>
            <img src="../../../public/image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
        <a href>
          <li>
            <img src="image/star.jpeg" />
            <p>饺子</p>
            <p>导演</p>
          </li>
        </a>
      </ul>
    </div>
    <div class="box"></div>
    <div class="detail_bottom">
      <p>
        <i class="iconfont detail_iconfont">&#xe655;</i>
        <span>收藏</span>
      </p>
      <p>
        <i class="iconfont detail_iconfont">&#xe60d;</i>
        <span>写影评</span>
      </p>
      <p>
        <span>选座购票</span>
      </p>
      <p>
        <span>在线观看</span>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import { detail_api } from "api/movie"
export default {
  name:"detail",
  props:["id","name"],
  created(){
    console.log(this.id,this.name);
    // let data = await detail_api(this.id);
    // console.log(data,111);
  }
}
</script>

<style scoped>
.box{
  width:100%;height:.4rem;
}
.fir{
  overflow: auto;
  width:100%;height:100%;
}
.sec{
  width:100%;
}

html{
    font-size: 31.25vw;
}

.detail_top{
    width: 3.75rem;
    /* height: 100%; */
    position: relative;
}
.detail_topone{
    width: 3.75rem;
    height: 2.20rem;
    position: relative;
    /* float: left; */
    /* clear: both; */
}
.detail_topone img{
    width: 3.75rem;
    height: 2.20rem;
}
.detail_toptwo{
    width: 3.55rem;
    /* height: 100%; */
    padding: 0 .1rem;
    position: absolute;
    float: left;
    margin-top: -.75rem;
    position: relative;
    /* border: 0.01rem solid #fff; */
}
.detail_toptwo img{
    width: .95rem;
    height: 1.43rem;
    float: left;
}
.detail_toptwo p:nth-child(2){
    float: left;
    width: 1.7rem;
    font-size: .18rem;
    color: #fff;
    width: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: .2rem;
    padding-left: .1rem;
}
.detail_toptwo p:nth-child(3){
    float: left;
    width: 1.7rem;
    width: 1rem;
    font-size: .14rem;
    color: #f8b246;
    margin-left: .1rem;
}
.detail_toptwo p:nth-child(4){
    float: left;
    width: 1.7rem;
    font-size: .13rem;
    color: #1A1A1A;
    margin: .15rem 0 0 .1rem;
}
.detail_toptwo p:nth-child(5){
    float: left;
    width: 1.7rem;
    font-size: .13rem;
    color: #1A1A1A;
    margin: .05rem 0 0 .1rem;
}
.detail_toptwo p:nth-child(6){
    float: left;
    width: 1.7rem;
    font-size: .13rem;
    color: #1A1A1A;
    margin: .05rem 0 0 .1rem;
}
.detail_toptwo p:nth-child(7){
    float: left;
    display: block;
    width: 3.4rem;
    font-size: .14rem;
    color: #666;
    margin: .2rem .1rem .2rem .1rem;
}



.detail_content{
    clear: both;
    border-top: .1rem solid #f0f0f0;
}
.detail_content p:nth-child(1){
    /* width: 100%; */
    height: .42rem;
    line-height: .42rem;
    background:url("../../../public/image/module_icon.png") no-repeat 0 .13rem;
    background-size: .03rem;
    font-size: .15rem;
    color: #666666;
    padding-left: .01rem;
}
.detail_content a{
    width: 1.17rem;
    border-right: .01rem solid #fff;
}
.detail_content ul{
    height: 100%;
    display: flex;
    overflow: auto;
}
.detail_content li img{
    width: .93rem;
    height: 1.23rem;
}
.detail_content p:nth-child(2){
    font-size: .13rem;
    color: #4d4d4d;
    padding-top: 0.05rem;
    width: .93rem;
    height: .22rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.detail_content p:nth-child(3){
    font-size: .12rem;
    color: #999;
    padding-bottom: 0 .12rem;
    width: .93rem;
    height: .21rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}



.detail_bottom{
    width: 100%;
    height: .4rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
}
.detail_bottom p:nth-child(1){
    width: 25%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .13rem;
    color: #3a3a3a;
}
.detail_bottom .detail_iconfont{
    font-size: .2rem;
    color: #000;
}
.detail_bottom p:nth-child(2){
    width: 25%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .13rem;
    color: #3a3a3a;
}
.detail_bottom p:nth-child(3){
    width: 25%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .13rem;
    color: #fff;
    background: #fec22c;
}
.detail_bottom p:nth-child(4){
    width: 25%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .13rem;
    color: #fff;
    background: #f74444;
}

</style>
