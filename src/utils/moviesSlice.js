import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
         allMovies:null
        },
        reducers:{
         addMovie:(state,action)=>{
            state.allMovies=action.payload;
         }
        },
    }
)

export default moviesSlice.reducer;

export const {addMovie,addTrailer}=moviesSlice.actions;