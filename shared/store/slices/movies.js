import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api";

const name = "movies";

const fetchMovies = createAsyncThunk(`${name}/fetchMovies`, getMovies);

const initialState = [];

const movies = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload, meta }) => {
      return payload.results;
    });
  },
});

export default {
  ...movies,
  actions: { ...movies.actions, fetchMovies },
};
