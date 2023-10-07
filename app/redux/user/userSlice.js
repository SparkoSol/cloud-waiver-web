'use client';
import {createSlice} from '@reduxjs/toolkit';
import {loginUser} from "@/app/redux/user/userThunk";

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
  extraReducers: {

  }
})

export const {} = userSlice.actions;

export default userSlice.reducer;