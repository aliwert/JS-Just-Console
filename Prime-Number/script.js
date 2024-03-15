//! What is Prime Number?
//! A whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).

let number = Number(prompt("Enter a number: "));
let result = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
  if (number % i == 0) {
    //? Not prime number
    result = false;
    break;
  }
}
if (result) {
  alert(`${number} is prime.`);
} else {
  alert(`${number} is not prime.`);
}
