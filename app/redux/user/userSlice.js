'use client';
import {createSlice} from '@reduxjs/toolkit';
import {getUser} from "@/app/redux/user/userThunk";

const initialState = {
  currentUser: null,
  status: 'idle',
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser(state, action) {
      state.currentUser = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload
      });
  }
})

export const {resetUser} = userSlice.actions;

export default userSlice.reducer;