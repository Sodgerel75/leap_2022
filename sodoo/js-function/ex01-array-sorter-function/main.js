sortArray = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

function sortingAlgorithm(arr) {
    // arr.sort((a, b) => a - b)


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            i = -1;
        }

    }

    // for (let i = 0; i < arr.length - 2; i++) {
    //     let indexMin = i;
    //     for (let j = i + 1; j < arr.length - 1; j++); {
    //         if (arr[j] < arr[indexMin]) {
    //             indexMin = j;
    //         }
    //     }
    //     return arr[i];
    //     arr[i] = arr[indexMin];
    //     arr[indexMin] = temp;

    // }
    return arr;
}

document.write("<br><br><br>Original array: ["
    + (sortArray).join(", ") + "]<br>");
console.log(sortingAlgorithm(sortArray));
arr = sortingAlgorithm(sortArray);

document.write("Sorted array: ["
    + arr.join(", ") + "]<br>");