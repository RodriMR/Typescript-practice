function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

// let x: number; //* Explicitly declares x as a number type
// let y = 1; //* Implicitly declares y as a number type
// let z; //* Declares z without initializing it

// x = 1;
// x = "one";

// //Intelisense shows NUMBER methods
// y.toExponential;
// y.toFixed;
// y.toLocaleString;
// y.toPrecision;
// y.toString;
// y.valueOf;

// z = 1;
// z = "one";

//Number and BigInteger types

// let x: number;
// let y = 0;
// let z: number = 123.456;
// let big: bigint = 100n;

//String type

// let s: string;
// let empty = "";
// let abc = 'abc';

// let firstName: string = "Mateo";
// let sentence: string = `My name is ${firstName}.
//     I am new to TypeScript.`;
// console.log(sentence);


// enum ContractStatus {
//   Permanent=1,
//   Temp,
//   Apprentice
// }

// let employeeStatus: ContractStatus = ContractStatus.Temp;
// console.log(ContractStatus[employeeStatus]);