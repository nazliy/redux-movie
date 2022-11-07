import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movie: [],
    loading : false,
    favoriteData :[]
}

export const fetchDataMovie = createAsyncThunk('movie/fetchDataMovie', async (page) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        return [...res.data.results]

    }catch(err){
        console.log(err)
    }
})


export const movie = createSlice({
    name: 'movie',
    initialState,
    reducers : {
        favoriteAdd : (state,action) =>{           
            state.favoriteData.push(action.payload)           
        },
        removeFavorite : (state, action) => {
            state.favoriteData = state.favoriteData.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchDataMovie.pending, (state,action) => {
            console.log('pending')
            state.loading = true
        })
        .addCase(fetchDataMovie.fulfilled, (state,action) => {
            state.movie = action.payload
            state.loading = false
            console.log(state.movie)
        })
        .addCase(fetchDataMovie.rejected, (state) => {
            state.loading = false
        })
    }
})

export const {favoriteAdd,removeFavorite} = movie.actions

export default movie.reducer