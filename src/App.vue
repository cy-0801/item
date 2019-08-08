<template>
  <div id="app"> 
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
   <TabBer v-if="$route.meta.tabBer"/>
 
  </div>
</template>

<script>
import TabBer from "common/tabBer/tabBer.vue"
import axios from "axios"


export default {
  name:"App",
  components:{
    TabBer,
 
  },
 
}
</script>

<style >

</style>
