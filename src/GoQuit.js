let CommandResponse = require('./CommandResponse');
class GoQuit {
    execute() {
        return new CommandResponse('Thank you for using',true,false,false);
    }
}

module.exports = GoQuit;
