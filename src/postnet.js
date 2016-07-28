let all = require('./codes');
let _ = require('../lib/lodash/lodash.js');
function parseBarcode (barcodeString) {
    let checkedBarcode = checkBarcode(barcodeString);
    let transformedBarcode = transformBarcode(checkedBarcode);
    let recheckedZipcode = recheckZipcode(transformedBarcode);
    let printZipcode = buildPrintZipcode(recheckedZipcode);
    return printZipcode;
}
function parseZipcode(barcodeString) {
    let checkedZipcode = checkZipcode(barcodeString);
    let transformedZipcode = transformZipcode(checkedZipcode);
    let printBarcode = buildPrintBarcode(transformedZipcode);
    return printBarcode;
}
function checkBarcode(barcodeString) {
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
function formatBarcode(checkedBarcode) {
    let string = "";
    string = checkedBarcode.barcode.substr(1, checkedBarcode.barcode.length - 2);
    return {
        barcode: string,
        type: checkedBarcode.type
    }
}
function buildBarcodeArray(formattedBarcode) {
    let barcodeArrays = [];
    for (let i = 0; i < formattedBarcode.barcode.length - 1; i += 5) {
        barcodeArrays.push(formattedBarcode.barcode.substr(i, 5));
    }
    return barcodeArrays;
}
function matchDigital(barcodeArrays, allCodes) {
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
function transformBarcode(checkedBarcode) {
    if (checkedBarcode.type === false) {
        return checkedBarcode
    }

    let formattedBarcode = formatBarcode(checkedBarcode);
    let barcodeArrays = buildBarcodeArray(formattedBarcode);
    let allCodes = all();
    let matchedDigital = matchDigital(barcodeArrays, allCodes);
    if (matchedDigital.type === true) {
        return matchedDigital
    } else {
        return {type: false}
    }
}
function recheckZipcode(transformedBarcode) {
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
function buildPrintZipcode(recheckedZipcode) {
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
        zipcode: printString,
        type: recheckedZipcode.type
    }
}
function checkZipcode(barcodeString) {
    let length = barcodeString.length;
    if (length === 10 || length === 9 || length === 5) {
        if (length === 10) {
            let hasHypken = barcodeString.includes('-') && barcodeString.indexOf('-') === barcodeString.lastIndexOf('-');
            if (!hasHypken) {
                return {type: false}
            }
        }
        return {
            zipcode: barcodeString,
            type: true
        }
    }
    return {type: false}
}
function formatZipcode(checkedZipcode) {
    let string = "";
    if (checkedZipcode.zipcode.length === 10) {
        let temps = checkedZipcode.zipcode.split('-');
        string = temps[0] + temps[1];
    } else {
        string = checkedZipcode.zipcode;
    }
    return {zipcode: string}
}
function buildZipcodeArray(formattedZipcode) {
    let zipcodeArray = [];
    for (let i = 0; i < formattedZipcode.zipcode.length; i++) {
        zipcodeArray.push(formattedZipcode.zipcode.substring(i, i + 1));
    }
    return zipcodeArray;
}
function calculateCD(zipcodeArray) {
    let sum = 0;
    for (let i = 0; i < zipcodeArray.length; i++) {
        sum += parseInt(zipcodeArray[i]);
    }
    let CD = 10 - (sum % 10) + '';
    zipcodeArray[zipcodeArray.length] = CD;
    return zipcodeArray
}
function matchString(zipcodeAndCDArrays, allCodes) {
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
function transformZipcode(checkedZipcode) {
    if (checkedZipcode.type === false) {
        return checkedZipcode
    }
    let formattedZipcode = formatZipcode(checkedZipcode);
    let zipcodeArray = buildZipcodeArray(formattedZipcode);
    let zipcodeAndCDArray = calculateCD(zipcodeArray);
    let allcodes = all();
    let matchedString = matchString(zipcodeAndCDArray, allcodes);
    if (matchedString.type === false) {
        return {type: false}
    }
    return matchedString
}
function buildPrintBarcode(transformedZipcode) {
    if (transformedZipcode.type === false) {
        return "输入的邮编有误，请重新输入！"
    }
    let string = _.sum(transformedZipcode.barcodeArray);
    let print = '|' + string + '|';
    return {
        barcode: print,
        type: transformedZipcode.type
    }
}
module.exports = {
    checkBarcode,
    formatBarcode,
    buildBarcodeArray,
    matchDigital,
    transformBarcode,
    parseBarcode,
    recheckZipcode,
    buildPrintZipcode,
    checkZipcode,
    formatZipcode,
    buildZipcodeArray,
    calculateCD,
    matchString,
    transformZipcode,
    buildPrintBarcode,
    parseZipcode
}