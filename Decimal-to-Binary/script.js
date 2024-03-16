//! In Algebra, decimals are one of the types of numbers, which has a whole number and the fractional part separated by a decimal point. The dot present between the whole number and fractions part is called the decimal point. For example, 1.2 is a decimal number.
//! In mathematics and in computing systems, a binary digit, or bit, is the smallest unit of data. Each bit has a single value of either 1 or 0, which means it can't take on any other value. Computers can represent numbers using binary code in the form of digital 1s and 0s inside the central processing unit (CPU) and RAM.

let decToBinary = prompt("Enter a decimal number");
convertDecimalToBinary(decToBinary);

function convertDecimalToBinary(number) {
  let binary = "";
  while (true) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2);
    if (number == 1) {
      binary += 1;
      break;
    }
  }
  let result = reverse(binary);
  alert(`Result = ${result}`).toString();
}

function reverse(binary) {
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }

  return reverseBinary;
}
