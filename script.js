const a = 1;
const b = 2;

function getSum(a, b) {
  return a + b;
}

function getDiv(a, b) {
  return a / b;
}

function getRes(a, b) {
  return {
    sum: getSum(a, b),
    div: getDiv(a, b),
  };
}
