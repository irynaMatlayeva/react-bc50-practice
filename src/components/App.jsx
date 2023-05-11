import { Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { SideBar, Main } from '../components';
import {
  postDepartment,
  updateDepartment,
  deleteDepartment,
} from '../api/departments';
import { useEffect } from 'react';
import useDepartments from '../hooks/useDepartments';
import { fetchTutorsAction } from 'store/tutors/actions';
import { useDispatch } from 'react-redux';

const University = lazy(() => import('pages/university/University'));
const Departments = lazy(() => import('pages/departments/Department'));
const DepartmentDetails = lazy(() =>
  import('pages/departments/DepartmentDetails')
);
const DepartmentDescription = lazy(() =>
  import('pages/departments/DepartmentDescription')
);
const DepartmentHistory = lazy(() =>
  import('pages/departments/DepartmentHistory')
);

const App = () => {
  const [departments, setDepartments] = useDepartments();
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/') navigate('university');
  }, [navigate, pathname]);

  useEffect(() => {
    dispatch(fetchTutorsAction());
  }, [dispatch]);

  const onEdit = () => console.log('Edit');

  const onDelete = () => console.log('Delete');

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
    if (rel !== 'cities') {
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
    if (rel !== 'cities') {
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
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route
              path={'/university'}
              element={
                <University
                  onDelete={onDelete}
                  onEdit={onEdit}
                  showForm={showForm}
                  handleShowForm={handleShowForm}
                  toggleModal={handleModalOpen}
                  modalState={isModalOpen}
                  handleDeleteCard={handleDeleteCard}
                  onEditCard={handleEditCard}
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
                <Route
                  path={'description'}
                  element={<DepartmentDescription />}
                />
                <Route path={'history'} element={<DepartmentHistory />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
};

export default App;
