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
} from '../components';
import universityData from '../constants/universityData.json';
import tutorsIcon from '../assets/images/teachers-emoji.png';

class App extends Component {
  state = {
    tutors: universityData.tutors ?? [],
    cities: universityData.cities.map(city => ({ text: city })) ?? [],
    departments:
      universityData.department.map(({ name }) => ({ text: name })) ?? [],
  };
  
  onEdit = () => console.log('Edit');
  
  onDelete = () => console.log('Delete');
  
  handleDropdown = () => console.log('dropdown');

  addTutor = (tutor) => {
    this.setState(({tutors}) => ({ tutors: [...tutors, tutor] }));
  }

  render() {
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
            <TutorsList tutors={this.state.tutors} />
            <TutorForm addTutor={this.addTutor} />
            <Button isIcon text={'Add tutor'} />
          </Section>
          <Section title="Cities">
            <PartialList
              listData={this.state.cities}
              isOpenDropdown={this.handleDropdown}
            />
            <Button isIcon text={'Add city'} />
          </Section>
          <Section title="Departments">
            <PartialList
              listData={this.state.departments}
              isOpenDropdown={this.handleDropdown}
            />
            <Button isIcon text={'Add department'} />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
