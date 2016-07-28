let ZipcodeToBarcodeTranslater = require('../src/ZipcodeToBarcodeTranslater');
let all = require('../src/codes');
describe('postnet', function () {
    it('checkZipcode', function () {
        let barcodeString = "957133";
        let checkedZipcode = new ZipcodeToBarcodeTranslater().checkZipcode(barcodeString);
        let expected = {
            //zipcode: "95713",
            type: false
        }
        expect(checkedZipcode).toEqual(expected);
    });
    it('formatZipcode', function () {
        let checkedZipcode = {
            zipcode: "95713",
            type: true
        }
        let formattedZipcode = new ZipcodeToBarcodeTranslater().formatZipcode(checkedZipcode);
        let expected = {
            zipcode: "95713"
        }
        expect(formattedZipcode).toEqual(expected);
    });
    it('buildZipcodeArray', function () {
        let formattedZipcode = {
            zipcode: "95713"
        }
        let zipcodeArray = new ZipcodeToBarcodeTranslater().buildZipcodeArray(formattedZipcode);
        let expected = ["9", "5", "7", "1", "3"];
        expect(zipcodeArray).toEqual(expected);
    });
    it('calculateCD', function () {
        let zipcodeArray = ["9", "5", "7", "1", "3"];
        let zipcodeAndCDArray = new ZipcodeToBarcodeTranslater().calculateCD(zipcodeArray);
        let expected = ["9", "5", "7", "1", "3", "5"];
        expect(zipcodeAndCDArray).toEqual(expected);
    });
    it('matchString', function () {
        let allcodes = all();
        let zipcodeAndCDArray = ["9", "5", "7", "1", "3", "5"];
        let matchedString = new ZipcodeToBarcodeTranslater().matchString(zipcodeAndCDArray, allcodes);
        let expected = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        };
        expect(matchedString).toEqual(expected);
    });
    it('transformZipcode', function () {
        let checkedZipcode = {
            zipcode: "95713",
            type: true
        }
        let transformedZipcode = new ZipcodeToBarcodeTranslater().transformZipcode(checkedZipcode);
        let expected = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        }
        expect(transformedZipcode).toEqual(expected);
    });
    it('buildPrintZipcode', function () {
        let transformedZipcode = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        }
        let printBarcode = new ZipcodeToBarcodeTranslater().buildPrintBarcode(transformedZipcode);
        let expected = {
            text: "||:|:::|:|:|:::|:::||::||::|:|:|",
            type: true
        };
        expect(printBarcode).toEqual(expected);
    });
    it('parseZipcode', function () {
        let barcodeString = "95713";
        let parsedZipcode = new ZipcodeToBarcodeTranslater().parseZipcode(barcodeString);
        let expected = {
            text: "||:|:::|:|:|:::|:::||::||::|:|:|",
            type: true
        };
        expect(parsedZipcode.text).toEqual(expected.text);
        expect(parsedZipcode.type).toEqual(expected.type);
    })
});
