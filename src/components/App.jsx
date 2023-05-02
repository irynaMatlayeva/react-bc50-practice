import { Component } from 'react';
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
} from '../components';
import universityData from '../constants/universityData.json';
import tutorsIcon from '../assets/images/teachers-emoji.png';
import FORMS from 'constants/forms';

class App extends Component {
  state = {
    tutors: universityData.tutors ?? [],
    cities: universityData.cities.map(city => ({ text: city, rel: 'cities' })) ?? [],
    departments:
      universityData.department.map(({ name }) => ({ text: name, rel: 'departments' })) ?? [],
    showForm: null,
  };

  onEdit = () => console.log('Edit');

  onDelete = () => console.log('Delete');

  handleDropdown = () => console.log('dropdown');

  addTutor = tutor => {
    this.setState(({ tutors }) => ({
      tutors: [...tutors, tutor],
      showForm: null,
    }));
  };

  deleteTutor = name => {
    this.setState(({ tutors }) => ({
      tutors: tutors.filter(tutor => tutor.firstName !== name),
    }));
  };

  addCity = name => {
    if (
      this.state.cities.some(
        city => city.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`This City exist`);
    } else {
      this.setState(prevState => ({
        cities: [...prevState.cities, { text: name }],
        showForm: null,
      }));
    }
  };

  addDepartment = name => {
    if (
      this.state.departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`This Department exist`);
    } else {
      this.setState(prevState => ({
        departments: [...prevState.departments, { text: name }],
        showForm: null,
      }));
    }
  };

  handleShowForm = name => {
    this.setState(prevState => ({
      showForm: prevState.showForm === name ? null : name,
    }));
  };

  handleDeleteCard = (id, rel) => {
    this.setState((prev) => ({ [rel]: prev[rel].filter(el => el.text !== id) }));
  }
 
  render() {
    console.log(this.state.showForm);

    return (
      <div className="app">
        <SideBar />
        <Main>
          <Section isRow isRightPosition title="Information about university">
            <Card
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              name={universityData.name}
            />
            <Paper>{universityData.description}</Paper>
          </Section>
          <Section title="Tutors" image={tutorsIcon}>
            <TutorsList
              tutors={this.state.tutors}
              deleteTutor={this.deleteTutor}
            />
            {this.state.showForm === FORMS.TUTOR_FORM && (
              <TutorForm addTutor={this.addTutor} />
            )}
            <Button
              isIcon
              text={'Add tutor'}
              action={() => this.handleShowForm(FORMS.TUTOR_FORM)}
            />
          </Section>
          <Section title="Cities">
            <PartialList
              listData={this.state.cities}
              handleDeleteCard={this.handleDeleteCard}
            />
            {this.state.showForm === FORMS.CITY_FORM && (
              <PartialForm title="adding city" onSubmit={this.addCity} />
            )}
            <Button
              isIcon
              text={'Add city'}
              action={() => this.handleShowForm(FORMS.CITY_FORM)}
            />
          </Section>
          <Section title="Departments">
            <PartialList
              listData={this.state.departments}
              handleDeleteCard={this.handleDeleteCard}
            />
            {this.state.showForm === FORMS.DEPARTMENT_FORM && (
              <PartialForm
                title="adding department"
                onSubmit={this.addDepartment}
              />
            )}
            <Button
              isIcon
              text={'Add department'}
              action={() => this.handleShowForm(FORMS.DEPARTMENT_FORM)}
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
