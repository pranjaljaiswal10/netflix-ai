import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice"
import configReducer from "./configureSlice"
import optionReducer from "./optionSlice"

const appStore=configureStore({
    reducer: {
        user:userReducer,
        movies:moviesReducer,
        search:searchReducer,
        config:configReducer,
        option:optionReducer
    }
})

export default appStore