const phoheNumber = prompt("Utasnii dugaaraa oruul");

const plus = phoheNumber.substr(0, 1);
const too = phoheNumber.substr(1, 3);
const number = phoheNumber.substr(4, 8);

console.log(plus);
console.log(too);
console.log(number);

if (phoheNumber.length == 12 && plus == "+" && too == 976 && Number.isInteger(Number(number))) {
  console.log("Phone Number Correct");
} else {
  alert("Your Phone Number Wrong");
  console.error("Your Phone Number Wrong");

  // if (phoheNumber.length != 12) {
  //   alert("Utasnii dugaaraa 12 orontoi oruulna uu")
  // }

  // if (plus != "+") {
  //   alert("+ temdeg oruulna uu")
  // }

  // if (plus != 976) {
  //   alert("Ulsiin code buruu baina")
  // }

}