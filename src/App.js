import { useEffect, useState } from "react";
import communications from "./services/communications"
import Filter from "./components/Filter";
import Person from "./components/Person"
const App = () => {
  //states
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(true);
  //functions
  const fetchPerons = () => {
    communications.getAll().then((response)=>{
      setPersons(response)
    })
  }
    const handleFilterChange = (event) => {
      console.log(event.target.value);
      setNewFilter(event.target.value);
    };
  //effects
  const hook = () => {
    console.log('effect');
    fetchPerons()
  }
  useEffect(hook, []);
  console.log("render", persons.length, "persons");
  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter)
      );
  return (
    <div>
      <h1 className="heading1">Anaxia Employee Directory</h1>
      <Filter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <Person personsToShow = {personsToShow} />
    </div>
  );
}

export default App;