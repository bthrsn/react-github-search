import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepo } from "../../models/models";

const LS_FAV_KEY = "rfk";

interface GithubState {
  favourites: IRepo[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<IRepo>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<IRepo>) {
      console.log('action.payload.id: ', action.payload.id);
      state.favourites = state.favourites.filter(
        (f) => f.id !== action.payload.id
      );
      // state.favourites.splice(state.favourites.indexOf(action.payload), 1);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
