import {useEffect, useState} from 'react'
import Person from './components/Person'
const App = () => {
  //states
  const [persons, setPersons] = useState([])
  //effects
  const fetchPersons = () => {
    console.log('fetch person code from mongo code here');
    setPersons('test')
  }

const hook = () =>{
console.log('effect');
fetchPersons()
}
useEffect(hook,[])
  return (
    <div className="App">
      Hello World
      <br/>
      <Person />
    </div>
  );
}

export default App;
