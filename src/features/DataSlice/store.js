import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from '../DataSlice/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
  },
});
