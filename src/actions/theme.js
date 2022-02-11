import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    update: (state) => {
        state.value = initialStateValue;
      },
  },
});

export const { changeColor, update } = themeSlice.actions;

export default themeSlice.reducer;
