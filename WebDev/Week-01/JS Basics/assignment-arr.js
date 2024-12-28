function checkUser(arr) {
  let newUser = users.filter((item) => {
    return item.age >= 18 && item.gender === "male";
  });
  console.log(newUser);
}

const users = [
  {
    name: "Arjun",
    age: 18,
    gender: "male",
  },
  {
    name: "rohini",
    age: 20,
    gender: "female",
  },
  {
    name: "manu",
    age: 53,
    gender: "male",
  },
  {
    name: "raji",
    age: 48,
    gender: "female",
  },
];

checkUser(users);
