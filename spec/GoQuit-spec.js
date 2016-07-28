let GoQuit = require('../src/GoQuit');
let CommandResponse = require('../src/CommandResponse');
describe('command', function () {
    
    it('goQuit',function () {
        let result = new GoQuit().execute();
        let expected = new CommandResponse('Thank you for using',true,false,false);
        expect(result).toEqual(expected);
    });
})
