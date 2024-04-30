function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function Calculator() {
  return { add, sub, div, mul };
}
function caesarCipher(input, shift) {
  return input
    .split("")
    .map((letter) => String.fromCharCode(letter.charCodeAt(0) + shift))
    .join("");
}
function analyzeArray(array) {
  if (array.length === 0) {
    return null;
  }

  array.sort((a, b) => {
    return a - b;
  });

  const sum = array.reduce((acc, val) => {
    return acc + val;
  });

  return {
    average: sum / array.length,
    min: array[0],
    max: array[array.length - 1],
    length: array.length,
  };
}
module.exports = {
  capitalize,
  reverse,
  add,
  sub,
  mul,
  div,
  Calculator,
  caesarCipher,
  analyzeArray,
};
