"use client"

import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchAPI} from "@/app/lib/FetchAPI";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/sign-in', payload, 'POST')
    return data
  } catch (e) {
    toast.error(e.message)
    throw e.message
  }
})

export const registerUser = createAsyncThunk('user/register', async (payload, thunkAPI) => {
  try {
    return await FetchAPI('auth/sign-up', payload, 'POST')
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})

export const verifyUser = createAsyncThunk('user/verifyUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('person/verify-account', payload, 'POST');
    return data
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})