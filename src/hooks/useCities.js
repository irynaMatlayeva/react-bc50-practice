import { useState, useEffect } from 'react';
import { getCity } from 'api/citiesApi';

const useCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getCity().then(({ data: cities }) => {
      localStorage.setItem(
        'cities',
        JSON.stringify(
          cities.map(({ text, id }) => ({
            text,
            rel: 'cities',
            id,
          }))
        )
      );
      const getCitiesFromLocalstorage = JSON.parse(
        localStorage.getItem('cities')
      );
      getCitiesFromLocalstorage
        ? setCities(getCitiesFromLocalstorage)
        : setCities([]);
    });
  }, []);
  return [cities, setCities];
};
export default useCities;
