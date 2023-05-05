import { getDepartments } from '../api/departments';
import { useEffect, useState } from 'react';

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartments().then(({ data: departments }) => {
      localStorage.setItem(
        'departments',
        JSON.stringify(
          departments.map(({ name, id }) => ({
            text: name,
            rel: 'departments',
            id,
          }))
        )
      );
      const getDepartmentsFromLocalstorage = JSON.parse(
        localStorage.getItem('departments')
      );
      getDepartmentsFromLocalstorage
        ? setDepartments(getDepartmentsFromLocalstorage)
        : setDepartments([]);
    });
  }, []);
  return [departments, setDepartments];
};
export default useDepartments;
