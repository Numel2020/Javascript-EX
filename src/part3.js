//let array = ['jack',2,3,4]

/*array.forEach((element)=>{
console.log(element);
});*/

// takes off last element
//console.log(array.pop());

// takes off first element
//console.log(array.shift());

// slice and splice
// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// let newArray = array.slice(2, 4);
// console.log(newArray);
// console.log(array);

// console.log(array.filter(function(value) {
//   return value > 2;
// }));

// console.log(array.map(function(value) {
//   return value * 2;
// }));

////////////////////////////////////////////////////////

var person = {
  name: "Max",
  age: 27,
  details: { hobbies: ["Sports", "Cooking"], location: "Germany" },
  greet: function() {
    console.log("hello, I am " + this.name);
  },
  sugar: function() {
    return "nononono I am only" + this.age;
  }
};
person.dismiss = () => {
  console.log("Goodbye");
};

console.log(person.dismiss());
console.log(person);

var name = person.sugar();

console.log(name);

console.log(typeof person.sugar());

//////////////////////////////////////////////////////////////

let anotherPerson = new Object();

anotherPerson.name = "Anna";
anotherPerson.age = 30;

console.log(anotherPerson);

/////////////////////////////////////////////////////////////
let Peter = Object.create(anotherPerson);
Peter.aka = "Begga";

console.log(Peter.name);

///////////////////////////PROTO//////////////////////////////

function Human(name, age) {
  this.name = name;
  this.age = age;
}

var melvyn = new Human("bigmel", 23);

console.log(melvyn);

/////////////////////////////////////////////////////////////

//delete, in in line with properties

var being = {
  name: "Alien",
  age: "Infinte",
  sex: "unknown"
};

for (var prop in being) {
  console.log(prop === "sex" ? "is alive" : "Not around");
  console.log(typeof being[prop]);
}
