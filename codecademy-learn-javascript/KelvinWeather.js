//Constant variable for temp in K
const kelvin = 0;
//Temp converted in C
const celsius = kelvin - 273;
//Temp converted in F
let fahrenheit = celsius * (9 / 5) + 32;
//Round down decimal for temp in F
fahrenheit = Math.floor(fahrenheit);
//Temp in Newton scale
let newton = celsius * (33 / 100);
//Round down decimal for temp in Newton scale
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
