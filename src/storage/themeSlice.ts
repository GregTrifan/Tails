import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggle } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.dark;

export default themeSlice.reducer;
