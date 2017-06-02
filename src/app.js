const WELCOME_MESSAGE = `Welcome to High Lowe guessing game. You have played ${this.attributes.gamesPlayed.toString()}  times. Would  you like to play?`;

const TOO_LOW = '{number} is too low';
const TOO_HIGH = 'Just like you in Amsterdam last week, this {number} is too high';
const CORRECT = '{number} is correct! Would you like to play a new game?';
const START = 'Great! Try saying a number to start the game.';
const THANK_YOU_COME_AGAIN = 'Thank you! Come again.';``

var states = {
  GUESSMODE: '_GUESSMODE',
  STARTMODE: '_STARTMODE',
}

module.exports.handlers = {
    LaunchRequest() {
        this.emit(':tell', WELCOME_MESSAGE);

        if (Object.keys(this.attributes.length) === 0) {
            this.attributes.gamesPlayed = 0;
        }

        this.handler.state = states.STARTMODE;
        this.emitWithState('Start');
    },
    SessionEndedRequest() {
        this.emit(':tell', THANK_YOU_COME_AGAIN);
    }
};

module.exports.startModeHandlers = Alexa.CreateStateHandler(states.STARTMODE, {
    Start() {
        this.emit(':ask', WELCOME_MESSAGE)
    },
    'AMAZON.YesIntent': function () {
        this.attributes.guessNumber = Math.floor(Math.random() * 100);
        this.handler.state = states.GUESSMODE;
        this.emit(':ask', START);
    },
    'AMAZON.NoIntent': function () {
        this.emit(':tell', THANK_YOU_COME_AGAIN);
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', THANK_YOU_COME_AGAIN);
    },
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', THANK_YOU_COME_AGAIN);
    },
    'AMAZON.HelpIntent': function () {

    },
    SessionEndedRequest() {

    },
    Unhandled() {

    }
});

module.exports.guessModeHandlers = Alexa.CreateStateHandler(states.GUESSMODE, {

});


var NumberGuessIntentHandlers = {
    'NumberGuessIntent': function () {

    }
}