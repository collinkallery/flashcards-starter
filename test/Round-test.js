const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card2 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card3 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card2 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card3 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should hold the current deck at play', function() {
    const card1 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card2 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card3 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);
    console.log('hi', round.deck);
    console.log('hello', deck);
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card4 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck, card1);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('create a new instance of a turn', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    const turn = new Turn('John', card1);

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should count the number of turns taken', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    // const turn1 = new Turn('John', card1);

    expect(round.turns).to.equal(1);

    round.takeTurn('Mexican', card2);
    // const turn2 = new Turn('Mexican', card2);

    expect(round.turns).to.equal(2);
  });

  it('should make the next card the current card', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    // const turn1 = new Turn('John', card1);

    expect(round.currentCard).to.equal(card2);

    round.takeTurn('Mexican', card2);
    // const turn2 = new Turn('Mexican', card2);

    expect(round.currentCard).to.equal(card3);
  });

  it('should store incorrect guesses', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    // const turn1 = new Turn('John', card1);

    expect(round.incorrectGuesses).to.deep.equal([card1.id]);

    round.takeTurn('Italian', card2);
    // const turn2 = new Turn('Italian', card2);

    expect(round.incorrectGuesses).to.deep.equal([card1.id, card2.id]);

    round.takeTurn('Otter', card3);
    // const turn3 = new Turn('Otter', card3);

    expect(round.incorrectGuesses).to.deep.equal([card1.id, card2.id]);
  });

  it('should give feedback based on the answer', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    const turn1 = new Turn('John', card1);

    expect(turn1.giveFeedback()).to.equal('incorrect!');

    round.takeTurn('Mexican', card2);
    const turn2 = new Turn('Mexican', card2);

    expect(turn2.giveFeedback()).to.equal('correct!');

    round.takeTurn('Otter', card3);
    const turn3 = new Turn('Otter', card3);

    expect(turn3.giveFeedback()).to.equal('correct!');
  });

  it('should calculate the percentage of correct answers', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    const turn1 = new Turn('John', card1);

    expect(turn1.giveFeedback()).to.equal('incorrect!');

    round.takeTurn('Mexican', card2);
    const turn2 = new Turn('Mexican', card2);

    expect(turn2.giveFeedback()).to.equal('correct!');

    round.takeTurn('Otter', card3);
    const turn3 = new Turn('Otter', card3);

    expect(turn3.giveFeedback()).to.equal('correct!');

    round.calculatePercentageCorrect();
    expect(round.calculatePercentageCorrect()).to.equal(66);
  });

  it('should end the round', function() {
    const card1 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card2 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card3 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);

    round.takeTurn('John', card1);
    const turn1 = new Turn('John', card1);

    expect(turn1.giveFeedback()).to.equal('incorrect!');

    round.takeTurn('Mexican', card2);
    const turn2 = new Turn('Mexican', card2);

    expect(turn2.giveFeedback()).to.equal('correct!');

    round.takeTurn('Otter', card3);
    const turn3 = new Turn('Otter', card3);

    expect(turn3.giveFeedback()).to.equal('correct!');

    round.calculatePercentageCorrect();
    expect(round.calculatePercentageCorrect()).to.equal(66);

    round.endRound();
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!');
  })
});
