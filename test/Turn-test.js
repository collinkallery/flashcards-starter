const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a string that represents a user’s guess', function() {
    const turn = new Turn('pug');

    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card in play', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess to the player', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the card at play', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should tell the player if they were right or wrong', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card1);

    turn1.evaluateGuess('pug', card1);

    expect(turn1.evaluateGuess('pug', card1)).to.equal(false);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.evaluateGuess('sea otter', card2);

    expect(turn2.evaluateGuess('sea otter', card2)).to.equal(true);

    const card3 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn3 = new Turn('capybara', card3);

    turn3.evaluateGuess('capybara', card3);

    expect(turn3.evaluateGuess('capybara', card3)).to.equal(false);
  });

  it('should give feedback on the players guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card1);

    turn1.giveFeedback('pug', card1);

    expect(turn1.giveFeedback('pug', card1)).to.equal('incorrect!');

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.giveFeedback('sea otter', card2);

    expect(turn2.giveFeedback('sea otter', card2)).to.equal('correct!');

    const card3 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn3 = new Turn('capybara', card3);

    turn3.giveFeedback('capybara', card3);

    expect(turn3.giveFeedback('capybara', card3)).to.equal('incorrect!');
  })
});
