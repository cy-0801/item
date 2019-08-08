import http from "utils/http.js"
//正在热映
export const movie_now_api = (cityCode=4751)=>http("get","/mgw/bsdata4mv/v2/movieListShow/4708",{cityCode:cityCode})
//即将上映
export const movie_coming_api = (pageNo=0,pageSize=20)=>http("get","/mgw/bsdata4mv/v2/movieListPreview",{pageNo:pageNo,pageSize:pageSize})
//影院
export const movie_cinema_api = ()=>http("post","/mta-service/data/migu/validCinemaes.jsp")
//推荐
export const recommend_api =() => http("get","/ajax/mostExpected?ci=1&limit=10&offset=0&token=")
//详情页
export const detail_api = (cid)=>http("get","/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=cid")