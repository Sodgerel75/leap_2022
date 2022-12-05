// Gime number of arrays = 1, 2, 3, 4, 5, 6, 7, 8
//      Output new array = 2, 3, 6, 4, 6, ,7 ,8 ,8
// Array item value change
// use of FOR LOOP



let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon',];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i] + ' Good');
  itCompanies[i] = itCompanies[i].toUpperCase();
}
console.log(itCompanies)

console.log(itCompanies + ' зэрэг мэдээллийн технологийн томоохон компаниуд.');



