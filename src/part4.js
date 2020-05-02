/////clousures
function generator(input) {
  var number = input;
  return function() {
    return number * 2;
  };
}

var cal = generator(900);
console.log(cal());
console.log(cal);
///////////IIFEs////////

var obj = {};
(function john(input) {
  obj.name = "Max";
})(obj);

console.log(obj);

//////////////////////////////////////
// arguments variable

function message(params, test) {
  console.log(params);
  console.log(message);
  console.log(arguments);
}

var msg = message;

console.log(message("hi"));
console.log(msg.length);

///////////////////////Built in stuff/////////////////////

//setTimeout(() => { console.log('finish')}, 3000);

/*var interval = setInterval(() => {
  console.log("running");
}, 500);

setTimeout(() => {
  clearInterval(interval);
}, 3000);*/

var a = 12.5;

console.log(parseInt(a, 0));
console.log(a.toString());
console.log(a.toFixed());

//////////////////////////////////////////////////////

var string = " Any text";

console.log(string[2]);
console.log(string.length);
// string is like an array starts at 0
console.log(string.charAt(2));
console.log(
  string
    .concat(" upper case")
    .toUpperCase()
    .split(" ")
);
console.log(string.split(" "));
console.log(string.trim());

/////////////////////////////////////////////////////////

var pi = Math.PI;

console.log(pi);
console.log(Math.floor(Math.random() * 100 + 1));

/////////////////////////////////////////////////

var today = new Date();
console.log(today);

console.log(today.getDay());
