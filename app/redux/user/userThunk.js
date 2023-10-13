"use client"

import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRequest, postRequest} from "@/app/lib/CWAPI";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk('/user/loginUser', async (payload, thunkAPI) => {
  try {
    const {data} = await postRequest('/auth/sign-in', payload)
    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token)
      localStorage.removeItem('reset_token');
    }
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
    // return thunkAPI.rejectWithValue(e);
  }
})

export const registerUser = createAsyncThunk('/user/register', async (payload, thunkAPI) => {
  try {
    return await postRequest('/auth/sign-up', payload)
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
})

export const verifyUser = createAsyncThunk('user/verifyUser', async (payload, thunkAPI) => {
  try {
    const {data} = await postRequest('/persons/verify-account', payload);
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
})

export const forgetPassword = createAsyncThunk('user/forgetPassword', async (payload, thunkAPI) => {
  try {
    const {data} = await postRequest('/persons/forgot-password', payload);
    localStorage.setItem('reset_token','true')
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
})

export const resetPassword = createAsyncThunk('user/reset-password', async (payload, thunkAPI) => {
  try {
    const {data} = await postRequest('/persons/reset-password', payload);
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
})

export const getUser = createAsyncThunk('user/getUser', async (payload, thunkAPI) => {
  try {
    const {data} = await getRequest('/auth/profile', payload);
    localStorage.setItem('cw-user', JSON.stringify(data));
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e);
  }
})

export const resendEmail = createAsyncThunk('user/resendEmail', async (payload, thunkAPI) => {
  try {
    const {data} = await postRequest('/persons/resend-verification-email', payload);
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
})