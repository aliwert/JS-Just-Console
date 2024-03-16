let text = prompt("Enter a sentence");
let letter = prompt("Enter letter");

let result = find(letter);
alert("Number of letter : " + result);

function find(letter) {
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).toLowerCase() === letter.toLowerCase()) {
      total += 1;
    }
  }
  console.log("Number of letter : " + total);
  return total;
}
