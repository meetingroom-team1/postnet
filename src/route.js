let commands = require('./command');
const MainCommand = require('./MainCommand');
const GoToZipToBarcodePage = require('./GoToZipToBarcodePage');
const GoToBarcodeToZipPage = require('./GoToBarcodeToZipPage');
const GoQuit = require('./GoQuit');

class Route {
    constructor() {
        this.mapping = {
            '1': new GoToZipToBarcodePage(),
            '2': new GoToBarcodeToZipPage(),
            '3': new GoQuit(),
            'main': new MainCommand()
        }
    }

    execute(input) {
        let command = this.mapping[input];
        let result = "";
        let response = "";
        if (command) {
            response = command.execute(input);
            result += response.text;
        } else if (this.mapping['*']) {
            response = this.mapping['*'].execute(input);
            result = response.text;
        } else {
            return "no command\nPlease input right input:"
        }

        if (response.next) {
            let newResponse;
            do {
                newResponse = response.next.execute(input);
                result += newResponse.text;
                //console.log(result);
            } while (newResponse.next)
        }
        if (response.reset) {
            this.reset();
        }
        if (response.newMapping) {
            this.mapping = response.newMapping
        }
        return result
    }
    reset() {
        this.mapping = {
            '1': new GoToZipToBarcodePage(),
            '2': new GoToBarcodeToZipPage(),
            '3': new GoQuit(),
            'main': new MainCommand()
        }
    }
}
module.exports = Route;