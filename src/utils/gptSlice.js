import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        result:null
    },
    reducers:{
       addSlice:(state,action)=>{
        return action.payload
       } 
    }
})

export default gptSlice.reducer;
export const {addSlice}=gptSlice.actions