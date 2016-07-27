let postneted = require('./postnet');
function buildMainCommand() {
    return {
        text:'1. Translate zip code to bar code\n'
        + '2. Translate bar code to zip code\n'
        + '3. Quit\n'
        + 'Please input your choices(1~3)'
    }
}
function goToZipToBarcodeCommand() {
    return {
        text: 'Please input zip code:',
        newMapping: {'*': transformZipToBarcodeCommand}
    }
}
function transformZipToBarcodeCommand(zipcode) {
    let barcodes = postneted.parseZipcode(zipcode);
    if(barcodes.type){
        return{
            text: barcodes.barcode,
            reset: true
        }
    }else{
        return{
            text: "Please input right input:\n",
            next: goToZipToBarcodeCommand
        }
    }
}
function goToBarcodeToZipCommand() {
    return{
        text: 'Please input bar code:',
        newMapping:{'*':transformBarcodeToZipCommand}
    }
}
function transformBarcodeToZipCommand(barcode) {
    let zipcodes = postneted.parseBarcode(barcode);
    if(zipcodes.type){
        return{
            text: zipcodes.zipcode,
            reset: true,
        }
    }else{
        return{
            text: "Please input right input:\n",
            next: goToBarcodeToZipCommand
        }
    }
}
function goQuit() {
    return {
        text: 'Thank you for using',
        reset: true
    }
}
function otherInput() {
    return {
        text: 'Please input right input',
        reset: true,
        next: buildMainCommand
    }
}

module.exports = {
    buildMainCommand,
    goToZipToBarcodeCommand,
    transformZipToBarcodeCommand,
    goToBarcodeToZipCommand,
    transformBarcodeToZipCommand,
    goQuit,
    otherInput
}