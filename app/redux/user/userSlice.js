'use client';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  status:'idle',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.status = 'succeeded'
      state.currentUser = "Reduced User"
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.status = 'pending';
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.status = 'fulfilled';
  //       state.currentUser = action.payload;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.status = 'rejected';
  //     });
  // }
})

export const {} = userSlice.actions;

export default userSlice.reducer;