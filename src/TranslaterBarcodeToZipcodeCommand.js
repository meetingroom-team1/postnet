let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
class TranslaterBarcodeToZpcodeCommand{
    constructor(next){
        this.next = next;
    }
    execute(barcode){
        let coreResponse = new BarcodeToZipcode().parseBarcode(barcode);
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

module.exports = TranslaterBarcodeToZpcodeCommand;