/* Print Odds Function */
function printOdds() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        } 
    }
}

/* Decreasing Multiples of 3 */
function decrease3() {
    for (var i = 100; i >= 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

/* Print the Sequence */
function printSeq() {
    var arr = [4, 2.5, 1, -0.5, -2, -3.5];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

/* Sigma */
function sigma() {
    var sum = 0;
    for (i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

/* Factorial */
function factorial() {
    var product = 1;
    for (var i = 1; i <= 12; i++) {
        product *= i
    }
    console.log(product);
}

