let TranslaterBarcodeToZipcodeCommand = require('./TranslaterBarcodeToZipcodeCommand');
let goToBarcodeToZipPage = function () {
    return {
        text: 'Please input zip code:',
        newMapping: {'*': new TranslaterBarcodeToZipcodeCommand(goToBarcodeToZipPage)}
    }
}


module.exports = {goToBarcodeToZipPage}
