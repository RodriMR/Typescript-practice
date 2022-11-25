function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

let x: number; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it

x = 1;
x = "one";

//Intelisense shows NUMBER methods
y.toExponential;
y.toFixed;
y.toLocaleString;
y.toPrecision;
y.toString;
y.valueOf;

z = 1;
z = "one";
