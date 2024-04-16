import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        movieResult:[],
        showSearch:false,
        movieList:[]
    },
    reducers:{
       addResult:(state,action)=>{
    state.movieResult=action.payload
       },
       toggleSearchBar:(state)=>{
        state.showSearch=!state.showSearch
       },addList:(state,action)=>{
        state.movieList=action.payload
       } 
    }
})

export default searchSlice.reducer;
export const {addResult,toggleSearchBar,addList}=searchSlice.actions