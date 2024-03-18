//! What is Factorial?
//! Factorial, in mathematics, is the name given to the number with an exclamation mark added to its right, which is a specific case of the more general Gamma function restricted to integers.
//! 5! = 5.4.3.2.1 = 120

let number = Number(prompt("Enter a number: "));
let mul = 1;

for (let i = 1; i <= number; i++) {
  mul *= i;
}
alert(`Result: ${mul}`);
