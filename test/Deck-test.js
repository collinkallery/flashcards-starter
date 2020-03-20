const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store the cards at play', function() {
    const card1 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card2 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card3 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');

    const deck = new Deck([card1, card2, card3]);
  });

  it('should count the number of cards in the deck', function() {
    const card1 = new Card(45, 'Where was Collie born?', ['Atlanta, GA', 'New York, NY', 'Denver, CO'], 'Atlanta, GA');
    const card2 = new Card(22, 'What type of pet does Collie have?', ['Fish', 'Lizard', 'Dog', 'Cat'], 'Dog');
    const card3 = new Card(5, 'What is Collie\'s pet\'s name?', ['Frank', 'Pua', 'Tiger'], 'Pua');

    const deck1 = new Deck([card1, card2, card3]);

    deck1.countCards();
    expect(deck1.cardCount).to.equal(3);

    const card4 = new Card(71, 'What is Collie\'s middle name?', ['Patrick', 'John', 'Seamus'], 'Patrick');
    const card5 = new Card(2, 'What is Collie\'s favorite food?', ['Mexican', 'Italian', 'Japanese'], 'Mexican');
    const card6 = new Card(32, 'What is Collie\'s favorite animal?', ['Lion', 'Grizzly Bear', 'Otter'], 'Otter');
    const card7 = new Card(16, 'What is Collie\'s favorite season?', ['Summer', 'Fall', 'Winter', 'Spring'], 'Spring');
    const card8 = new Card(45, 'Where was Collie born?', ['Atlanta, GA', 'New York, NY', 'Denver, CO'], 'Atlanta, GA');
    const card9 = new Card(22, 'What type of pet does Collie have?', ['Fish', 'Lizard', 'Dog', 'Cat'], 'Dog');
    const card10 = new Card(5, 'What is Collie\'s pet\'s name?', ['Frank', 'Pua', 'Tiger'], 'Pua');

    const deck2 = new Deck([card4, card5, card6, card7, card8, card9, card10]);

    deck2.countCards();
    expect(deck2.cardCount).to.equal(7);
  });
});
