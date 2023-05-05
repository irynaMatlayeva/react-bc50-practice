import { postData, getData, updateData, deleteData } from './defaultApi';

const CITIES_URL = 'cities';

export const postCity = data => {
  return postData(CITIES_URL, data);
};

export const getCity = () => {
  return getData(CITIES_URL);
};

export const updateCity = (id, data) => {
  return updateData(`${CITIES_URL}/${id}`, data);
};

export const deleteCity = id => {
  return deleteData(`${CITIES_URL}/${id}`);
};
