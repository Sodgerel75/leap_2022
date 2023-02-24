let activities = [
  ["Work", 10],
  ["Eat", 1],
  ["Talk", 2],
  ["Play", 3],
  ["Sleep", 8],
];

console.table(activities);

let data = [];
for (let i = 0; i < activities.length; i++) {
  activities[i].push(((activities[i][1] / 24) * 100).toFixed() + `%`);
}
data = activities;
console.table(data);
