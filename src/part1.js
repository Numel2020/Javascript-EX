let variable = 1;
let variable2 = 1;

console.log(typeof variable);

// value and the type being equal ===
console.log(variable === variable2);

console.log(isNaN(variable));

/////////////////////////////////////

let var1 = {
  name: "Max"
};

console.log(typeof var1);

// dfferent ways to write functions

// norm
export function calc() {
  return console.log("hello");
}

//calc();

// var
let calc2 = function() {
  return console.log("hello mel");
};

//calc2();

// Arrow
let calc3 = () => {
  return console.log("hello mel again");
};

//calc3();

// () to execute the funstion
function mel() {
  console.log("hello dog");
}

//var test = mel;

//test();

/////////////////////////////////////////

let luckyNumber = 7;

// case are value statements
// break: breakes up cases
// default: default value
switch (luckyNumber) {
  case 1:
    console.log("is 1");
    break;
  case 2:
    console.log("is 2");
    break;
  default:
    console.log("is the default value");
    break;
}

////////////////////////////////////////

for (let i = 0; i < 5; i++) {
  //above scope
  //console.log(i);
  console.log("outer " + i);
  for (let j = 0; j < 2; j++) {
    // seld contained
    //console.log(i * j);
    console.log("inner " + j);
  }
}
