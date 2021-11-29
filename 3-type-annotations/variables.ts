let apple: number = 3;

// apple = "5";
apple = 2;
console.log(apple);

// Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let bool: boolean[] = [true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
   x: 10,
   y: 2,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
   console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json: string = '{"x": 10, "y": 3}';

const cordinates = JSON.parse(json);

// cordinates.asdf => really bad !!! => avoid any type at any cost

console.log(cordinates);

// FIX
const cordinatesFixed: { x: number; y: number } = JSON.parse(json);

// cordinatesFixed.adf

// 2) When we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
   if (words[i] === 'green') {
      foundWord = true;
   }
}

// 3) Variabe whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
   }
}
