// Switch statement
let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

// An example without break:
let b = 2 + 2;

switch (b) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly");
  case 5:
    console.log("TOo big");
  default:
    console.log("I don't know");
}

// Grouping of "case"
let c = 3;

switch (c) {
  case 4:
    console.log("Right");
    break;
  case 3:
    case5: console.log("Wrong");
    console.log("Why don't you take a math class?");
  default:
    break;
}

// Rewrite the "switch" into an "if"
if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}
