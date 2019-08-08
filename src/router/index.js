import Vue from "vue";
import VueRouter from "vue-router"
import seefilm from "./seefilm"
import buyticket from "./buyticket"
import mine from "./mine"
import detail from "./detail"


Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/seefilm"
        },
        seefilm,
        buyticket,
        mine,
        detail
    ]
})