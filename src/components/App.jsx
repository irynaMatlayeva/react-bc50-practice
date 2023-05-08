import { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { SideBar, Main } from '../components';
import { postCity, updateCity, deleteCity } from 'api/citiesApi';
import useCities from 'hooks/useCities';
import {
  postDepartment,
  updateDepartment,
  deleteDepartment,
} from '../api/departments';
import useDepartments from '../hooks/useDepartments';
import University from 'pages/university/University';
import universityData from '../constants/universityData.json';
import Departments from '../pages/departments/Department';
import { useEffect } from 'react';
import DepartmentDetails from 'pages/departments/DepartmentDetails';
import DepartmentDescription from 'pages/departments/DepartmentDescription';
import DepartmentHistory from 'pages/departments/DepartmentHistory';

const App = () => {
  const [tutors, setTutors] = useState(universityData.tutors ?? []);
  const [cities, setCities] = useCities();
  const [departments, setDepartments] = useDepartments();
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('university');
  }, [navigate, pathname]);
  const onEdit = () => console.log('Edit');

  const onDelete = () => console.log('Delete');

  const handleDropdown = () => console.log('dropdown');

  const addTutor = tutor => {
    setTutors([...tutors, tutor]);
    setShowForm(null);
  };

  const deleteTutor = name => {
    setTutors(tutors.filter(tutor => tutor.firstName !== name));
  };

  const addCity = name => {
    postCity({
      text: name,
    }).then(({ data }) => {
      if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
        alert(`This City exist`);
      } else {
        setCities([...cities, { ...data, rel: 'cities' }]);
        setShowForm(null);
      }
    });
  };

  const addDepartment = name => {
    postDepartment({ name }).then(({ data: { name, id } }) => {
      if (
        departments.some(
          department => department.text.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`This Department exist`);
      } else {
        setDepartments([
          ...departments,
          { text: name, id, rel: 'departments' },
        ]);
        setShowForm(null);
      }
    });
  };

  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };

  const handleDeleteCard = (id, rel) => {
    if (rel === 'cities') {
      deleteCity(id).then(({ data }) => {
        setCities(cities.filter(el => el.id !== data.id));
      });
    } else {
      deleteDepartment(id).then(({ data }) => {
        setDepartments(departments.filter(el => el.id !== data.id));
      });
    }
  };

  const handleModalOpen = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  const handleEditCard = data => {
    const { id, name, rel } = data;
    if (rel === 'cities') {
      updateCity(id, { id, text: name }).then(({ data }) => {
        const indexElCity = cities.findIndex(item => item.id === data.id);
        setCities([
          ...cities.slice(0, indexElCity),
          { text: data.text, rel, id: data.id },
          ...cities.slice(indexElCity + 1),
        ]);
      });
    } else {
      updateDepartment(id, { id, name }).then(({ data }) => {
        const indexElDepartment = departments.findIndex(
          item => item.id === data.id
        );
        setDepartments([
          ...departments.slice(0, indexElDepartment),
          { text: data.name, rel, id: data.id },
          ...departments.slice(indexElDepartment + 1),
        ]);
      });
    }
  };
  return (
    <div className="app">
      <SideBar />
      <Main>
        <Routes>
          <Route
            path={'/university'}
            element={
              <University
                onDelete={onDelete}
                onEdit={onEdit}
                tutors={tutors}
                deleteTutor={deleteTutor}
                showForm={showForm}
                addTutor={addTutor}
                handleShowForm={handleShowForm}
                toggleModal={handleModalOpen}
                modalState={isModalOpen}
                listData={cities}
                handleDeleteCard={handleDeleteCard}
                onEditCard={handleEditCard}
                addCity={addCity}
              />
            }
          ></Route>
          <Route path={'/departments'}>
            <Route
              index
              element={
                <Departments
                  toggleModal={handleModalOpen}
                  modalState={isModalOpen}
                  listData={departments}
                  handleDeleteCard={handleDeleteCard}
                  onEditCard={handleEditCard}
                  showForm={showForm}
                  onSubmit={addDepartment}
                  handleShowForm={handleShowForm}
                />
              }
            />
            <Route
              path=":departmentId"
              element={<DepartmentDetails departments={departments} />}
            >
              <Route path={'description'} element={<DepartmentDescription />} />
              <Route path={'history'} element={<DepartmentHistory />} />
            </Route>
          </Route>
        </Routes>
      </Main>
    </div>
  );
};

export default App;
