"use client"

import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchAPI} from "@/app/lib/FetchAPI";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/sign-in', payload, 'POST')
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token)
    return data
  } catch (e) {
    toast.error(e.message)
    return thunkAPI.rejectWithValue(e);
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
    const data = await FetchAPI('persons/verify-account', payload, 'POST');
    return data
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})

export const forgetPassword = createAsyncThunk('user/forgetPassword', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('persons/forgot-password', payload, 'POST');
    return data
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})

export const resetPassword = createAsyncThunk('user/reset-password', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('persons/reset-password', payload, 'POST');
    return data
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})

export const getUser = createAsyncThunk('user/getUser', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('auth/profile', payload, 'GET');
    localStorage.setItem('cw-user', JSON.stringify(data));
    return data
  } catch (e) {
    toast.error(e.message)
    return thunkAPI.rejectWithValue(e);
  }
})

export const resendEmail = createAsyncThunk('user/resendEmail', async (payload, thunkAPI) => {
  try {
    const data = await FetchAPI('persons/resend-verification-email', payload, 'POST');
    return data
  } catch (e) {
    toast.error(e.message)
    throw e
  }
})