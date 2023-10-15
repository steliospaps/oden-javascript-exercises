const convertToCelsius = function(f) {
  return Math.round((f-32)/9.0*50)/10.0
};

const convertToFahrenheit = function(c) {
  return Math.round((32+(c/5.0*9.0))*10)/10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
