<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>


<script>
import Scroll from "better-scroll"
export default {
    name:"alley-BScroll",
    mounted(){
        new Scroll(this.$refs.wrapper)
    }

}
</script>


<style>
.wrapper{
    width:100%;height:100%;
}

</style>
