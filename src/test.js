//[1, 2].forEach(alert);
//alert("There will be an error");

//[1, 2].forEach(alert)

// thi isFinit
// emulti line

//let $ = 1; // declared a variable with the name "$"
//let _ = 2; // and now a variable with the name "_"

//alert($ + _); // 3

let name = "john";
let admin = name;

//alert(admin)

//const PLANET = 'earth';

//let currUser = name;
// only using back ticks
let you = `the result is ${name}`;

//console.log(typeof you);

// TYPEOF OPERATOR
/* typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3) */

/* let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed */

//alert, prompt, confirm

// type conversions

//let value = '123345';

//Number(value);

//console.log(typeof Number(value));
//console.log(Number(value))

//true = 1;
//false = 0;
//undefined	= NaN

//0, null, undefined, NaN, ""	 = false
//any other value	= true

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
////console.log(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
let counter = 0;
counter++;
++counter;
//console.log(counter); // 2, the lines above did the same

//Dictonaries and unicode order
//Dictonary comparison

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// let java = prompt('whats the offical name of javaScript', 'enter answer');
// let answer = (java == 'EMCBABY') ? 'you are right' : 'you know nothing'

// alert(answer);

// let a = 2;
// let b = 3;

// let result = (a + b < 4) ? 'Below' : 'Over';

// console.log(result);
let login = "Director";
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "no-login"
    : "";

//console.log(message);

////////////////////////

// let i = 0
// while(i < 3) {
//   i++;

// }
// console.log(i)

///////////////////////

// let l = 3;
// while(l) {
//   l--;
//   console.log(l)
// }

////////for loop /////////////
// let i = 0;

// // omit the begin
// for (; i < 3; i++) {
//   console.log(`this is ${i}`);
// }

// let a = 0;

// // omit the steps
// for (; a < 3; ) {
//   console.log(`this is ${a++}`);
// }

//////////////////
// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );
///////////////////////////////

// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!');

let i = 0;

console.log(i++);

// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2 || 3:
//   case 3:
//     alert("2,3");
//     break;
//   default:
//     alert("not needed");
// }

////////////////////
