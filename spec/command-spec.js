let commands = require('../src/command');
let postnets = require('../src/postnet');
describe('command', function () {
    it('mainCommand',function () {
        let mainCommand = commands.buildMainCommand();
        let expected = {
            text:'1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        };
        expect(mainCommand).toEqual(expected);
    });
    it('goToZipToBarcodeCommand', function () {
        let inputLine = commands.goToZipToBarcodeCommand();
        let expected = {
            text: 'Please input zip code:',
            newMapping: {'*': commands.transformZipToBarcodeCommand}
        };
        expect(inputLine).toEqual(expected);
    });
    it('zipToBarocdeCommand', function () {
        let zipcode = '95713';
        let barcode = commands.transformZipToBarcodeCommand(zipcode);
        let expected = {
            text: '||:|:::|:|:|:::|:::||::||::|:|:|',
            reset: true
        }
        expect(barcode).toEqual(expected);
    });
    it('goToBarcodeToZipCommand', function () {
        let inputLine = commands.goToBarcodeToZipCommand();
        let expected = {
            text: 'Please input bar code:',
            newMapping:{'*':commands.transformBarcodeToZipCommand}
        }
        expect(inputLine).toEqual(expected);
    });
    it('barocdeToZipCommand', function () {
        let barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
        let zipcode = commands.transformBarcodeToZipCommand(barcode);
        let expected = {
            text: '95713',
            reset: true
        }
        expect(zipcode).toEqual(expected);
    });
    it('goQuit',function () {
        let result = commands.goQuit();
        let expected = {
            text: 'Thank you for using',
            reset: true,
        }
        expect(result).toEqual(expected);
    });
    it('otherInput', function () {
        let result = commands.otherInput();
        let expected = {
            text: 'Please input right input',
            reset: true,
            next: commands.buildMainCommand
        }
        expect(result).toEqual(expected);
    })
})
