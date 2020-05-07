import "./styles.css";
//import {calc} from "./part1";

const text = "blood";

document.getElementById("app").innerHTML = `
<h1>Javascript bootcamp</h1>
<div>
  We use ${text} Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div>
<button id="get-btn">click get</button>
<button id="post-btn">click post</button>
</div>
<div data-state="show" id="spinner"></div>
</div>
`;

let log = console.log;

let loading = true;

fetch("https://reqres.in/api/users/", {
  method: "GET",
  headers: {
    "Content-type": "application/json"
  },
  mode: "cors"
})
  .then(res => {
    if (res.ok) {
      log("success");
    } else {
      log("ERROR");
      throw new Error("BAD HTTP REQUEST");
    }
    return res.json();
  })
  .then(data => {
    if (data) {
      loading = false;
      hideSpin();
    } else {
      loading = true;
    }
    // animate loading element out
    log(data);
    log(loading);

    let girl = "yes";

    const foo = [{ data: data, person: girl }];
    return foo;
  })
  .then(foo => {
    let data = log(foo[0].data);
    let person = log(foo[0].person);
  })
  .catch(err => log(err.message));

function hideSpin() {
  let spinner = document.getElementById("spinner");
  spinner.setAttribute("data-state", "hide");

  return spinner;
}
