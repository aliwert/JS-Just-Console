//! I had explained what decimal and binary are in the Decimal-to-Binary folder.

let binary = prompt("Enter a binary number");

function convertBinaryToDecimal(binary) {
  let total = 0;
  let exponen = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (Number(binary.charAt(i)) != 0) {
      total += Number(binary.charAt(i)) * Math.pow(2, exponen);
    }
    exponen++;
  }

  alert(`Result = ${total}`);
}
convertBinaryToDecimal(binary);

//! *************************** OR ****************************//
//! Second solution, use whichever one you want.
//! Without if.

/* 

let binary = prompt("Enter a binary number");

function convertBinaryToDecimal(binary) {
  let total = 0;
  let exponen = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
      total += Number(binary.charAt(i)) * Math.pow(2, exponen);
    exponen++;
  }

  alert(`Result = ${total}`);
}
convertBinaryToDecimal(binary);

*/
