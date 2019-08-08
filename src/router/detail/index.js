export default {
    path:"/detail/:id/:name",
    component:()=>import("views/detail"),
    name:"Detail",
    meta:{
        tabBer:false,
        auth:true
    },
    props:true
}