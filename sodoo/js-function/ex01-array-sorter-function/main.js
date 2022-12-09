sortArray = [1, 2, 8, 7, -1, 10];

function sortingAlgorithm(arr) {

    for (let i = 0; i < arr.length - 2; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length - 1; j++); {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        return arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;

    }
    return arr;
}

console.log(sortingAlgorithm(sortArray));