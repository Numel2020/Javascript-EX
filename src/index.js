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

const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open(method, url);

    http.responseType = "json";

    if (data) {
      http.setRequestHeader("Content-Type", "application/json");
    }

    http.onload = () => {
      resolve(http.response);
    };

    http.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }).then(responseData => {
    console.log(responseData);
  });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
