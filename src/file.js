const data = [1, 2, 3, 4, 5];
const names = ["Armando", "Ion", "Andrei"];
const add = [...data, 6, 7, 8, 9, 10];
console.log(add);

//this is a map() function to use //
const maping = names.map((name) => {
  console.log(name);
});

const NameSurname = {
  Name: "Santiago",
  Prenume: "Gonzales"
};
const PersonalData = {
  ...NameSurname,
  mobile: 37378761822,
  email: "ionburueanu1978@gmail.com"
};

console.log(PersonalData);
