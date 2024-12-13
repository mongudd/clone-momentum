function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("mongudd", 10);
sayHello("nico", 23);
sayHello("dal", 21);

//
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
plus(60, 8);

function divide(a, b) {
  console.log(a / b);
}
divide(98, 20);

//
const player = {
  name: "mongudd",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};
console.log(player.name);
player.sayHello("lynn");

// Simple
function plus(a, b) {
  console.log(a + b);
}
plus(5, 6);
