import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        movieResult:[],
        showSearch:false,
        movieList:[],
        titleResult:[]
    },
    reducers:{
       addResult:(state,action)=>{
    state.movieResult.push(action.payload)
       },
       toggleSearchBar:(state)=>{
        state.showSearch=!state.showSearch
       },addList:(state,action)=>{
        state.movieList=action.payload
       },
        addMovie:(state,action)=>{
            state.titleResult=action.payload
        }
    }
})

export default searchSlice.reducer;
export const {addResult,toggleSearchBar,addList,addMovie}=searchSlice.actions