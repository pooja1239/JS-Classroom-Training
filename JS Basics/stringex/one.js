const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];

const uniqueUsers = [...new Map(users.map(u => [u.id, u])).values()];
console.log(uniqueUsers);
// [{id:1,name:"Alice"}, {id:2,name:"Bob"}]

