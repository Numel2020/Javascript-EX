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
