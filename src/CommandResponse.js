class CommandResponse {
    constructor(text,reset=false,next=false,newMapping=false){
        this._text=text;
        this._reset=reset;
        this._next=next;
        this._newMapping=newMapping;
    }
    get text(){
        return this._text;
    }
    get reset(){
        return this._reset;
    }
    get next(){
        return this._next;
    }
    get newMapping(){
        return this._newMapping;
    }
}
// class CommandResponse{
//     constractor(text,reset=false,next=false,newMapping=false){
//         this._text = text;
//         this._reset = reset;
//         this._next = next;
//         this._newMapping = newMapping
//     }
//     get text(){
//         return this._text;
//     }
//     get reset(){
//         return this._reset;
//     }
//     get next(){
//         return this._next;
//     }
//     get newMapping(){
//         return this._newMapping;
//     }
// }

module.exports = CommandResponse;