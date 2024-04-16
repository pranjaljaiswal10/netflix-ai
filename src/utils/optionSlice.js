import { createSlice } from "@reduxjs/toolkit";

const optionSlice=createSlice({
    name:"option",
    initialState:{
     searchType:"AI"
    },
    reducers:{
        changeOption:(state,action)=>{
            state.searchType=action.payload
        }
    }
})

export default optionSlice.reducer;
export const {changeOption}=optionSlice.actions