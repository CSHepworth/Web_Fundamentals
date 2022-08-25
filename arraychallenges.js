function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
        }
        else {
            console.log("I'm Hungry")
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);1


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        var avg = sum / arr.length;
    }
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


function reverse(arr) {
    for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var temp1 = fibArr[fibArr.length - 1];
        var temp2 = fibArr[fibArr.length - 2];
        fibArr.push(temp1 + temp2);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);