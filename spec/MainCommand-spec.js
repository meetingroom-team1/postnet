let CommandResponse = require('../src/CommandResponse');
let MainCommand = require('../src/MainCommand');
describe('command-spec',()=>{
    it('MainCommand-spec',()=>{
        let text = '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)';
        let expected = new CommandResponse(text,false,false,false)
        expect(new MainCommand().execute()).toEqual(expected);
    })
})