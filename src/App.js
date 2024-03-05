
import { CardHolder } from './components/CardHolder';
import { MemeGenComponent } from './components/MemeGen/MemeGen_Component';
import Navbar from './components/Navbar';
import { ThreeComponent } from './components/Threejs/ThreeComponet';

function App() {
  const date = new Date();
  const hour = date.getHours() % 24;
  let timeOfDay

  if(hour < 12) {
    timeOfDay = "morning"
  } else if (hour >= 12 && hour < 17){
    timeOfDay = 'afternoon'
  } else timeOfDay = 'night'

  const colors = ['red', 'green', 'yellow', 'blue', 'white', 'black', 'pink', 'purple', 'orange']

  return (
  <div className='App' >
    <Navbar/>
    <h2>Good {timeOfDay}! </h2>
    <b>{colors}</b>
    <CardHolder/>
    <MemeGenComponent/>
    <ThreeComponent/>
  </div>
  );
}

export default App;
