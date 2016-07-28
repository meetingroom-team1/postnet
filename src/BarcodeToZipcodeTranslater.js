let all = require('./codes');
let _ = require('../lib/lodash/lodash.js');
let CoreResponse = require('./CoreResponse');
class BarcodeToZipcodeTranslater {
    execute(barcodeString) {
        let checkedBarcode = this.checkBarcode(barcodeString);
        let transformedBarcode = this.transformBarcode(checkedBarcode);
        let recheckedZipcode = this.recheckZipcode(transformedBarcode);
        let printZipcode = this.buildPrintZipcode(recheckedZipcode);
        // return new CoreResponse(printZipcode.text,printZipcode.type)
        return printZipcode
    }

    

    checkBarcode(barcodeString) {
        let length = barcodeString.length;
        let isBarcode = ((length - 2) / 5 == 6 || (length - 2) / 5 == 10) && barcodeString.charAt(0) == '|' && barcodeString.charAt(length - 1) == '|';
        if (isBarcode) {
            return {
                barcode: barcodeString,
                type: true
            }
        }
        return {
            barcode: barcodeString,
            type: false
        }
    }

    

    formatBarcode(checkedBarcode) {
        let string = "";
        string = checkedBarcode.barcode.substr(1, checkedBarcode.barcode.length - 2);
        return {
            barcode: string,
            type: checkedBarcode.type
        }
    }

    

    buildBarcodeArray(formattedBarcode) {
        let barcodeArrays = [];
        for (let i = 0; i < formattedBarcode.barcode.length - 1; i += 5) {
            barcodeArrays.push(formattedBarcode.barcode.substr(i, 5));
        }
        return barcodeArrays;
    }

    

    matchDigital(barcodeArrays, allCodes) {
        let type = true;
        let zipcodeArray = barcodeArrays.map((barcodeArray)=> {
            let {zipcode} = allCodes.find((allcode) => allcode.barcode === barcodeArray);
            if ({zipcode} === undefined) {
                type = false;
            } else {
                return zipcode
            }
        });
        return {
            zipcodeArray,
            type
        }
    }

    

    transformBarcode(checkedBarcode) {
        if (checkedBarcode.type === false) {
            return checkedBarcode
        }

        let formattedBarcode = this.formatBarcode(checkedBarcode);
        let barcodeArrays = this.buildBarcodeArray(formattedBarcode);
        let allCodes = all();
        let matchedDigital = this.matchDigital(barcodeArrays, allCodes);
        if (matchedDigital.type === true) {
            return matchedDigital
        } else {
            return {type: false}
        }
    }

    

    recheckZipcode(transformedBarcode) {
        if (transformedBarcode.type === false) {
            return transformedBarcode
        }
        let sum = 0;
        for (let i = 0; i < transformedBarcode.zipcodeArray.length; i++) {
            sum += parseInt(transformedBarcode.zipcodeArray[i]);
        }
        if (sum % 10 == 0) {
            return transformedBarcode
        } else {
            return {
                type: false
            }
        }
    }

    

    buildPrintZipcode(recheckedZipcode) {
        if (recheckedZipcode.type === false) {
            return "您输入的条形码有误，请您核对后再次输入"
        }
        let printArray = _.dropRight(recheckedZipcode.zipcodeArray);
        let printString = _.sum(printArray);
        if (printString.length === 9) {
            let temp1 = printString.substr(0, 5);
            let temp2 = printString.substr(5, 4);
            printString = temp1 + '-' + temp2;
        }
        return {
            text: printString,
            type: recheckedZipcode.type
        }
    }
    
}
module.exports = BarcodeToZipcodeTranslater;