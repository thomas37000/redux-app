import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", email: "", age: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;
