const repeatString = function (word, num) {
  let str = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      str += word;
    }
  } else {
    str = "ERROR";
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
