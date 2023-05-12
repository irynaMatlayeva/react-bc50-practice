import { combineReducers } from 'redux';
import tutorsReducer from './tutors/reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { citiesReducer } from './cities/citiesSlice';
import { departmentsReducer } from './departments/departmentsSlice';

const citiesConfigs = {
  key: 'cities',
  storage,
};
const departmentsConfig ={
  key: 'departments',
  storage,
  // whitelist: ['id'],
  // blacklist: ['password'],
}

export default combineReducers({
  tutors: tutorsReducer,
  cities: persistReducer(citiesConfigs, citiesReducer),
  departments: persistReducer(departmentsConfig, departmentsReducer),
});
