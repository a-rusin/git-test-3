const a = 1;
const b = 2;

function getSum(a, b) {
  if (a & b) return a + b;
  return 0;
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

function getMult(a, b) {
  return a * b;
}
