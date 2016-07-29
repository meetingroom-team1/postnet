let TranslaterBarcodeToZipcodeCommand = require('../src/TranslaterBarcodeToZipcodeCommand');
const goToBarcodeToZipPage = require("../src/GoToBarcodeToZipPage");
let CommandResponse = require('../src/CommandResponse');
describe('command', function () {

    it('goToZipToBarcodeCommand', function () {
        let next = new goToBarcodeToZipPage();
        let text = 'Please input bar code:';
        let newMapping = {'*': new TranslaterBarcodeToZipcodeCommand(next)};
        let expected = new CommandResponse(text,false,false,newMapping);
        expect(new goToBarcodeToZipPage().execute()).toEqual(expected);
    });

})
