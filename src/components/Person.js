const Person = ({personsToShow }) => {
  console.log("person render");
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