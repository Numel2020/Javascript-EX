import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Javascript bootcamp</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
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
function calc() {
  return console.log("hello");
}

calc();

// var
let calc2 = function() {
  return console.log("hello mel");
};

calc2();

// Arrow
let calc3 = () => {
  return console.log("hello mel again");
};

calc3();

// () to execute the funstion
function mel() {
  console.log("hello dog");
}

var test = mel;

test();
