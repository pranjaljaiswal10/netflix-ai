import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
        popularMovies:null,
        nowPlaying:null,
        topRated:null,
        upcoming:null,
        trailer:null
        },
        reducers:{
         addPopularMovie:(state,action)=>{
            state.popularMovies=action.payload;
         },
         addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
         },
         addTopRated:(state,action)=>{
        state.topRatedMovies=action.payload;
        },
         addUpcoming:(state,action)=>{
        state.upcoming=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailer=action.payload;
        }
    }
}
)

export default moviesSlice.reducer;

export const {addPopularMovie,addNowPlaying,addTopRated,addUpcoming,addTrailerVideo}=moviesSlice.actions;