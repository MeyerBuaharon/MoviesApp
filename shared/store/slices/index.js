import movies from "./movies";
import favorites from "./favorites";

export const actions = {
  ...movies.actions,
  ...favorites.actions,
};

export const reducers = {
  movies: movies.reducer,
  favorites: favorites.reducer,
};
