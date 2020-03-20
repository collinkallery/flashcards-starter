const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);
    const game = new Game(round);

    expect(game.currentRound).to.equal(round);
  });
});
