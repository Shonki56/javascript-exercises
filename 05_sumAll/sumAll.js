const sumAll = function (from, until) {
  let sum = 0;

  if (typeof from != "number" || typeof until != "number") {
    return "ERROR";
  } else if (from <= 0 || until <= 0) {
    return "ERROR";
  } else if (from > until) {
    sum = (from * (until + from)) / 2;
  } else {
    sum = (until * (from + until)) / 2;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
