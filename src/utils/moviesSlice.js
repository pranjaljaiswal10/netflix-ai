import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movie",
        initialState:{
        popularMovies:null,
        nowPlaying:null,
        trendingMovies:null
        },
        reducers:{
         addPopularMovie:(state,action)=>{
            state.popularMovies=action.payload;
         },
         addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
         },
         addTrendingMovies:(state,action)=>{
        state.trendingMovies=action.payload;
        }
    }
}
)

export default moviesSlice.reducer;

export const {addPopularMovie,addNowPlaying,addTrendingMovies}=moviesSlice.actions;