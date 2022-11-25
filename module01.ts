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

// let randomValue: any = 10;
// randomValue = 'Mateo';   // OK
//     // OK

// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';

// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown

// let randomValue: unknown = 10;

// randomValue = true;
// randomValue = 'Mateo';

// if (typeof randomValue === "string") {
//     console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
// } else {
//     console.log("Error - A string was expected here.");    //* Returns an error message.
// }

// let randomValue: unknown = 10;

// randomValue = true;
// randomValue = "Mateo";

// if (typeof randomValue === "string") {
//   console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
// } else {
//   console.log("Error - A string was expected here."); //* Returns an error message.
// }

//Union types
// let multiType: number | boolean;
// multiType = 20; //* Valid
// multiType = true; //* Valid
// multiType = "twenty"; //* Invalid

// function add(x: number | string, y: number | string) {
//   if (typeof x === 'number' && typeof y === 'number') {
//       return x + y;
//   }
//   if (typeof x === 'string' && typeof y === 'string') {
//       return x.concat(y);
//   }
//   throw new Error('Parameters must be numbers or strings');
// }
// console.log(add('one', 'two'));  //* Returns "onetwo"
// console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error

//Intersection types
// interface Employee {
//   employeeID: number;
//   age: number;
// }
// interface Manager {
//   stockPlan: boolean;
// }
// type ManagementEmployee = Employee & Manager;
// let newManager: ManagementEmployee = {
//     employeeID: 12345,
//     age: 34,
//     stockPlan: true
// };

//Literal types
// type testResult = "pass" | "fail" | "incomplete";
// let myResult: testResult;
// myResult = "incomplete";    //* Valid
// myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid
// type dice = 1 | 2 | 3 | 4 | 5 | 6;
// let diceRoll: dice;
// diceRoll = 1;    //* Valid
// diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid
