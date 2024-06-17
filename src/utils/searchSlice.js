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
        }
    }
})

export default searchSlice.reducer;
export const {addAIMovie,toggleSearchBar,addMovieTitle,addTitleMovie}=searchSlice.actions