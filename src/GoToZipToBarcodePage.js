let TranslaterZipcodeToBarcodeCommand = require('./TranslaterZipcodeToBarcodeCommand');
let CommandResponse = require('./CommandResponse');
// let goToZipToBarcodePage = function () {
//     return {
//         text: 'Please input zip code:',
//         reset: false,
//         next: false,
//         newMapping: {'*': new TranslaterZipcodeToBarcodeCommand(goToZipToBarcodePage)}
//     }
// }
class goToZipToBarcodePage{
    execute(){
        let text = 'Please input zip code:';
        let newMapping = {'*': new TranslaterZipcodeToBarcodeCommand(this)}
        return new CommandResponse(text,false,false,newMapping);
    }
}

module.exports = goToZipToBarcodePage;
