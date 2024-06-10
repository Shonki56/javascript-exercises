const removeFromArray = function (numbers, ...numsToBeRemoved) {
  for (const arg of numsToBeRemoved) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === arg) {
        let index = numbers.indexOf(numbers[j]);
        numbers.splice(index, 1);
        j--;
      }
    }
  }

  return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
