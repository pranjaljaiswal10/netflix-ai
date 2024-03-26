import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        movieResult:null,
        showGPT:true,
        movieList:null
    },
    reducers:{
       addResult:(state,action)=>{
    state.movieResult=action.payload
       },
       toggleGPTBar:(state)=>{
        state.showGPT=!state.showGPT
       },addList:(state,action)=>{
        state.movieList=action.payload
       } 
    }
})

export default gptSlice.reducer;
export const {addResult,toggleGPTBar,addList}=gptSlice.actions