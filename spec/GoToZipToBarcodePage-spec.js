let TranslaterZipcodeToBarcodeCommand = require('../src/TranslaterZipcodeToBarcodeCommand');
const goToZipToBarcodePage = require("../src/GoToZipToBarcodePage");
describe('command', function () {

    it('goToZipToBarcodeCommand', function () {
        let expected = {
            text: 'Please input zip code:',
            newMapping: {'*': new TranslaterZipcodeToBarcodeCommand(goToZipToBarcodePage.goToZipToBarcodePage)}
        };
        let response = goToZipToBarcodePage.goToZipToBarcodePage();
        expect(response).toEqual(expected);
    });

})
