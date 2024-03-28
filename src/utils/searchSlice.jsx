import { createSlice } from "@reduxjs/toolkit";

 
 const searchSlice=createSlice({
    name:"search",
    initialState:{
     option:null
    },reducers:{
        addSearch:(state,action)=>{
      state.option=action.payload
        }
    }
}) 
export default searchSlice.reducer;
export const {addSearch}=searchSlice.actions