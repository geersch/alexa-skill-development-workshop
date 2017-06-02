const WELCOME_MESSAGE = 'Welcome to High Lower guessing game. You have played 0 times. Would  you like to play?';

module.exports.handlers = {
    LaunchRequest() {
        this.emit(':tell', WELCOME_MESSAGE);
    }
};
