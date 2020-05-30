import { createSlice } from "@reduxjs/toolkit";

const name = "favorites";

const initialState = [];

const favorites = createSlice({
  name,
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      if (state.find((item) => item.id === payload.id) === undefined)
        return [...state, payload];
      else {
        const newState = state.filter((val) => val.id !== payload.id);
        return newState;
      }
    },
    removeFromFavorites(state, payload) {},
  },
});

export default favorites;
