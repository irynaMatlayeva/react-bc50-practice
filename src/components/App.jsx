import { SideBar, Main, Paper, Card, Section } from '../components';
import universityData from '../constants/universityData.json';
import tutorsIcon from '../assets/images/teachers-emoji.png';

const App = () => {
  const onEdit = () => console.log('Edit');
  const onDelete = () => console.log('Delete');
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
        <Section title="Tutors" image={tutorsIcon}></Section>
        <Section title="Cities"></Section>
        <Section title="Departments"></Section>
      </Main>
    </div>
  );
};

export default App;
