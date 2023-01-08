let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Remove last item
console.log(secretMessage.length);
secretMessage.pop();
//Check length after pop
console.log(secretMessage.length);
//Add the strings (to and Program) to the end of the array
secretMessage.push("to", "Program");
//Replace 'easily' with 'right'
secretMessage.splice(secretMessage.indexOf("easily"), 1, "right");
//Remove first string
secretMessage.shift();
//Add string Programming to the beginning
secretMessage.unshift("Programming");
//Remove string get, right, the, first, time - replace with know
secretMessage.splice(secretMessage.indexOf("get"), 5, "know");

console.log(secretMessage.join(" "));

/*Output:
Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
*/
