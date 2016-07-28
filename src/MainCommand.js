class MainCommand {
    execute() {
        return {
            text: '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        }
    }
}

module.exports = MainCommand;
