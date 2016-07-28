let ZipcodeToBarcode = require('./ZipcodeToBarcodeTranslater');
class TranslaterZipcodeToBarcodeCommand{
    constructor(next){
        this.next = next;
    }
    execute(zipcode){
        let coreResponse = new ZipcodeToBarcode().parseZipcode(zipcode);
        if(coreResponse.type){
            return{
                text: coreResponse.text,
                reset: true
            }
        }else{
            return{
                text: "Please input right input:\n",
                next: this.next
            }
        }
    }
}

module.exports = TranslaterZipcodeToBarcodeCommand;