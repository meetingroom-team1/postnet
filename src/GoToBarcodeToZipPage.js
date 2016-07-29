let TranslaterBarcodeToZipcodeCommand = require('./TranslaterBarcodeToZipcodeCommand');
let CommandResponse = require('./CommandResponse');
/*
let goToBarcodeToZipPage = function () {
    return {
        text: 'Please input zip code:',
        newMapping: {'*': new TranslaterBarcodeToZipcodeCommand(goToBarcodeToZipPage)}
    }
}
*/
class GoToBarcodeToZipPage{
    execute(){
        // let temp = this;
        // return {
        //     text: 'Please input zip code:',
        //     reset: false,
        //     next: false,
        //     newMapping: {'*': new TranslaterBarcodeToZipcodeCommand(temp)}
        // }
        let text = 'Please input bar code:';
        let reset = false;
        let next = false;
        let newMapping = {'*': new TranslaterBarcodeToZipcodeCommand(this)};
        return new CommandResponse(text,reset,next,newMapping);
    }
}


module.exports = GoToBarcodeToZipPage
