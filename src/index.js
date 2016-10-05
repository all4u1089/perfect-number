var isPerfectNumber = function isPerfectNumber(number, callback) {

  if (isNaN(number)) {
    return callback(new Error('it must be a numeric'));
  }

  if (number % 1 !== 0) {
    return callback(new Error('number must be integer'));
  }

  if (number < 0) {
    return callback(new Error('number must be positive'));
  }

  var sum = 0;

  for (var i = number - 1; i > 0; i--) {
    if (number % i === 0) {
      sum += i;
    }
  }
  var result = sum === number;
  return callback(null, result);
};

module.exports = {
  isPerfectNumber
};
