class CoreResponse{
    constractor(text,type){
        this._text = text;
        this._type = type;
    }
    get text(){
        return this._text;
    }
    get type(){
        return this._type;
    }
    
}
module.exports = CoreResponse;