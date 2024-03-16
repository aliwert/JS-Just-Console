//! What is perfect numbers?
//! Perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6.
//! (Perfect Number = 6), (Sum of all factors = 1 + 2 + 3 + 6), (Product = 12), (Number * 2 = 12)

let perNum = prompt('Enter a number')
isPerfectNumber(perNum);

function isPerfectNumber(number) {
  let result = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      result += i;
    }
  }
  result += 1 + number;

  if (result == number * 2) {
    alert(`${perNum} is perfect number.`);
  } else {
    alert(`${perNum} is not perfect number.`);
  }
}
