import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            allMovies:null,
            trailer:null
        },
        reducers:{
         addMovie:(state,action)=>{
           state.allMovies=action.payload;
         },
         addTrailer:(state,action)=>{
            state.trailer=action.payload
         }
        }
    }
)

export default moviesSlice.reducer;

export const {addMovie,addTrailer}=moviesSlice.actions;