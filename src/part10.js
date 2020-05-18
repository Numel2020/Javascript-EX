let str = "Hello";

let test = 5;

console.log(str);

//primatives are not objects

let billion = 1000;

console.log(billion + 5);

////////////////////////////////////

let num = 1.23456;

console.log(Math.floor(num * 100));

////////////////////////////////////

console.log(parseInt("100px")); //takes nubers from string and converts

let sam = "what is going on";

console.log(sam.includes("on"));

////////////////////////////////////////////////////////////

let arr = ["I", "study", "JavaScript", "right", "now"];
let arr2 = ["we", "two", "JavaScript"];

arr.splice(0, 2); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

//////////////////////////////////////////////////

let concat = arr.concat(arr2);

console.log(concat);

/////////////////////////////////////////////////

concat.forEach(item => {
  if (item === "JavaScript") {
    console.log(item);
  }
});

///////////////////////////////////////

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let user = users.find(item => item.name == "Pete");

console.log(user.name);

////////////////////////////////////////////////////////////////

let lengths = ["Bilbo", "Gandalf", "Nazgul", "Aleem"].map(item => item);

console.log(lengths.sort());

//////////////////////////////////////////////////////////////

//When we need to iterate over an array – we can use forEach, for or for..of.
//When we need to iterate and return the data for each element – we can use map.

let prices = Object.fromEntries([["banana", 1], ["orange", 2], ["meat", 4]]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

//////////////////////////////////////

let pricesOld = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(pricesOld).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);

////////////////////////Smatr functions///////////////////////////////////////////
// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }

// showMenu(options);

// function sayHi() {
//   alert("Hi");
// }

// console.log(sayHi.name);

/////////////////////////////////////////////////////////////
let celeb = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
celeb.fullName = "Alice Cooper";

console.log(celeb.name); // Alice
console.log(celeb.surname); // Cooper

/////////////////////////////////////////////////////////////

// try {

//   alert('Start of try runs');  // (1) <--

//   lalala; // error, variable is not defined!

//   alert('End of try (never reached)');  // (2)

// } catch(err) {

//   alert(`Error has occurred!`); // (3) <--

// }

// try {
//   lalala; // error, variable is not defined!
// } catch(err) {
//   alert(err.name); // ReferenceError
//   alert(err.message); // lalala is not defined
//   alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

//   // Can also show an error as a whole
//   // The error is converted to string as "name: message"
//   alert(err); // ReferenceError: lalala is not defined
// }

////error first
// let promise = new Promise(function(resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 1000);
// });

// promise.then(result => console.log("we done"));

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve); // function() { native code }
//     // resolve with this.num*2 after the 1 second
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result); // (*)
//   })
//   .then(alert); // shows 2 after 1000ms

// let a = new Promise(resolve => setTimeout(() => resolve(1), 3000)); // 1
// let b = new Promise(resolve => setTimeout(() => resolve(2), 2000)); // 2
// let c = new Promise(resolve => setTimeout(() => resolve(3), 1000)); // 3

// Promise.all([a, b, c])
// .then(result => console.log(result)); // 1,2,3 when promises are ready: each promise contributes an array member

/////////////////////////////////////////////////////////////////////////////
// usage

function curry(f) {
  // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(4)(2)); // 3
