const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

class Deck {
  constructor(cards) {
    this.cards = cards || [];
    this.cardCount = this.cards.length;
  }
  countCards() {
    return this.cardCount;
  }
}

module.exports = Deck;
