const palindromes = function (string) {
    let arr = string.split(" ");
    if (arr.includes(".")) {
        arr.pop();
    }
    arr[0].toLowerCase;
    return arr.reverse().join(" ") == string;
};

// Do not edit below this line
module.exports = palindromes;
