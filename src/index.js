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
`;

let log = console.log;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 1500);
// });

// promise.then(
//   value => {
//     log(value);
//   },
//   error => {
//     log(error);
//   }
// );

//////////////////////////////////////

function waitASecond(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject("Rejected");
    } else {
      setTimeout(() => {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

function waitASecond2(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject("Rejected");
    } else {
      setTimeout(() => {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}
//simply promise
waitASecond(0)
  .then(waitASecond(0))
  .then(seconds => {
    log(seconds);
  })
  .catch(error => {
    log(error);
  });

/////////////////////////all/////////////////
//both conditions must be met.
Promise.all([waitASecond(2), waitASecond2(0)])
  .then(success => {
    log(success);
  })
  .catch(error => {
    log(error);
  });
