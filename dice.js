function rollDie() {
    var rand = Math.random();
    var b1 = 1 / 6
    var b2 = b1 * 2
    var b3 = b1 * 3
    var b4 = b1 * 4
    var b5 = b1 * 5
    if (rand <= b1) {
        x = 1;
    }
    else if (rand > b1 && rand <= b2) {
        x = 2;
    }
    else if (rand > b2 && rand <= b3) {
        x = 3;
    }
    else if (rand > b3 && rand <= b4) {
        x = 4;
    }
    else if (rand > b4 && rand <= b5) {
        x = 5;
    }
    else {
        x = 6;
    }
    return x;
}

console.log(rollDie());