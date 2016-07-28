let TranslaterBarcodeToZipcodeCommand = require('../src/TranslaterBarcodeToZipcodeCommand');
const goToBarcodeToZipPage = require("../src/GoToBarcodeToZipPage");
describe('command', function () {

    it('goToZipToBarcodeCommand', function () {
        let expected = {
            text: 'Please input zip code:',
            newMapping: {'*': new TranslaterBarcodeToZipcodeCommand(goToBarcodeToZipPage.goToBarcodeToZipPage)}
        };
        let response = goToBarcodeToZipPage.goToBarcodeToZipPage();
        expect(response).toEqual(expected);
    });

})
