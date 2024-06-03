import { createSlice } from "@reduxjs/toolkit";

const buttonSlice=createSlice({
    name:"play",
    initialState:{
        isPlaying:false,
        isMute:false
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