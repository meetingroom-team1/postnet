let GoQuit = require('../src/GoQuit');
describe('command', function () {
    
    it('goQuit',function () {
        let result = new GoQuit().execute();
        let expected = {
            text: 'Thank you for using',
            reset: true,
        }
        expect(result).toEqual(expected);
    });
})
