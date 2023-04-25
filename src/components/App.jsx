import {SideBar, Main, Paper, Card} from '../components'
import universityData from '../constants/universityData.json';

const App = () => {
  const onEdit = () => console.log('Edit');
  const onDelete = () => console.log('Delete');
  return (
    <div className='app'>
      <SideBar />
      <Main>
        <Card onDelete={onDelete} onEdit={onEdit} name={universityData.name} />
        <Paper>{universityData.description}</Paper>
      </Main>
    </div>
  );
};

export default App;
