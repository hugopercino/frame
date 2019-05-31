class NegociacaoService{

    constructor(){

        this._http = new HttpService();
    }
    
    obterNegociacoes(localizacaoNegociacao, mensagemErro){

        return new Promise((resolve, reject) => {

            this._http
                .get(localizacaoNegociacao)
                .then(negociacoes => {

                   resolve(negociacoes.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    
                    console.log(erro);
                    reject(mensagemErro);
                })         
        });
    }
}