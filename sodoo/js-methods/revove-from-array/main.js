const array = [2, 1, 6, 5, 8];

function removeElement(arr, too) {
  return arr.filter((el) => el !== too);
}

console.log(removeElement(array, 6));
