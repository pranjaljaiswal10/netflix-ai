import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice"
import configReducer from "./configureSlice"
import optionReducer from "./optionSlice"
import playReducer from "./playSlice"


const appStore=configureStore({
    reducer: {
        user:userReducer,
        movies:moviesReducer,
        search:searchReducer,
        config:configReducer,
        option:optionReducer,
        play:playReducer
    }
})

export default appStore