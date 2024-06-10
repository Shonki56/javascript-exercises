const convertToCelsius = function (fahrenheit) {
  return Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round((celsius * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
