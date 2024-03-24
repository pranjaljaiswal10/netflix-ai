import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
        popular:null,
        nowPlaying:null,
        topRated:null,
        upcoming:null,
        trailer:null
        },
        reducers:{
         addPopular:(state,action)=>{
            state.popular=action.payload;
         },
         addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
         },
         addTopRated:(state,action)=>{
        state.topRated=action.payload;
        },
         addUpcoming:(state,action)=>{
        state.upcoming=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
 }
    }
}
)

export default moviesSlice.reducer;

export const {addPopular,addNowPlaying,addTopRated,addUpcoming,addTrailer}=moviesSlice.actions;