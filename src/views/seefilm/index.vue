<template>
<div id="seeFilm">
    <TopBar/>
   <keep-alive>
       <router-view></router-view>
   </keep-alive>
</div>
</template>

<script>
import TopBar from "common/topBar/index.vue"
export default {
    name:"Seefilm",
    components:{
        TopBar,
    }
}
</script>
<style>
#seeFilm{
    height:100%;
}
</style>

