let CommandResponse = require('./CommandResponse');
class GoQuit {
    execute() {
        return new CommandResponse('Thank you for using',false,false,false);
    }
}

module.exports = GoQuit;
