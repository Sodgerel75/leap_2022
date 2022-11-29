let weight = prompt("Jingee oruul");
let height = prompt("Unduruu oruul");
let bmi = weight / height * height;
console.log("BMI = " + bmi);

if (bmi < 18.5) {
  console.log("Under Weight")
}
else if (18.5 < bmi < 24.9) {
  console.log("Normal")
}
else if (25 < bmi < 29.9) {
  console.log("Over Weight")
}
else if (30 < bmi < 34.9) {
  console.log("Obesity (Class I)")
}
else {
  console.log("Extreme Obesity")
}