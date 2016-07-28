let commands = require('./command');
const MainCommand = require('./MainCommand');

let mapping = {
    '1': commands.goToZipToBarcodeCommand,
    '2': commands.goToBarcodeToZipCommand,
    '3': commands.goQuit,
    'main': new MainCommand()
}

function route(input) {
    let command = mapping[input];
    let result = "";
    let response = "";
    if(command){
        response = command(input);
        result += response.text;
    }else if(mapping['*']){
        response = mapping['*'](input);
        result = response.text;
    }else{
        return "no command\nPlease input right input:"
    }

    if(response.next){
        let newResponse;
        do{
            newResponse = response.next(input);
            result += newResponse.text;
            //console.log(result);
        }while(newResponse.next)
    }
    if(response.reset){
        route.reset();
    }
    if(response.newMapping){
        mapping = response.newMapping
    }
    //console.log(result);
    return result
    //if(response.reset)
}
route.reset = function () {
    mapping = {
        '1': commands.goToZipToBarcodeCommand,
        '2': commands.goToBarcodeToZipCommand,
        '3': commands.goQuit,
        'main': commands.buildMainCommand
    }
}
module.exports = route;