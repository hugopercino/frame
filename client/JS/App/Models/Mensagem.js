//Esse é o model do update
class Mensagem {

    constructor(texto=""){
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;

    }


}

