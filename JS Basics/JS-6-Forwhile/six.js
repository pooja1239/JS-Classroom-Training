// Sample array of employee objects
const employees = [
  { id: 1, name: "Amit Kumar", department: "Engineering" },
  { id: 2, name: "Pooja Rani", department: "Design" },
  { id: 3, name: "Rahul Verma", department: "Marketing" },
  { id: 4, name: "Sneha Patil", department: "HR" }
];

// Initialize index
let i = 0;

// Use while loop to print names
while (i < employees.length) {
  console.log(employees[i].name);
  i++;
}
