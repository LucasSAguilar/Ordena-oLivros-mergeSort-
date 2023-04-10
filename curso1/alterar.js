const livros = require ('./listaLivros')
const menorValor = require ('./script.js')

for(let atual = 0; atual < livros.length; atual++){
    console.log(atual);

    let menor = menorValor(livros, atual)
    console.log(menor);
    
    let livroAtual = livros[atual] 
    console.log(livroAtual);

    let livrosMenorPreço = livros[menor]
    console.log(livrosMenorPreço);

    livros[atual] = livrosMenorPreço
    livros[menor] = livroAtual
    console.log(livros);
}

console.log(livros);