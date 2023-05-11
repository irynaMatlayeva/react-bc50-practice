import { createSlice } from '@reduxjs/toolkit';
import {
  deleteCitiesOperation,
  getCitiesOperation,
  postCitiesOperation,
  updateCitiesOperation,
} from './citiesOperations';

const initialState = {
  items: [],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: {
    [getCitiesOperation.fulfilled]: (state, { payload }) => {
      state.items = payload.map(city => ({ ...city, rel: 'cities' }));
    },
    [postCitiesOperation.fulfilled]: (state, { payload }) => {
      state.items.push({ ...payload, rel: 'cities' });
    },
    [deleteCitiesOperation.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(city => city.id !== payload.id);
    },
    [updateCitiesOperation.fulfilled]: (state, { payload }) => {
      state.items = state.items.map(city =>
        city.id === payload.id ? { ...payload, rel: 'cities' } : city
      );
    },
  },
});

export const citiesReducer = citiesSlice.reducer;
