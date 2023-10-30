const sumAll = function (from, to) {
  let current;
  if (
    typeof from === "number" &&
    from > 0 &&
    typeof to === "number" &&
    to > 0
  ) {
    if (from < to) {
      current = from;
      for (let i = from + 1; i <= to; i++) {
        current += i;
      }
    } else if (from > to) {
      current = to;
      for (let i = to + 1; i <= from; i++) {
        current += i;
      }
    }
  } else {
    return "ERROR";
  }
  return current;
};

// Do not edit below this line
module.exports = sumAll;
