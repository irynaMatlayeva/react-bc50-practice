import { Component } from 'react';
import { SideBar, Main, Paper, Card, Section, TutorsList } from '../components';
import universityData from '../constants/universityData.json';
import tutorsIcon from '../assets/images/teachers-emoji.png';

class App extends Component {
  state = {
    tutors: universityData.tutors ?? [],

  }
   onEdit = () => console.log('Edit');
   onDelete = () => console.log('Delete');
  render() {
    console.log(this.state.tutors)
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
        </Section>
        <Section title="Cities"></Section>
        <Section title="Departments"></Section>
      </Main>
    </div>
  );
  }
  
};

export default App;
