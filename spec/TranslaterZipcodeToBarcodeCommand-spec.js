let TranslaterZipcoedToBarcodeCommand = require('../src/TranslaterZipcodeToBarcodeCommand');
describe('command', function () {

    it('zipToBarocdeCommand-inputRight', function () {
        let zipcode = '95713';
        let barcode = new TranslaterZipcoedToBarcodeCommand().execute(zipcode);
        let expected = {
            text: '||:|:::|:|:|:::|:::||::||::|:|:|',
            reset: true
        }
        expect(barcode).toEqual(expected);
    });
    it('zipToBarocdeCommand-inputError', function () {
        let zipcode = '9713';
        let next = function () {};
        let barcode = new TranslaterZipcoedToBarcodeCommand(next).execute(zipcode);
        let expected = {
            text: 'Please input right input:\n',
            next
        }
        expect(barcode).toEqual(expected);
    });

})
