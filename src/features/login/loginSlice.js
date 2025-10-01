import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axiosInstance';
import { ENDPOINTS } from '@/api/endpoints';

/* ------------------------------------------------------------------ */
/* 1. async thunk – POST /auth/login                                   */
/* ------------------------------------------------------------------ */
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // credentials = { email, password }  (adapt to your form)
      const res = await axios.post(ENDPOINTS.LOGIN, credentials);

      // typical response shape: { token, user }
      const { token, user } = res.data;

      // Persist the JWT once (optional)
      localStorage.setItem('token', token);

      return { user, token };            // payload for fulfilled
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);

/* ------------------------------------------------------------------ */
/* 2. slice – handles login states / stores token & user               */
/* ------------------------------------------------------------------ */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:  null,
    token: localStorage.getItem('token') || null,
    status: 'idle',         
    error: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
        state.error  = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.user   = action.payload.user;
        state.token  = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error  = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
