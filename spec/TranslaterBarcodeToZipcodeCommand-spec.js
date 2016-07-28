let TranslaterBarcodeToZipcodeCommand = require('../src/TranslaterBarcodeToZipcodeCommand');
let CommandResponse = require('../src/CommandResponse');
describe('command', function () {

    it('BarcodeToZipCommand-inputRight', function () {
        let barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
        let zipcode = new TranslaterBarcodeToZipcodeCommand().execute(barcode);

        let text = '95713';
        let reset = true;
        let next = false;
        let newMapping = false;
        let expected = new CommandResponse(text, reset, false, newMapping);
        expect(zipcode).toEqual(expected);
    });
    it('BarcodeToZipCommand-inputError', function () {
        let barcode = '||:|:::|:|:|:::|:::||::|::|:|:|';
        let next = function () {
        };
        let zipcode = new TranslaterBarcodeToZipcodeCommand(next).execute(barcode);
        let expected = new CommandResponse('Please input right input:\n', false, next, false);
        expect(zipcode).toEqual(expected);
    });
});





