import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGPTSearch: false,
        suggestedMovies: null,
        movieList: null,
        isError: false,
        isLoading: false
    },
    reducers: {
        toggleGPTSearch: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        setError: (state,action)=>{
            state.isError = action.payload;
        },
        setSuggestedMovies: (state,action)=>{
            state.suggestedMovies = action.payload.suggestedMovies;
            state.movieList = action.payload.movieList;
        },
        setLoading: (state,action)=>{
            state.isLoading = action.payload;
        }
    }
})

export const { toggleGPTSearch,setError,setSuggestedMovies,setLoading } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;