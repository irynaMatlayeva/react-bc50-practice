import * as types from './actionsTypes';

const initialState = [];
const tutorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_TUTORS:
      return action.payload;
    case types.CREATE_TUTORS:
      return [...state, action.payload];
    case types.DELETE_TUTORS:
      return state.filter(tutor => tutor.id !== action.payload);
    default:
      return state;
  }
};

export default tutorsReducer;
