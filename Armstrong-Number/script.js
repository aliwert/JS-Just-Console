//! What's Armstrong number?
//! An Armstrong number is a special kind of number in math. It's a number that equals the sum of its digits, each raised to a power.
//!  If you have a number like 153, it's an Armstrong number because 1*1*1 + 5*5*5 + 3*3*3 equals 153.
//! If you have a number like 1634, it's an Armstrong number because 1*1*1*1 + 6*6*6*6 + 3*3*3*3 + 4*4*4*4

let number = prompt("Enter a number: ");
let numDigits = number.length;
let total = 0;
for (let i = 0; i < numDigits; i++) {
  let digit = parseInt(number.charAt(i));
  total += Math.pow(digit, numDigits);
}

if (number == total) {
  alert(`${number} is Armstrong number`);
} else {
  alert(`${number} it's not Armstrong number`);
}
