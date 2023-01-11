const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length - 1; i++) {
  input.charAt(0);
}
for (let i = 0; i < input.length - 1; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input.charAt(i) === vowels[v]) {
      resultArray.push(input.charAt(i));
      if (input.charAt(i) === "e" || input.charAt(i) === "u") {
        resultArray.push(input.charAt(i));
      }
    }
  }
}

let resultString = resultArray.join("");
console.log(resultString.toUpperCase());
