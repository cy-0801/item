<template>
  <div class="box">
    <ul >     
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
        <li>
            <img src="../../../public/image/Ameng.jpeg">
            <span>咕咕大片速看，玩具总动员4咕咕大片速看，玩具总动员4</span>
        </li>
    </ul>
  </div>
</template>

<script>
import {recommend_api} from "api/movie.js"
export default {
    async created(){
        let data = await recommend_api();
        console.log(data);
    }
}
</script>

<style scoped>
.box{
    width: 3.75rem;
    height: 5rem;
    border-bottom: .08rem solid #fff;
    overflow: auto;
}
.box li{
    width:100%;
    position: relative;
    margin-bottom:0.05rem;
}
li img{
    width: 100%;
    height:90%;
}
li span{
    position: absolute;
    left: .12rem;
    right:.12rem;
    bottom: .12rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    font-size: .14rem;
    width:90%;
}

</style>
