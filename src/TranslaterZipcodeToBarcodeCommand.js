let CommandResponse = require('./CommandResponse');
let ZipcodeToBarcode = require('./ZipcodeToBarcodeTranslater');
class TranslaterZipcodeToBarcodeCommand {
    constructor(next) {
        this.next = next;
    }

    execute(zipcode) {
        let coreResponse = new ZipcodeToBarcode().execute(zipcode);
        if (coreResponse.type) {
            return new CommandResponse(coreResponse.text, true, false, false);
        } else {
            return new CommandResponse("Please input right input:\n", false, this.next, false);
        }
    }
}

module.exports = TranslaterZipcodeToBarcodeCommand;