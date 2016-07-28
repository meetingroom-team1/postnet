let CommandResponse = require('./CommandResponse')
class MainCommand {
    execute() {
        let text =  '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        return new CommandResponse(text,false,false,false);
    }
}

module.exports = MainCommand;
