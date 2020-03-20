const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck.cards;
    this.currentCard = currentCard || this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess, card) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    if (!turn.evaluateGuess(guess, this.currentCard)) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    let feedback = turn.giveFeedback(guess, this.currentCard)
    for (var i = 0; i < this.deck.length; i++) {
      if (this.currentCard === this.deck[i]) {
        this.currentCard = this.deck[i + 1];
      }
      if (this.turns === this.deck.length) {
        this.endRound();
      }
    }
    return feedback;
  }
  calculatePercentageCorrect() {
    return Math.floor(100 - ((this.incorrectGuesses.length / this.deck.length) *100))
  }
  endRound() {
    const score = this.calculatePercentageCorrect();
    return `** Round over! ** You answered ${score}% of the questions correctly!`;
  }
};

module.exports = Round;
