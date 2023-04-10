function menorValor (arrProdutos, posicaoInicial){

let maisBarato = posicaoInicial

for (let atual = posicaoInicial; atual < arrProdutos.length; atual ++){
    if(arrProdutos[atual].preço < arrProdutos[maisBarato].preço){
        maisBarato = atual
           }
}
return maisBarato
}

module.exports = menorValor

