"use client"

import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchAPI} from "@/app/lib/FetchAPI";

export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/sign-in', payload, 'POST')
    localStorage.setItem('refresh-token', data.refresh_token)
    localStorage.setItem('access-token', data.access_token)
    return data.domain
  } catch (e) {
    console.error(e)
    throw e
  }
})