let TranslaterZipcoedToBarcodeCommand = require('../src/TranslaterZipcodeToBarcodeCommand');
let CommandResponse = require('../src/CommandResponse');
describe('command', function () {

    it('zipToBarocdeCommand-inputRight', function () {
        let zipcode = '95713';
        let barcode = new TranslaterZipcoedToBarcodeCommand().execute(zipcode);
        // let expected = {
        //     text: '||:|:::|:|:|:::|:::||::||::|:|:|',
        //     reset: true
        // }
        let text = '||:|:::|:|:|:::|:::||::||::|:|:|';
        let expected = new CommandResponse(text,true,false,false);
        //console.log(expected);
        expect(barcode).toEqual(expected);
    });
    it('zipToBarocdeCommand-inputError', function () {
        let zipcode = '9713';
        let next = function () {
        };
        let barcode = new TranslaterZipcoedToBarcodeCommand(next).execute(zipcode);
        // let expected = {
        //     text: 'Please input right input:\n',
        //     next
        // }
        let text = 'Please input right input:\n';
        let expected = new CommandResponse(text, false, next, false);
        //console.log(expected);
        expect(barcode).toEqual(expected);
    });

})
