// Array of employee objects
const employees = [
  { name: "John", gender: "Male" },
  { name: "Priya", gender: "Female" },
  { name: "Raj", gender: "Male" },
  { name: "Anita", gender: "Female" },
  { name: "Arjun", gender: "Male" }
];

let i = 0;

console.log("List of Male Employees:");
while (i < employees.length) {
  if (employees[i].gender.toLowerCase() === "male") {
    console.log(employees[i].name);
  }
  
}
