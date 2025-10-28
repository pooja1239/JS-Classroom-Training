let employees = [
  { name: "Riya", gender: "Female" },
  { name: "Amit", gender: "Male" },
  { name: "Neha", gender: "Female" },
  { name: "Suresh", gender: "Male" },
  { name: "Pooja", gender: "Female" }
];

// For loop to go through all employees
for (let i = 0; i < employees.length; i++) {
  if (employees[i].gender==="Female") {
    console.log(employees[i].name);
  }
}
