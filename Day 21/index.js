let sum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum(1, 4));

let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

// Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
