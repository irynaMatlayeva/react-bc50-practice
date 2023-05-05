import axios from 'axios';

const BASE_URL = 'https://6454e398f803f34576340577.mockapi.io';

// axios.defaults.baseURL = BASE_URL; 1 variant
// const envApi = process.env.REACT_APP_URL; 2 variant

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const postData = async (url, data) => {
  try {
    return await instance.post(`/${url}`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = url => {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (url, data) => {
  try {
    return await instance.put(`/${url}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async url => {
  try {
    return await instance.delete(`/${url}`);
  } catch (error) {
    console.log(error);
  }
};
