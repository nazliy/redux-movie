import { configureStore } from "@reduxjs/toolkit";
import movie from '../actions/MovieSlice'
import detail from '../actions/MovieDetailSlice'

export const store = configureStore({
    reducer :{
        movie,
        detail
    }
})