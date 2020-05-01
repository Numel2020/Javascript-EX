var array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  //console.log(array[i]);
}

///////////////////////////////////////////

let a = 12;
let b = 16;

a += b;

console.log(a + b);

let t = 10.3;
let h = 3;

//modulus is the remainder

console.log((t % h).toFixed(2));

//console.log(1 >= '1');

//console.log(null == null);
//console.log(0 == null);
//console.log(NaN === NaN);
//console.log(0 === undefined);

//////////////////////////////////////////

let f = 5;
let g = 5;

// Tenary =  condition ? expected : not expected
console.log(f === g ? "Equal" : "Not equal");

/////////////////////////////////////////
var array2 = [1, 2, 3];
var anotherArray = array2;
console.log(array2);
console.log(anotherArray);

array2 = ["a", "b"];
console.log(array2);
console.log(anotherArray);

////////////////////////////////////////////

let test = "global scope";
console.log(test);

const localScope = () => {
  var test = "Local scope";
  console.log(test);
};

localScope();
console.log(test);
