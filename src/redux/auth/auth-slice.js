import { createSlice } from '@reduxjs/toolkit';
import {
  authorization,
  currentUser,
  logoutUser,
  registration,
} from './auth-operation';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(authorization.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authorization.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(authorization.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(currentUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logoutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.user) {
          state.user = {};
          state.isLogin = false;
        }
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
