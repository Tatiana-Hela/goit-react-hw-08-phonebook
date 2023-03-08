import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup } from 'services/contacts';

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
