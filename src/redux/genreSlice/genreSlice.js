import { createSlice } from "@reduxjs/toolkit";
import { Genre } from "../../data/GenreType";

const initialState = {
    genres: Genre,
    selectedGenre: null
}

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers:{
        getGenres: state=> state.categories,

        selectGenre: (state, action)=>{
            return {
                ...state,
                selectedGenre: action.payload !== state.selectedGenre? action.payload : null
            }
        },
        filterGenre: (state, action) =>{
            const gen = action.payload
            const filtered = state.genres.filter(genre=> genre.category === gen)
            state.genres = filtered;
        },
        removeFilter: state=> {return initialState}
    }
})

export const {getGenres, selectGenre, filterGenre, removeFilter} = genreSlice.actions
export default genreSlice.reducer