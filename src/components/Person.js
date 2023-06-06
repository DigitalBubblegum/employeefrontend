const Person = ({persons}) => {
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