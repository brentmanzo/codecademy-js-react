const myAge = 22; //my current age
let earlyYears = 2; //early dog years

earlyYears *= 10.5;

let laterYears = 22 - 2; //my current age - early years

//my age, after subtracting the early dog years, multiplied by 4
laterYears *= 4;
//my age equivalent to dog year conversion
const myAgeInDogYears = earlyYears + laterYears;
//my name in lower case letters
const myName = "Brent".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
