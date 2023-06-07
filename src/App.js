import {useEffect, useState} from 'react'
import Person from './components/Person'
import communications from './services/communications'
const App = () => {
  //states
  const [persons, setPersons] = useState([])
  //effects
  const fetchPersons = () => {
    communications.getAll().then((response) => {
      console.log(response)
      setPersons(response);
    }) 
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
      <Person persons = {persons}/>
    </div>
  );
}

export default App;
