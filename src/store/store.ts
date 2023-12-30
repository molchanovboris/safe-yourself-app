import { configureStore } from '@reduxjs/toolkit'
import { SPECIALISTS_SLICE_KEY, specialistSlice } from './specialistSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { CATEGORIES_SLICE_KEY, categorySlice } from './categoriesSlice';
import { SAFEYOURSELF_API_KEY, safeYourselfApi } from '../libs/store/services/safeYourselfApi';

export const store = configureStore({
  reducer: {
    [SPECIALISTS_SLICE_KEY]: specialistSlice.reducer,
    [CATEGORIES_SLICE_KEY]: categorySlice.reducer,
    [SAFEYOURSELF_API_KEY]: safeYourselfApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(safeYourselfApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch