"use client"

import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchAPI} from "@/app/lib/FetchAPI";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/sign-in', payload, 'POST')
    localStorage.setItem('refresh-token', data.refresh_token)
    localStorage.setItem('access-token', data.access_token)
    return data.domain
  } catch (e) {
    toast.error(e.message)
    throw e.message
  }
})

export const registerUser = createAsyncThunk('user/register', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/sign-up', payload, 'POST')
    return data
  } catch (e) {
    console.error(e)
    throw e
  }
})