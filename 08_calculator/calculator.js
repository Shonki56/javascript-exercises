const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((acc, cur) => (acc += cur), 0);
};

const multiply = function (args) {
    return args.reduce((acc, cur) => (acc *= cur), 1);
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (num) {
    if (num === 0) {
        return 1;
    }
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
