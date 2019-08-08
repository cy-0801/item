<template>

    <div class="boxTwo">
        
    <!-- 上映中 -->
        <div class="mune">
            <ul class="muneT">
                <router-link 
                 class="leftMune"
                 tag="li"
                 to="/buyticket/film/movienow"
                 ><span>正在热映</span>
                 </router-link>
                <router-link 
                tag="li"
                 to="/buyticket/film/moviecoming"
                 class="rightMune"><span>即将上映</span>
                 </router-link>
            </ul>
        </div>
         <router-view></router-view>
 </div>

</template>
<script>
export default {
    
}
</script>
<style>

</style>
