import { createAsyncThunk } from '@reduxjs/toolkit';
import { postCity, getCity, updateCity, deleteCity } from 'api/citiesApi';

export const getCitiesOperation = createAsyncThunk(
  'cities/getCities',
  async (_, thunkAPI) => {
    try {
      const { data } = await getCity();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const postCitiesOperation = createAsyncThunk(
  'cities/postCities',
  async (cityName, thunkAPI) => {
    try {
      const { data } = await postCity({ text: cityName });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteCitiesOperation = createAsyncThunk(
  'cities/deleteCities',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteCity(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const updateCitiesOperation = createAsyncThunk(
  'cities/updateCities',
  async (data, thunkAPI) => {
    const { id, name } = data;
    try {
      const { data } = await updateCity(id, { text: name, id });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
