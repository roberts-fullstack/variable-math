let x1 = 2;
let y1 = 8;
let x2 = 4;
let y2 = 7;

let distance1 = x2 - x1;
let distance2 = y2 - y1;

let distance1_squared = distance1 ** 2;
let distance2_squared = distance2 ** 2;


let sum = Math.sqrt(distance1_squared + distance2_squared);

console.log(`The difference between ${distance1} and ${distance2} is ${sum}`);



