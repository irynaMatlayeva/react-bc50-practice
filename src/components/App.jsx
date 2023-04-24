import {SideBar, Main, Paper} from '../components'

const App = () => {
  return (
    <div className='app'>
      <SideBar />
      <Main>
        <Paper>Mit</Paper>
        <Paper>Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can personally see the success stories of our alumni to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge.</Paper>
      </Main>
      {/* <Main children='Main'/> */}
    </div>
  );
};

export default App;
