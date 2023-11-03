import { combineReducers } from "@reduxjs/toolkit";
import authLogin from "./auth/authLogin";
import authMovie from "./movie/authMovie";
import authDetail from "./movie/authDetail";
import authSearch from "./movie/authSearch";

//combine reducer adalah tempat mensetup
//apa saja reducer yang kita gunakan di aplikasi
export default combineReducers({ 
    auth: authLogin,
    movie: authMovie,
    movieDetail : authDetail,
    movieSearch : authSearch,
 })