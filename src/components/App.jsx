import { Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { SideBar, Main } from '../components';
import { useEffect } from 'react';
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


  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };

  const handleModalOpen = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
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
                    showForm={showForm}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route
                path=":departmentId"
                element={<DepartmentDetails/>}
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
