let TranslaterZipcodeToBarcodeCommand = require('../src/TranslaterZipcodeToBarcodeCommand');
const goToZipToBarcodePage = require("../src/GoToZipToBarcodePage");
let CommandResponse = require('../src/CommandResponse');

describe('command', function () {

    it('goToZipToBarcodeCommand', function () {
        let goToZipToBarcodePaged = new goToZipToBarcodePage();
        let text = 'Please input zip code:';
        let reset = false;
        let next = false;
        let newMapping = {'*': new TranslaterZipcodeToBarcodeCommand(goToZipToBarcodePaged)};
        let expected = new CommandResponse(text,reset,next,newMapping);
        expect(goToZipToBarcodePaged.execute()).toEqual(expected);
    });

})
