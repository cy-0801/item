export default {
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        tabBer:true,
        auth:true
   }
}