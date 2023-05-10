import { createTutor, deleteTutor, fetchTutors } from 'api/tutorsApi';
import * as types from './actionsTypes';

export const fetchTutorsAction = () => dispatch => {
  fetchTutors().then(res =>
    dispatch({ type: types.LOAD_TUTORS, payload: res.data })
  );
};

export const addTutorActions = tutor => dispatch => {
  createTutor(tutor).then(res =>
    dispatch({ type: types.CREATE_TUTORS, payload: res.data })
  );
};

export const deleteTutorActions = id => dispatch => {
  deleteTutor(id).then(res => 
      dispatch({
          type: types.DELETE_TUTORS, payload: res.data.id
      })
  );
};
