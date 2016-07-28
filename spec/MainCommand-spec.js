let MainCommand = require('../src/MainCommand');
describe('command-spec',()=>{
    it('MainCommand-spec',()=>{
        let expected = {
            text:'1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        };
        expect(new MainCommand().execute()).toEqual(expected);
    })
})