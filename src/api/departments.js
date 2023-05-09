// import axios from 'axios';
import { postData, getData, updateData, deleteData } from './defaultApi';

const DEPARTMENTS_URL = 'departments';

export const postDepartment = data => {
  return postData(DEPARTMENTS_URL, data);
};

export const getDepartments = () => {
  return getData(DEPARTMENTS_URL);
};

export const updateDepartment = (id, data) => {
  return updateData(`${DEPARTMENTS_URL}/${id}`, data);
};

export const deleteDepartment = id => {
  return deleteData(`${DEPARTMENTS_URL}/${id}`);
};
