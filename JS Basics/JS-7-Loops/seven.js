let employees = [
  { name: "Riya", gender: "Female" },
  { name: "Amit", gender: "Male" },
  { name: "Neha", gender: "Female" },
  { name: "Suresh", gender: "Male" },
  { name: "Pooja", gender: "Female" }
];
let i = 0;
while (i < employees.length) {
  if (employees[i].gender=== "Male") {
    console.log(employees[i].name);
  }
  i++;
}



let male_empls=0;

for(emp of employees){
    if(emp.gender==='Male'){
       male_empls++;
    }
}
console.log(male_empls)
