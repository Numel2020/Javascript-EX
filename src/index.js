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

let cardAce = {
  name: "Ace of Spades"
};

let cardKing = {
  name: "King of Spades"
};

let deck = new Map();
deck.set("as", cardAce);
deck.set("kc", cardKing);
//log(deck.keys());

for (let keys of deck.values()) {
  log(keys.name);
}
