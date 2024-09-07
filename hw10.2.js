let string = "Wonderful, Joyful, Happiness, Time, Task, Apple";

let regex = /\b[^aA\s]{6,}\b/g;

let result = string.match(regex);

console.log(result);