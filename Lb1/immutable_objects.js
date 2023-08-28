const nummber1 = 1;

console.log(nummber1)

const person = {
    firstName: "yusuf",
    lastName: "khurshid",
    age: 18
  };

  console.log(person);

  const updatedPerson = {
    ...person,
    favFood: "Chicken"
  };

  console.log(updatedPerson)

  const updatedPerson2 = {
    ...person,
    age: 19 
  };

  console.log(updatedPerson2)

  const updatedPerson3 = Object.fromEntries(
    Object.entries(person).filter(([key, _]) => key !== "age")
  );

  console.log(updatedPerson3)
 