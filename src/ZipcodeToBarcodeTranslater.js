let all = require('./codes');
let _ = require('../lib/lodash/lodash.js');
let CoreResponse = require('./CoreResponse');

class ZipcodeToBarcodeTranslater {
    execute(barcodeString) {
        let checkedZipcode = this.checkZipcode(barcodeString);
        let transformedZipcode = this.transformZipcode(checkedZipcode);
        let printBarcode = this.buildPrintBarcode(transformedZipcode);
        return printBarcode;
    }

    checkZipcode(barcodeString) {
        let array = barcodeString.split("");
        let type = false;
        let length = array.length;
        if (length === 10) {
            let hasHypken = array.includes('-') && array.indexOf('-') === array.lastIndexOf('-') && array.indexOf('-') == 5;
            let isNumber = array.filter((barcodes) => isNaN(barcodes - 0) === false);
            if (hasHypken && isNumber.length === 9) {
                type = true
            }
        } else if (length === 9) {
            let isNumber = array.filter((barcodes) => isNaN(barcodes - 0) === false);
            if (isNumber.length === 9) {
                type = true
            }
        } else if (length === 5) {
            let isNumber = array.filter((barcodes) => isNaN(barcodes - 0) === false);
            if (isNumber.length === 5) {
                type = true
            }
        }
        return {
            zipcode: barcodeString,
            type
        }
    }

    formatZipcode(checkedZipcode) {
        let string = "";
        if (checkedZipcode.zipcode.length === 10) {
            let temps = checkedZipcode.zipcode.split('-');
            string = temps[0] + temps[1];
        } else {
            string = checkedZipcode.zipcode;
        }
        return {zipcode: string}
    }

    buildZipcodeArray(formattedZipcode) {
        let zipcodeArray = [];
        for (let i = 0; i < formattedZipcode.zipcode.length; i++) {
            zipcodeArray.push(formattedZipcode.zipcode.substring(i, i + 1));
        }
        return zipcodeArray;
    }

    calculateCD(zipcodeArray) {
        let sum = 0;
        for (let i = 0; i < zipcodeArray.length; i++) {
            sum += parseInt(zipcodeArray[i]);
        }
        let CD = 10 - (sum % 10) + '';
        zipcodeArray[zipcodeArray.length] = CD;
        return zipcodeArray
    }

    matchString(zipcodeAndCDArrays, allCodes) {
        let type = true;
        let barcodeArray = zipcodeAndCDArrays.map((barcodeArray)=> {
            let {barcode} = allCodes.find((allcode) => allcode.zipcode === barcodeArray);
            if ({barcode} === undefined) {
                type = false;
            } else {
                return barcode
            }
        });
        return {
            barcodeArray,
            type
        }
    }

    transformZipcode(checkedZipcode) {
        if (checkedZipcode.type === false) {
            return checkedZipcode
        }
        let formattedZipcode = this.formatZipcode(checkedZipcode);
        let zipcodeArray = this.buildZipcodeArray(formattedZipcode);
        let zipcodeAndCDArray = this.calculateCD(zipcodeArray);
        let allcodes = all();
        let matchedString = this.matchString(zipcodeAndCDArray, allcodes);
        if (matchedString.type === false) {
            return {type: false}
        }
        return matchedString
    }

    buildPrintBarcode(transformedZipcode) {
        if (transformedZipcode.type === false) {
            return {
                text: "输入的邮编有误，请重新输入！",
                type: false
            }
        }
        let string = _.sum(transformedZipcode.barcodeArray);
        let print = '|' + string + '|';
        return {
            text: print,
            type: transformedZipcode.type
        }
    }

}
module.exports = ZipcodeToBarcodeTranslater;
