import { useEffect, useState } from 'react';
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
import { postCity, getCity, updateCity, deleteCity } from 'api/citiesApi';
import useCities from 'hooks/useCities';

const App = () => {
  const [tutors, setTutors] = useState(universityData.tutors ?? []);
  const [cities, setCities] = useCities();
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
    postCity({
      text: name
    }).then(({data}) => {
      if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
      alert(`This City exist`);
    } else {
      setCities([...cities, { ...data, rel: 'cities' }]);
      setShowForm(null);
    }
    })
    
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
      deleteCity(id).then(({data}) => {
        setCities(cities.filter(el => el.id !== data.id));
      })
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
      updateCity(id, { id, text: name }).then(({data})=> {
        const indexElCity = cities.findIndex(item => item.id === data.id);
      setCities([
        ...cities.slice(0, indexElCity),
        { text: data.text, rel, id: data.id },
        ...cities.slice(indexElCity + 1),
      ]);
      })
      
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
