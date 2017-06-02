const WELCOME_MESSAGE = 'Hello my bitch CG!';

module.exports.handlers = {
    LaunchRequest() {
        this.emit(':tell', WELCOME_MESSAGE);
    }
};
