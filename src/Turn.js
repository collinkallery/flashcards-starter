const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  };
  returnGuess() {
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess(guess, card) {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  };
  giveFeedback(guess, card) {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  };
};

module.exports = Turn;
