let TranslaterZipcodeToBarcodeCommand = require('./TranslaterZipcodeToBarcodeCommand');
let goToZipToBarcodePage = function () {
    return {
        text: 'Please input zip code:',
        newMapping: {'*': new TranslaterZipcodeToBarcodeCommand(goToZipToBarcodePage)}
    }
}


module.exports = {goToZipToBarcodePage}
