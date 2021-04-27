import { configureStore } from '@reduxjs/toolkit';
import { numbersSlice } from './numbersSlice';

export const store = configureStore({
  reducer: {
    numbers: numbersSlice.reducer
  },
});
