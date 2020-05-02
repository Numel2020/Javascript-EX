import "./styles.css";
//import {calc} from "./part1";

const text = "blood";

document.getElementById("app").innerHTML = `
<h1>Javascript bootcamp</h1>
<div>
  We use ${text} Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
