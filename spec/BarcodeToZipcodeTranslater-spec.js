let BarcodeToZipcodeTranslater = require('../src/BarcodeToZipcodeTranslater');
let all = require('../src/codes');
describe('postnet', function () {
    // it('checkBarcode', function () {
    //     let barcodeString = "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|";
    //     let checkedBarcode = new BarcodeToZipcodeTranslater().checkBarcode(barcodeString);
    //     let expected = {
    //         barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
    //         type: true
    //     }
    //     expect(checkedBarcode).toEqual(expected);
    // });
    // it('formatBarcode', function () {
    //     let checkedBarcode = {
    //         barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
    //         type: true
    //     };
    //     let formattedBarcode = new BarcodeToZipcodeTranslater().formatBarcode(checkedBarcode);
    //     let expected = {
    //         barcode: ":|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::",
    //         type: true
    //     }
    //     expect(formattedBarcode).toEqual(expected);
    // });
    // it('buildBarcodeArray', function () {
    //     let formattedBarcode = {
    //         barcode: ":|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::",
    //         type: true
    //     };
    //     let barcodeArray = new BarcodeToZipcodeTranslater().buildBarcodeArray(formattedBarcode);
    //     let expected = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', "::|:|", "::||:", ":|::|", "||:::"];
    //     expect(barcodeArray).toEqual(expected);
    // });
    // it('matchDigital', function () {
    //     let barcodeArray = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', "::|:|", "::||:", ":|::|", "||:::"];
    //     let allCodes = all();
    //     let matchedDigital = new BarcodeToZipcodeTranslater().matchDigital(barcodeArray, allCodes);
    //     let expected = {
    //             zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
    //             type: true
    //         }
    //         ;
    //     expect(matchedDigital).toEqual(expected);
    // })
    // it('transformBarcode', function () {
    //     let checkedBarcode = {
    //         barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
    //         type: true
    //     };
    //     let transformedBarcode = new BarcodeToZipcodeTranslater().transformBarcode(checkedBarcode);
    //     let expected = {
    //         zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
    //         type: true
    //     }
    //     expect(transformedBarcode).toEqual(expected);
    // });
    // it('recheckZipcode', function () {
    //     let transformedBarcode = {
    //         zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
    //         type: true
    //     }
    //     let recheckedZipcode = new BarcodeToZipcodeTranslater().recheckZipcode(transformedBarcode);
    //     let expected = {
    //         zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
    //         type: true
    //     }
    //     expect(recheckedZipcode).toEqual(expected);
    // });
    // it('buildPrintZipcode', function () {
    //     let recheckedZipcode = {
    //         zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
    //         type: true
    //     }
    //     let printZipcode = new BarcodeToZipcodeTranslater().buildPrintZipcode(recheckedZipcode);
    //     let expected = {
    //         text: "45056-1234",
    //         type: true
    //     };
    //     expect(printZipcode).toEqual(expected);
    // });
    it('parseBarcode', function () {
        //let barcodeString = "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|";
        let barcodeString = "||:|:::|:|:|:::|:::||::||::|:|:|";
        let parsedBarcode = new BarcodeToZipcodeTranslater().execute(barcodeString);
        //let expected = "45056-1234";
        let expected = {
            text: "95713",
            type: true
        };
        expect(parsedBarcode.text).toEqual(expected.text);
        expect(parsedBarcode.type).toEqual(expected.type);
    });
});
