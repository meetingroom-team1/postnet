let Route = require('../src/route');

describe('Route-spec', ()=> {

    it('start', function () {
        let route = new Route();
        let response = route.execute("main");
        let expected =
            '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)'
        expect(response).toEqual(expected)
    });
    it('input 1', function () {
        let route = new Route();
        let response = route.execute("1");
        let expected = 'Please input zip code:';
        expect(response).toEqual(expected)
    });

    it('translate', function () {
        let route = new Route();
        route.execute("1");
        let response = route.execute("95713");
        expect(response).toEqual("||:|:::|:|:|:::|:::||::||::|:|:|")
    });
    it('translate-error', function () {
        let route = new Route();
        route.execute("1");
        let response = route.execute("789456");
        let expected = 'Please input right input:\nPlease input zip code:'
        expect(response).toEqual(expected)
    })
    it('input 2', function () {
        let route = new Route();
        let response = route.execute(2);
        let expected = 'Please input zip code:';
        expect(response).toEqual(expected);
    })
    it('translate', function () {
        let route = new Route();
        route.execute("2");
        let response = route.execute("||:|:::|:|:|:::|:::||::||::|:|:|");
        expect(response).toEqual("95713")
    });
    it('translate-error', function () {
        let route = new Route();
     route.execute("2");
     let response = route.execute("||:|::|:|:|:::|:::||::||::|:|:|");
     expect(response).toEqual("Please input right input:\nPlease input zip code:")
     });
    it('input 3', function () {
        let route = new Route();
        let response = route.execute('3');
        let expected = 'Thank you for using';
        expect(response).toEqual(expected);
    })
    it('input other', function () {
        let route = new Route();
        let response = route.execute("4");
        let expected = "no command\nPlease input right input:";
        expect(response).toEqual(expected);
    })

})


