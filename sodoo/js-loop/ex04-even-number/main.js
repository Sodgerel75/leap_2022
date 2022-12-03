console.log('Find out even numbers from 1-100')

const max = 100;
let count = 1;

while (count <= 100) {
  if (count % 2 == 0) {
    console.log(count);
  }
  count = count + 1;
}
