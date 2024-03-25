import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})

export default configureSlice.reducer;
export const {changeLanguage}=configureSlice.actions;