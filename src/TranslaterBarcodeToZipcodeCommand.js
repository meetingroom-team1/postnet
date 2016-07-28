let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
let CommandResponse = require('./CommandResponse');
class TranslaterBarcodeToZpcodeCommand {
    constructor(next) {
        this.next = next;
    }

    execute(barcode) {
        let BarcodeToZip = new BarcodeToZipcode();
        let coreResponse = BarcodeToZip.execute(barcode);
        if (coreResponse.type) {

            let text = coreResponse.text;
            let reset = true;
            let newMapping = false;

            return new CommandResponse(text, reset, false, newMapping);
        } else {

            let text = "Please input right input:\n";
            let reset = false;
            let newMapping = false
            return new CommandResponse(text, reset, this.next, newMapping);
        }
    }
}

module.exports = TranslaterBarcodeToZpcodeCommand;