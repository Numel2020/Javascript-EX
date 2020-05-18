import "./styles.css";
//import { calc } from "./test";

document.getElementById("app").innerHTML = `
<header><h1>Javascript bootcamp</h1></header>



</div>`;

const region = [
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


let cities = []
let location = []


region.forEach(city=> {
  let dash = city.lastIndexOf('/');
  let result = city.substring(dash + 1)

  return cities.push(result)
});

cities.forEach((item, index) => {
  location.push({
    city: item,
    region: region[index]
  })
})


console.log(location);



