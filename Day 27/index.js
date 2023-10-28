// let user = new Object();
// let user1 = {};

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("John", 30);
console.log(user.name);

let codes = {
  '+49': "Germany",
  '+41': "Switzerland",
  '+44': "Great Britain",
  // ..,
  '+1': "USA",
};

for (let code in codes) {
  console.log(code);
}
