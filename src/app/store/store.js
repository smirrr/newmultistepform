'use client'
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,  // Adding the user slice reducer to the store
  },
});