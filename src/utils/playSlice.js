import { createSlice } from "@reduxjs/toolkit";

const buttonSlice=createSlice({
    name:"play",
    initialState:{
        isPlaying:true,
        isMute:true,
    },
    reducers:{
        togglePlay:(state)=>{
            state.isPlaying=!state.isPlaying
        },
        toggleMute:(state)=>{
            state.isMute=!state.isMute
        }
    }
})

export default buttonSlice.reducer;
export const {togglePlay,toggleMute}=buttonSlice.actions;