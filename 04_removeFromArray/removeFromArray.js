const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach(function (val) {
    if (!args.includes(val)) {
      newArray.push(val);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
