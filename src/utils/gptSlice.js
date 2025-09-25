import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    isGptLoading: false,
    gptMovieList: null,
    movieData: null,
    gptMovieDesc: null,
    mainMovieData: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    toggleGptLoading: (state) => {
      state.isGptLoading = !state.isGptLoading;
    },
    addGptMovieList: (state, action) => {
      state.gptMovieList = action.payload;
    },
    addMovieData: (state, action) => {
      state.movieData = action.payload;
    },
    addGptMovieDesc: (state, action) => {
      state.gptMovieDesc = action.payload;
    },
    addMainMovieData: (state, action) => {
      state.mainMovieData = action.payload;
    },
  },
});

export const {
  toggleGptSearch,
  toggleGptLoading,
  addGptMovieList,
  addMovieData,
  addGptMovieDesc,
  addMainMovieData,
} = gptSlice.actions;

export default gptSlice.reducer;
