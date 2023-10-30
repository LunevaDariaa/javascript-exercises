const convertToCelsius = function (temp) {
  const tempConverted = (Number(temp) - 32) * 0.555555555;
  const tempRounded = Number(tempConverted.toFixed(1));
  return tempRounded;
};

const convertToFahrenheit = function (temp) {
  const tempConverted1 = Number(temp) * 1.8 + 32;
  const tempRounded = Number(tempConverted1.toFixed(1));
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
