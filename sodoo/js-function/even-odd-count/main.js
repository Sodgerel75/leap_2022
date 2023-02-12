const arr1 = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

function evenOdd(arr) {
  let sumEven = [];
  let sumOdd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven.push(arr[i]);
    } else {
      sumOdd.push(arr[i]);
    }
  }
  console.log(
    "Тэгш тоо = " + sumEven.length + ", Сондгой тоо = " + sumOdd.length
  );
}

evenOdd(arr1);
