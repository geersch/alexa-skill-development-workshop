const WELCOME_MESSAGE = 'Hello Christophe, my darling!';

module.exports.handlers = {
    LaunchRequest() {
        this.emit(':tell', WELCOME_MESSAGE);
    }
};
