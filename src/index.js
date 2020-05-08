import "./styles.css";
//import {calc} from "./part1";

document.getElementById("app").innerHTML = `
<header><h1>Javascript bootcamp</h1></header>
<nav><button id="btnGo">Go Fetch Something</button></nav>
<main>
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div id="spinner" data-state="hide"></div>

</main>

</div>
`;

let log = console.log;

// document.addEventListener("DOMContentLoaded", () => {
//   log("cool");
//   document.getElementById("btnGo").addEventListener("click", doFetch);
// });

document.addEventListener("DOMContentLoaded", event => {
  log("DOM fully loaded and parsed");
});

// function doFetch(ev) {
//   log("cool");
//   ev.preventDefault();
//   loadSpinnerState('show');

//   fetch("https://reqres.in/api/users/")
// .then((resp) => resp.json())
// .then(showContent)
// .catch(fail)
//.finally(hideLoading);
//}

// function loadSpinnerState(prop) {
//   let spinner = document.getElementById("spinner");
//   spinner.setAttribute("data-state", `${prop}`);
// }

// function showContent(data) {
//   console.log("we got the content");
//   console.log(data);
// }
// function fail(err) {
//   console.warn("Something went wrong with the fetch");
//   console.warn(err.message);
// }
