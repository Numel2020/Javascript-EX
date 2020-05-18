import "./styles.css";
//import { calc } from "./test";

document.getElementById("app").innerHTML = `
<header><h1>Javascript bootcamp</h1></header>



</div>`;

const region = [
  "Africa/Sudan",
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Algiers",
  "Africa/Bissau",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/El_Aaiun",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Khartoum",
  "Africa/Lagos",
  "Africa/Maputo"
];

let cities = [];
let location = [];
let free = [];

region.forEach(city => {
  let dash = city.lastIndexOf("/");
  let result = city.substring(dash + 1);

  return cities.push(result);
});

cities.forEach((item, index) => {
  location.push({
    city: item,
    region: region[index]
  });
});

console.log(location);

Object.entries(location).forEach((item, index) => {
  console.log(item[1].city, "", index);
  free.push({
    id: index,
    city: item[1].city,
    region: item[1].region
  });
});

console.log(free);

let ordered = [];

Object.entries(free)
  .sort((a, b) => {
    //console.log(a[1].city,b[1].city)
    let city1 = a[1].city;
    let city2 = b[1].city;
    if (city1 > city2) return 1;
    else if (city2 > city1) return -1;
    else return 0;
  })
  .forEach(item => {
    console.log(item[1]);
    ordered.push(item[1]);
  });

console.log(ordered);
