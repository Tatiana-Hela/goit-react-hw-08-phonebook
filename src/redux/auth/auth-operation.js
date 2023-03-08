import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrent, login, logout, signup } from 'services/auth';

export const registration = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const authorization = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
