import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        movieResult:[],
        showGPT:true,
        movieList:[]
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