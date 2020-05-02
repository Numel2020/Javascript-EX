//console.log(window.innerWidth);
//console.log(outerWidth);
//console.log(outerWidth);
//console.log(window);

// should persist
//localStorage.setItem('key1',1000);
//console.log(localStorage.getItem('key1'));

//console.log(window.location);

/////////////////////////////////////////////

//console.log(document.body.children[0].firstElementChild);
//console.log(document.body.children[0]);
//console.log(document.body.children[0].lastElementChild.textContent = 'yayaayay');

////////////////////////////////////////////

console.log(document.getElementById("app"));
console.log(
  (document.querySelector("#app div").style.backgroundColor = "magenta")
);

var p = document.createElement("p");
p.textContent = "A new paragraph";
p.style.fontSize = "20px";
p.style.fontWeight = "bold";
console.log(p);

var b = document.querySelector("#app").children[2];

console.log(b);

b.appendChild(p);

p.parentNode.remove(p);
