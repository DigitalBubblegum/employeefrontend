const Person = ({persons}) => {
  console.log('person person person');
  console.log(persons.data[0]);
    return (
      <>
        <ol>
          {persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      </>
    );
}
export default Person