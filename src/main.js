let readline = require('readline-sync');
let route = require('./route');
// let text = '1. Translate zip code to bar code\n'
//     + '2. Translate bar code to zip code\n'
//     + '3. Quit\n'
//     + 'Please input your choices(1~3):\n';
// console.log(text);
let main = new route().execute('main');
console.log(main);
let Route = new route();
let ok = true;
while(ok){
    let input = readline.question('');
    result = Route.execute(input);
    console.log(result);
    if(result == 'Thank you for using'){
        ok = false;
    }
}
