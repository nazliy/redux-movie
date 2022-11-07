import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movieDetail : []
}

export const fetchDataMovieDetail = createAsyncThunk('movieDetail/fetchDataMovieDetail', async (id) => {
    try{
        const res = await axios.get(`
        ${process.env.REACT_APP_API}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        return [res.data]

    }catch(err){
        console.log(err)
    }
})

export const movieDetail = createSlice({
    name : 'movieDetail',
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder
        .addCase(fetchDataMovieDetail.pending, (state,action) => {
            console.log('pending')
        })
        .addCase(fetchDataMovieDetail.fulfilled, (state,action) => {
            state.movieDetail = action.payload
            console.log( state.movieDetail)
        })
        .addCase(fetchDataMovieDetail.rejected, (state) => {
            console.log('hata')
        })
    }
})

export default movieDetail.reducer