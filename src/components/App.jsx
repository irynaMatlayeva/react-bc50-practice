import { useState } from 'react';
import {
  SideBar,
  Main,
  Paper,
  Card,
  Section,
  TutorsList,
  PartialList,
  Button,
  TutorForm,
  PartialForm,
  Modal,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorsIcon from '../assets/images/teachers-emoji.png';
import FORMS from 'constants/forms';

const App = () => {
  const [tutors, setTutors] = useState(universityData.tutors ?? []);
  const [cities, setCities] = useState(
    universityData.cities.map(city => ({ text: city, rel: 'cities' })) ?? []
  );
  const [departments, setDepartments] = useState(
    universityData.department.map(({ name }) => ({
      text: name,
      rel: 'departments',
    })) ?? []
  );
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

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
    if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
      alert(`This City exist`);
    } else {
      setCities([...cities, { text: name, rel: 'cities' }]);
      setShowForm(null);
    }
  };

  const addDepartment = name => {
    if (
      departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`This Department exist`);
    } else {
      setDepartments([...departments, { text: name, rel: 'departments' }]);
      setShowForm(null);
    }
  };

  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };

  const handleDeleteCard = (id, rel) => {
    if (rel === 'cities') {
      setCities(cities.filter(el => el.text !== id));
    } else {
      setDepartments(departments.filter(el => el.text !== id));
    }
  };

  const handleModalOpen = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  const handleEditCard = data => {
    const { id, name, rel } = data;
    if (rel === 'cities') {
      const indexElCity = cities.findIndex(item => item.text === id);
      setCities([
        ...cities.slice(0, indexElCity),
        { text: name, rel },
        ...cities.slice(indexElCity + 1),
      ]);
    } else {
      const indexElDepartment = departments.findIndex(item => item.text === id);
      setDepartments([
        ...departments.slice(0, indexElDepartment),
        { text: name, rel },
        ...departments.slice(indexElDepartment + 1),
      ]);
    }
  };
  return (
    <div className="app">
      <SideBar />
      <Main>
        <Section isRow isRightPosition title="Information about university">
          <Card
            onDelete={onDelete}
            onEdit={onEdit}
            name={universityData.name}
          />
          <Paper>{universityData.description}</Paper>
        </Section>
        <Section title="Tutors" image={tutorsIcon}>
          <TutorsList tutors={tutors} deleteTutor={deleteTutor} />
          {showForm === FORMS.TUTOR_FORM && <TutorForm addTutor={addTutor} />}
          <Button
            isIcon
            text={'Add tutor'}
            action={() => handleShowForm(FORMS.TUTOR_FORM)}
          />
        </Section>
        <Section title="Cities">
          <PartialList
            toggleModal={handleModalOpen}
            modalState={isModalOpen}
            listData={cities}
            handleDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
          />
          {showForm === FORMS.CITY_FORM && (
            <PartialForm title="adding city" onSubmit={addCity} />
          )}
          <Button
            isIcon
            text={'Add city'}
            action={() => handleShowForm(FORMS.CITY_FORM)}
          />
        </Section>
        <Section title="Departments">
          <PartialList
            toggleModal={handleModalOpen}
            modalState={isModalOpen}
            listData={departments}
            handleDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
          />
          {showForm === FORMS.DEPARTMENT_FORM && (
            <PartialForm title="adding department" onSubmit={addDepartment} />
          )}
          <Button
            isIcon
            text={'Add department'}
            action={() => handleShowForm(FORMS.DEPARTMENT_FORM)}
          />
        </Section>
      </Main>
    </div>
  );
};

export default App;
