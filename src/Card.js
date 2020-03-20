const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Card {
  constructor(id, question, possibleAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
