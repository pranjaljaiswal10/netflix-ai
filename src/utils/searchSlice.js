import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        showSearch:false,
        movieTitle:null,
        aiMovieResult:null, 
        titleMovieResult:null
    },
    reducers:{
       addAIMovie:(state,action)=>{
    state.aiMovieResult=action.payload
       },
       toggleSearchBar:(state)=>{
        state.showSearch=!state.showSearch
       },
       addMovieTitle:(state,action)=>{
        state.movieTitle=action.payload
       },
        addTitleMovie:(state,action)=>{
            state.titleMovieResult=action.payload
        },
        removeAIResult:(state,action)=>{
             state.aiMovieResult=null,
             state.movieTitle=null,
             state.titleMovieResult=null
        }
    }
})

export default searchSlice.reducer;
export const {addAIMovie,toggleSearchBar,addMovieTitle,addTitleMovie,removeAIResult}=searchSlice.actions