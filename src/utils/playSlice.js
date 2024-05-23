import { createSlice } from "@reduxjs/toolkit";

const playSlice=createSlice({
    name:"play",
    initialState:{
        isPlaying:false
    },
    reducers:{
        togglePlay:(state)=>{
            state.isPlaying=!state.isPlaying
        }
    }
})

export default playSlice.reducer;
export const {togglePlay}=playSlice.actions;