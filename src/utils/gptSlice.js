import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptResult:null,
        showGPT:true,
        gptList:null
    },
    reducers:{
       addResult:(action)=>{
        return action.payload
       },
       toggleGPTBar:(state)=>{
        state.showGPT=!state.showGPT
       },addList:(action)=>{
        return action.payload
       } 
    }
})

export default gptSlice.reducer;
export const {addResult,toggleGPTBar,addList}=gptSlice.actions