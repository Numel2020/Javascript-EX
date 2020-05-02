// window.onload = function() {
//   console.log("window loaded");
// };

var btn = document.querySelector("button");

// btn.onclick = function() {
//   console.log("click");
// };

////////////////////////////////////////

btn.addEventListener("click", list1);
btn.addEventListener("click", list2);

function list1() {
  console.log("Lsitener 1");
}

function list2() {
  console.log("Lsitener 2");
}

setTimeout(function() {
  btn.removeEventListener("click", list1);
}, 2000);

//////////////////////////////////////////////
////////////  stop-propagation   /////////////
