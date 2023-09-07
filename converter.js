//Assigned the temperature of the day to 293F
let kelvin = 0;

//Converting temperature to Celsius
let celsius = kelvin - 273;

//Converting temperature to fahrenheit and floor method will save the number as a whole number
let fahrenheit = Math.floor(celsius *(9/5)+32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);