const sumAll = function (from, until) {
  let sum = 0;
  if (typeof from != "number" || typeof until != "number") {
    return "ERROR";
  } else if (from <= 0 || until <= 0) {
    return "ERROR";
  } else if (from > until) {
    for (until; until < from; until++) {
      sum += until;
    }
    return sum + from;
  } else {
    for (from; from < until; from++) {
      sum += from;
    }
    return sum + until;
  }
};

// Do not edit below this line
module.exports = sumAll;
