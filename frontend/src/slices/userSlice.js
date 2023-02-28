import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// funções

export const profile = createAsyncThunk(
  "User/profile",
  async (user, thunkAPi) => {
    const token = thunkAPi.getState().auth.user.token;

    const data = await userService.profile(user, token);

    return data;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      });
  },
});

export const { resetMessage, extraReducers } = userSlice.actions;
export default userSlice.reducer;
