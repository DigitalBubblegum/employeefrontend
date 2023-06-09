const Person = ({personsToShow }) => {
  console.log("person person person");
  return (
    <>
      <ol>
        {personsToShow.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ol>
    </>
  );
};
export default Person