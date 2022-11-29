const yearOfBirth = prompt("Enter your birth year");
let old = (2022 - yearOfBirth);

console.log("Your age: " + old);

if (0 <= old && old <= 1) {
  console.log("Infant")
}
else if (1 < old && old <= 3) {
  console.log("Toddler")
}
else if (3 < old && old <= 5) {
  console.log("Preschool")
}
else if (5 < old && old <= 12) {
  console.log("Gradeschooler")
}
else if (12 < old && old <= 18) {
  console.log("Teen")
}
else if (18 < old && old <= 21) {
  console.log("Young adult")
}
else {
  console.log("Adult")
}
