const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiple: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  squareRoot: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(2, 5);
calculator.minus(2, 5);
calculator.multiple(2, 5);
calculator.divide(2, 5);
calculator.squareRoot(2, 5);
