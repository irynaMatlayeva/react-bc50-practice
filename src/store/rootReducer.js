import { combineReducers } from 'redux';
import tutorsReducer from './tutors/reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { citiesReducer } from './cities/citiesSlice';

const citiesConfigs = {
  key: 'cities',
  storage,
};

export default combineReducers({
  tutors: tutorsReducer,
  cities: persistReducer(citiesConfigs, citiesReducer),
  departments: null,
});
