let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon',];
console.log(itCompanies);
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

let removedCom = itCompanies.splice(0, 1);
console.log(itCompanies);
let poppedCom = itCompanies.pop();
console.log(itCompanies);