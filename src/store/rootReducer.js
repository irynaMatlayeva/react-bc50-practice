import { combineReducers } from 'redux';
import tutorsReducer from './tutors/reducer';

export default combineReducers({
    tutors: tutorsReducer,
    cities: null,
    departments: null
});
