const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
    let cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    return round;
  }
}

module.exports = Game;
