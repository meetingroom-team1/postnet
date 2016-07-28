let TranslaterBarcodeToZipcodeCommand = require('../src/TranslaterBarcodeToZipcodeCommand');
describe('command', function () {

    it('BarcodeToZipCommand-inputRight', function () {
        let zipcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
        let barcode = new TranslaterBarcodeToZipcodeCommand().execute(zipcode);
        let expected = {
            text: '95713',
            reset: true
        }
        expect(barcode).toEqual(expected);
    });
    it('BarcodeToZipCommand-inputError', function () {
        let zipcode = '||:|:::|:|:|:::|:::||::|::|:|:|';
        let next = function () {};
        let barcode = new TranslaterBarcodeToZipcodeCommand(next).execute(zipcode);
        let expected = {
            text: 'Please input right input:\n',
            next
        }
        expect(barcode).toEqual(expected);
    });

})
