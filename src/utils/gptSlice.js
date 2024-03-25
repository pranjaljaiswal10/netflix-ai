import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptResult:null,
        showGPT:true,
        gptList:null
    },
    reducers:{
       addResult:(state,action)=>{
    state.gptResult=action.payload
       },
       toggleGPTBar:(state)=>{
        state.showGPT=!state.showGPT
       },addList:(state,action)=>{
        state.gptList=action.payload
       } 
    }
})

export default gptSlice.reducer;
export const {addResult,toggleGPTBar,addList}=gptSlice.actions