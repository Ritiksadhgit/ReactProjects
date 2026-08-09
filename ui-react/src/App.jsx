
import { color } from 'motion';
import CircularText from './CircularText';
import './CircularText.css';


function App() {


  return (
    <>
    <h1>Hii i am ritik</h1>
    

<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="circular-text"

  
/>
          </>
  )
}

export default App
