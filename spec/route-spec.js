let route = require('../src/route');
describe('postnet', function () {
    beforeEach(() => {
        route.reset();
    })
    it('start', function () {
        let response = route("main");
        let expected = 
            '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        expect(response).toEqual(expected)
    });

    it('input 1', function () {
        let response = route("1");
        let expected =  'Please input zip code:';
        expect(response).toEqual(expected)
    });

    it('translate', function () {
        route("1");
        let response = route("95713");
        expect(response).toEqual("||:|:::|:|:|:::|:::||::||::|:|:|")
    });
    it('translate-error',function () {
        route("1");
        let response = route("789456");
        let expected = 'Please input right input:\nPlease input zip code:'
        expect(response).toEqual(expected)
    })
        it('input 2', function () {
            let response = route(2);
            let expected = 'Please input bar code:';
            expect(response).toEqual(expected);
        })
        it('translate', function () {
         route("2");
         let response = route("||:|:::|:|:|:::|:::||::||::|:|:|");
         expect(response).toEqual("95713")
         });
    it('translate-error', function () {
     route("2");
     let response = route("||:|::|:|:|:::|:::||::||::|:|:|");
     expect(response).toEqual("Please input right input:\nPlease input bar code:")
     });
    it('input 3', function () {
        let response = route('3');
        let expected = 'Thank you for using';
        expect(response).toEqual(expected);
    })
    it('input other', function () {
        let response = route("4");
        let expected = "no command\nPlease input right input:";
        expect(response).toEqual(expected);
    })
});
